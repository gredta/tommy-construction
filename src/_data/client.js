module.exports = {
    name: "Tommy Construction",
    email: "hello@tommyconstruction.com",
    phoneForTel: "720-555-0149",
    phoneFormatted: "(720) 555-0149",
    address: {
        lineOne: "1420 N Charles St",
        lineTwo: "Suite 200",
        city: "Baltimore",
        state: "MD",
        zip: "21201",
        country: "US",
        mapLink: "https://maps.google.com/?q=1420+N+Charles+St+Baltimore+MD+21201",
    },
    socials: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.tommyconstructionco.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
