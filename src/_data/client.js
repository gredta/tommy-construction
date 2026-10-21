module.exports = {
    name: "T Counters",
    // Where they work, used in page titles and copy. They serve all of Maryland rather than one city.
    serviceArea: "Maryland",
    // Leave empty until the company email exists; the site hides email links while this is blank
    email: "",
    phoneForTel: "443-812-2207",
    phoneFormatted: "(443) 812-2207",
    // Street address lines are hidden while empty. City and state are used in page titles.
    address: {
        lineOne: "",
        lineTwo: "",
        city: "",
        state: "MD",
        zip: "",
        country: "US",
        mapLink: "",
    },
    // Each entry gets a footer icon (src/assets/svgs/<platform>.svg) and is listed in the structured data
    socials: {
        instagram: "https://www.instagram.com/t.counters/",
        yelp: "https://www.yelp.com/biz/t-counters-columbia",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.tommyconstructionco.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
