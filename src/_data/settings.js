export default {
	// Identity
	title: "Eleventy Base Blog v9",
	tagline: "A blog built with Eleventy Baseline",
	description: "I am writing about my experiences as a naval navel-gazer.",

	// Canonical origin. Baseline warns if this is missing — it anchors canonicals,
	// sitemap entries and the structured-data graph. Must be an absolute http(s) URL.
	url: process.env.BASELINE_URL || "http://localhost:8080",

	// Flip to true for staging origins to emit noindex site-wide.
	noindex: false,

	defaultLocale: "en",

	// Site-wide head extras. Page front matter merges over these; meta dedupes on
	// name/property/charset, link on rel + hreflang + href.
	head: {
		link: [],
		script: [],
		meta: [],
		style: []
	},

	// Site-wide SEO defaults (share images, Open Graph / Twitter overrides).
	seo: {},

	// Carried over from metadata.js. Used by the feed and by templates.
	author: {
		name: "Your Name Here",
		email: "youremailaddress@example.com",
		url: "https://example.com/about-me/"
	}
};
