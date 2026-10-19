// ─────────────────────────────────────────────────────────────────────────────
// IMPORT PHOTOS
// Copies job photos from a folder into src/assets/images/work/, shrunk to a
// sensible master size so the repo never holds 5MB phone originals.
//
// Usage: npm run import-photos -- <folder> [--force]
//
// Name the files before importing — the Our Work page is built from the names:
//   kitchen-26-before.jpg + kitchen-26-after.jpg  → before/after slider
//   kitchen-27-1.jpg, kitchen-27-2.jpg, ...       → one gallery job, several photos
//   bathroom-6.jpg                                → one gallery job, one photo
// ─────────────────────────────────────────────────────────────────────────────

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const OUTPUT_DIR = "src/assets/images/work";
const MAX_SIZE = 2400; // longest edge in px; the site never shows anything larger
const EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

const args = process.argv.slice(2);
const force = args.includes("--force");
const sourceDir = args.find((arg) => !arg.startsWith("--"));

if (!sourceDir || !fs.existsSync(sourceDir)) {
	console.error("Usage: npm run import-photos -- <folder> [--force]");
	process.exit(1);
}

fs.mkdirSync(OUTPUT_DIR, { recursive: true });

(async () => {
	const files = fs.readdirSync(sourceDir).filter((file) => !file.startsWith("."));

	for (const file of files) {
		const ext = path.extname(file).toLowerCase();
		if (!EXTENSIONS.includes(ext)) {
			console.log(`Skipped ${file} (convert ${ext} files to .jpg first)`);
			continue;
		}

		const name = path.basename(file, path.extname(file)).toLowerCase();
		const outputPath = path.join(OUTPUT_DIR, `${name}.jpg`);
		if (fs.existsSync(outputPath) && !force) {
			console.log(`Skipped ${file} (already imported, use --force to replace)`);
			continue;
		}

		await sharp(path.join(sourceDir, file))
			.rotate() // bake in the phone's EXIF orientation
			.resize({ width: MAX_SIZE, height: MAX_SIZE, fit: "inside", withoutEnlargement: true })
			.flatten({ background: "#ffffff" }) // PNG screenshots have an alpha channel
			.jpeg({ quality: 82, mozjpeg: true })
			.toFile(outputPath);
		console.log(`Imported ${file} → ${outputPath}`);
	}
})();
