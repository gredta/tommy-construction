// Customer reviews shown on the homepage and the Reviews page.
// Copied from T Counters' Yelp page; keep the wording as the customer wrote it.
// `featured: true` puts a review on the homepage (keep it to two).

module.exports = {
	sourceName: "Yelp",
	sourceUrl: "https://www.yelp.com/biz/t-counters-columbia",
	items: [
		{
			name: "Joshua L.",
			date: "Aug 2025",
			job: "Kitchen countertops",
			featured: true,
			text: "I asked Tommy to come take a look at my kitchen counter because I wanted them to be redone I didn't like how they looked and when I told tommy about what I wanted he made my dreams come true. I can finally say I have my dream kitchen and it's all thanks to Tommy and his crew. They made this process so easy and affordable I would recommend them to anyone all it takes is a call.",
		},
		{
			name: "Marco M.",
			date: "Jul 2025",
			job: "Kitchen & bathroom remodel",
			text: "I had an amazing experience working with T Counters on my kitchen and bathroom remodel. From start to finish, they were incredibly professional, responsive, and easy to work with. The quality of the countertops is outstanding, and the installation process was smooth and efficient. What really stood out to me was Tommy's attention to detail and willingness to listen to exactly what I wanted. They made the entire project feel stress-free, and the end result exceeded my expectations. If you're looking for a reliable, high-quality countertop and remodeling service, I highly recommend T Counters. Five stars all the way!",
		},
		{
			name: "Nico G.",
			date: "Jul 2025",
			job: "Kitchen remodel",
			// "[He]" fixes a typo in the original ("The was very professional")
			text: "Tommy and his crew did a great job with our kitchen remodel. The granite countertops were of great quality. [He] was very professional and got things done in a timely manner. five stars highly recommend.",
		},
		{
			name: "Vy N.",
			date: "Jul 2025",
			job: "Granite countertops",
			featured: true,
			text: "I'm glad that the kitchen cabinets company recommended T Counters to me for granite countertops. Their countertops were priced at much lower price than the big box companies. The service was relatively quick. Tommy came out to do the measurements the day after the cabinets were installed. He returned to install the countertops within a few days.",
		},
	],
};
