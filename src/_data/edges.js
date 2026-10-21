// Edge profiles T Counters offers, in the order of their profile chart.
// Shown on the homepage ("Profiles we offer") and the edge profile guide.
//
// `path` is the profile's cross-section, drawn in an SVG viewBox of 0 0 190 100:
// the slab is 60 units thick (top at y=20, bottom at y=80) and runs off the left
// edge of the drawing (paths start at x=-10), with the finished edge on the right.

module.exports = [
	{
		name: "Eased",
		short: "Clean, modern, and versatile for everyday kitchens.",
		description:
			"Eased edges are a square edge with the sharp corners just softened. They're clean, modern, and easy to live with, and one of the most versatile profiles for kitchen countertops in almost any style of home.",
		path: "M-10 20 H164 Q170 20 170 26 V74 Q170 80 164 80 H-10 Z",
	},
	{
		name: '1/4" Round',
		short: "A softened top edge that keeps a crisp, tailored look.",
		description:
			"A small radius on the top edge keeps the counter comfortable to lean on while keeping a clean, tailored look in kitchens and baths.",
		path: "M-10 20 H155 A15 15 0 0 1 170 35 V74 Q170 80 164 80 H-10 Z",
	},
	{
		name: "Round Top & Bottom",
		short: "Rounded on both corners for a balanced, polished edge.",
		description:
			"Matching rounded corners on the top and bottom give the stone a balanced, finished look from every angle, and a softer feel than an eased edge.",
		path: "M-10 20 H155 A15 15 0 0 1 170 35 V65 A15 15 0 0 1 155 80 H-10 Z",
	},
	{
		name: "Half Bullnose",
		short: "Rounded and welcoming, with a more traditional feel.",
		description:
			"A half bullnose rounds the top of the edge and drops straight down to a flat bottom. It's a classic, softly rounded finish that feels inviting without being ornate.",
		path: "M-10 20 H140 A30 30 0 0 1 170 50 V74 Q170 80 164 80 H-10 Z",
	},
	{
		name: "Demi Bullnose",
		short: "A deeper curve that rolls down nearly to the bottom edge.",
		description:
			"A demi bullnose carries the curve further down the edge than a half bullnose before meeting the flat underside, for a fuller, more substantial rounded look.",
		path: "M-10 20 H128 C152 20 170 44 170 72 V76 Q170 80 166 80 H-10 Z",
	},
	{
		name: "Full Bullnose",
		short: "Classic, smooth, and soft for comfortable daily use.",
		description:
			"A full bullnose rounds the entire edge from top to bottom. It feels warm and classic, has no corners to bump into, and is especially popular in busy family kitchens.",
		path: "M-10 20 H140 A30 30 0 0 1 140 80 H-10 Z",
	},
	{
		name: '1/4" Bevel',
		short: "A small angled cut for a crisp, subtle detail.",
		description:
			"A quarter-inch bevel cuts a small angle along the top edge. It adds a crisp line of detail while keeping the overall look clean and modern.",
		path: "M-10 20 H158 L170 32 V74 Q170 80 164 80 H-10 Z",
	},
	{
		name: "Bevel Top & Bottom",
		short: "Angled on both corners for a layered, custom look.",
		description:
			"Beveling both the top and bottom corners gives the stone more visible profile detail and a layered, design-focused finish.",
		path: "M-10 20 H155 L170 35 V65 L155 80 H-10 Z",
	},
	{
		name: '1/2" Bevel',
		short: "A bolder bevel with more depth and definition.",
		description:
			"A half-inch bevel is a larger, more noticeable angle along the top edge. It reads as a polished, custom detail without becoming overly decorative.",
		path: "M-10 20 H146 L170 44 V74 Q170 80 164 80 H-10 Z",
	},
	{
		name: "Flat Ogee",
		short: "A gentle S-curve for a refined, understated finish.",
		description:
			"A flat ogee stretches the classic ogee curve into a longer, gentler slope. It keeps the elegance of an ogee with a cleaner, more understated silhouette.",
		path: "M-10 20 H100 C128 20 134 52 158 60 C174 65 172 80 156 80 H-10 Z",
	},
	{
		name: "Ogee",
		short: "Elegant S-shaped curves with a traditional profile.",
		description:
			"An ogee steps in with a concave curve, then rolls out into a rounded one, forming an S-shape. It brings a classic, decorative look to kitchens, baths, and statement islands.",
		path: "M-10 20 H124 C138 20 134 46 150 48 C164 50 170 62 170 72 V80 H-10 Z",
	},
	{
		name: "Ogee Bull",
		short: "An ogee curve finished with a full rounded nose.",
		description:
			"An ogee bull starts with the ogee's S-curve and finishes in a full rounded bullnose at the bottom, a rich, decorative edge for statement counters.",
		path: "M-10 20 H124 C138 20 134 46 150 48 C178 50 178 80 152 80 H-10 Z",
	},
];
