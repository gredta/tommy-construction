//
//    Our Work page: before/after sliders, gallery filters, and the photo lightbox
//

// ─── Before/after sliders ───────────────────────────────────────────────────
// The range input drives the slider (and gives keyboard support); pointer events
// let people drag anywhere on the photo instead of hunting for the handle.
document.querySelectorAll(".cs-ba-frame").forEach((frame) => {
	const range = frame.querySelector(".cs-ba-range");

	const setPosition = (percent) => {
		const clamped = Math.min(100, Math.max(0, percent));
		frame.style.setProperty("--position", `${clamped}%`);
		range.value = clamped;
	};

	const setFromPointer = (event) => {
		const rect = frame.getBoundingClientRect();
		setPosition(((event.clientX - rect.left) / rect.width) * 100);
	};

	range.addEventListener("input", () => setPosition(Number(range.value)));

	frame.addEventListener("pointerdown", (event) => {
		frame.setPointerCapture(event.pointerId);
		setFromPointer(event);
	});
	frame.addEventListener("pointermove", (event) => {
		if (frame.hasPointerCapture(event.pointerId)) setFromPointer(event);
	});
});

// ─── Gallery filters ────────────────────────────────────────────────────────
const filterButtons = document.querySelectorAll(".cs-filter");
const galleryItems = document.querySelectorAll(".cs-gallery-item");

filterButtons.forEach((button) => {
	button.addEventListener("click", () => {
		const filter = button.dataset.filter;
		filterButtons.forEach((b) => b.setAttribute("aria-pressed", String(b === button)));
		galleryItems.forEach((item) => {
			item.hidden = filter !== "all" && item.dataset.category !== filter;
		});
	});
});

// ─── Lightbox ───────────────────────────────────────────────────────────────
// Each gallery link points at the full-size photo, so without JavaScript the
// photos still open in the browser. With it, they open in a <dialog> instead.
const lightbox = document.getElementById("work-lightbox");

if (lightbox) {
	const image = lightbox.querySelector(".cs-lightbox-img");
	const caption = lightbox.querySelector(".cs-lightbox-caption");
	const prevButton = lightbox.querySelector(".cs-lightbox-prev");
	const nextButton = lightbox.querySelector(".cs-lightbox-next");
	let photos = [];
	let index = 0;

	const show = (newIndex) => {
		index = (newIndex + photos.length) % photos.length;
		const link = photos[index];
		image.src = link.href;
		image.alt = link.dataset.caption;
		caption.textContent = photos.length > 1 ? `${link.dataset.caption} · ${index + 1} of ${photos.length}` : link.dataset.caption;
	};

	document.querySelectorAll(".cs-gallery-link").forEach((link) => {
		link.addEventListener("click", (event) => {
			event.preventDefault();
			photos = [...document.querySelectorAll(`.cs-gallery-link[data-gallery="${link.dataset.gallery}"]`)];
			prevButton.hidden = nextButton.hidden = photos.length < 2;
			show(photos.indexOf(link));
			lightbox.showModal();
		});
	});

	prevButton.addEventListener("click", () => show(index - 1));
	nextButton.addEventListener("click", () => show(index + 1));
	lightbox.querySelector(".cs-lightbox-close").addEventListener("click", () => lightbox.close());

	lightbox.addEventListener("keydown", (event) => {
		if (photos.length < 2) return;
		if (event.key === "ArrowLeft") show(index - 1);
		if (event.key === "ArrowRight") show(index + 1);
	});

	// Clicking the dark backdrop (the dialog element itself, not its contents) closes it
	lightbox.addEventListener("click", (event) => {
		if (event.target === lightbox) lightbox.close();
	});

	// Free the large image when closed so it doesn't flash on the next open
	lightbox.addEventListener("close", () => image.removeAttribute("src"));
}
