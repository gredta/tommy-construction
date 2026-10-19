// Builds the Our Work page from the photos in src/assets/images/work/.
// File names decide the layout (see scripts/import-photos.js):
//   kitchen-7-before.jpg + kitchen-7-after.jpg → before/after slider
//   kitchen-22-1.jpg, kitchen-22-2.jpg         → gallery job with several photos
//   bathroom-3.jpg                             → gallery job with one photo

const fs = require("fs");
const path = require("path");

const PHOTO_DIR = "src/assets/images/work";
const URL_PATH = "/assets/images/work";

// What each job type is called on the site, and which gallery filter it sits under
const types = {
	kitchen: { title: "Kitchen", category: "kitchens" },
	bathroom: { title: "Bathroom Vanity", category: "bathrooms" },
	fireplace: { title: "Fireplace Surround", category: "specialty" },
	bar: { title: "Outdoor Bar", category: "specialty" },
	closet: { title: "Closet Island", category: "specialty" },
	restaurant: { title: "Restaurant Bar", category: "commercial" },
	office: { title: "Reception Desk", category: "commercial" },
};

const categories = [
	{ id: "kitchens", label: "Kitchens" },
	{ id: "bathrooms", label: "Bathrooms" },
	{ id: "commercial", label: "Commercial" },
	{ id: "specialty", label: "Specialty" },
];

// Optional per-job details, keyed by job id (e.g. "kitchen-19"). Add a title or a
// short description here once we know the stone, location, etc.
const details = {};

module.exports = function () {
	const jobs = new Map();

	const files = fs
		.readdirSync(PHOTO_DIR)
		.filter((file) => file.endsWith(".jpg"))
		.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

	for (const file of files) {
		const match = path.basename(file, ".jpg").match(/^([a-z]+)-(\d+)(?:-(before|after|\d+))?$/);
		if (!match) {
			console.warn(`[work] Ignoring ${file}: name doesn't follow the type-number(-before/-after/-n) pattern`);
			continue;
		}

		const [, type, number, suffix] = match;
		const id = `${type}-${number}`;
		const url = `${URL_PATH}/${file}`;

		if (!jobs.has(id)) {
			const typeInfo = types[type] || { title: type.charAt(0).toUpperCase() + type.slice(1), category: "specialty" };
			jobs.set(id, {
				id,
				type,
				number: Number(number),
				title: typeInfo.title,
				category: typeInfo.category,
				description: "",
				...details[id],
				photos: [],
			});
		}

		const job = jobs.get(id);
		if (suffix === "before" || suffix === "after") {
			job[suffix] = url;
		} else {
			job.photos.push(url);
		}
	}

	// Kitchens first, then the rest in the order of `types` above; numbered order within each type
	const typeOrder = Object.keys(types);
	const rank = (job) => (typeOrder.includes(job.type) ? typeOrder.indexOf(job.type) : typeOrder.length);
	const all = [...jobs.values()].sort((a, b) => rank(a) - rank(b) || a.number - b.number);
	for (const job of all) {
		// An "after" without its "before" still belongs in the gallery; a lone "before" is never shown
		if (job.after && !job.before) job.photos.unshift(job.after);
	}

	return {
		categories,
		beforeAfter: all.filter((job) => job.before && job.after),
		gallery: all.filter((job) => !(job.before && job.after) && job.photos.length > 0),
	};
};
