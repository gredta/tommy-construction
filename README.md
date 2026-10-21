# T Counters Website

Website for **T Counters**, a granite, marble, and quartz countertop fabrication and installation company serving Maryland.

View the live site here: https://tommyconstruction.netlify.app/ 

Built with [Eleventy](https://www.11ty.dev/) (Nunjucks templates) and Sass, starting from the [CodeStitch Intermediate Kit](https://github.com/CodeStitchOfficial/Intermediate-Website-Kit-SASS). Set up to deploy on Netlify.

## Getting started

Requires Node.js 18 or newer.

```bash
npm install
npm start          # dev server with live reload at http://localhost:8080
npm run build      # production build into public/
npm run preview    # serve the production build locally
```

`public/` is generated on every build and is not committed.

## Updating the site

Most day-to-day changes are a data file edit; you don't need to touch the page templates.

| To change…                                   | Edit                                                                 |
| -------------------------------------------- | -------------------------------------------------------------------- |
| Business name, phone, email, socials, domain | `src/_data/client.js`                                                |
| Customer reviews (homepage + Reviews page)   | `src/_data/reviews.js` (`featured: true` = shown on the homepage)    |
| Edge profiles and their diagrams             | `src/_data/edges.js`                                                 |
| Our Work job titles / descriptions           | the `details` map at the top of `src/_data/work.js`                  |
| Our Work photos                              | see [Adding project photos](#adding-project-photos)                  |

Anything left blank in `client.js` (for example `email` or the street address) is hidden on the site rather than shown empty. Each entry in `client.socials` gets a footer icon from `src/assets/svgs/<platform>.svg`.

### Adding project photos

The Our Work page is built automatically from the file names in `src/assets/images/work/`:

| File names                                           | Shows up as                                    |
| ---------------------------------------------------- | ---------------------------------------------- |
| `kitchen-26-before.jpg` + `kitchen-26-after.jpg`     | a before/after slider                          |
| `kitchen-27-1.jpg`, `kitchen-27-2.jpg`, …            | one gallery card that opens a small slideshow  |
| `bathroom-6.jpg`                                     | one gallery card with a single photo           |

The first word sets the type and gallery filter: `kitchen`, `bathroom`, `fireplace`, `bar`, `closet`, `restaurant`, `office` (new types can be added in `src/_data/work.js`). The number groups photos from the same job.

Keep original phone photos **out of the repo**. Name them in a folder somewhere else, then import them:

```bash
npm run import-photos -- ~/Desktop/_photos-inbox
```

This shrinks each photo to a 2400px JPG, fixes phone rotation, converts PNGs, and copies it into `src/assets/images/work/`. Convert HEIC files to JPG first (on a Mac: open in Preview → Export). Existing files are skipped unless you pass `--force`.

### Adding a page

```bash
npm run create-page -- "Services"
```

Creates `src/content/pages/services.html` (served at `/services/`) and a matching `src/assets/sass/services.scss`. Add it to the navigation in `src/_includes/sections/header.html` and the footer.

## How it's put together

```
src/
├── _data/            Site content as data: client info, reviews, edges, Our Work jobs
├── _includes/
│   ├── layouts/      base.html: the <head>, header, and footer wrapper for every page
│   ├── sections/     header, footer, and the shared call-to-action banner
│   └── components/   small reusable pieces (review card, edge diagram, schema)
├── assets/
│   ├── images/work/  project photos (see above)
│   ├── images/brand/ logo
│   ├── js/           nav.js (all pages), work.js (Our Work sliders, filters, lightbox)
│   ├── sass/         root.scss is shared; other files are per page (about.scss → about.css)
│   └── svgs/         icons
├── content/pages/    every page except the homepage
├── index.html        homepage
└── _redirects        Netlify redirects (old /project-one/ and /project-two/ URLs → /our-work/)
scripts/              import-photos.js, create-page.js
```

**Images.** In templates, photos go through the CodeStitch Sharp plugin, which resizes and converts them to AVIF/WebP at build time:

```njk
{% getUrl "/assets/images/work/kitchen-4.jpg" | resize({ width: 960, height: 720 }) | webp %}
```

Processed images are cached in `public/assets/images`, so only new or changed photos are processed on later builds.

## Deployment

Netlify runs `npm run build` and publishes `public/` (see `netlify.toml`). Pushing to `main` deploys the site once the repo is connected to Netlify.

## Before launch

- [ ] Buy the domain and set `domain` in `src/_data/client.js` (it's used for canonical links, social previews, and the sitemap)
- [ ] Add the company email to `client.js`
- [ ] Connect the contact form (Formspree or Netlify Forms); right now it doesn't send anywhere
- [ ] Replace the stone placeholders (granite/marble/quartz cards) and the remaining Unsplash stock photos on the stone guide and the homepage "Helpful Guides" cards
- [ ] Have Tommy approve or rewrite the two quotes attributed to him (homepage and About page)
- [ ] Set up a Google Business Profile, add it to `client.socials`, and turn on the structured data in `src/index.html` (`components/home-schema.html`)
- [ ] Make a horizontal, transparent-background version of the logo and a square icon for the favicon
