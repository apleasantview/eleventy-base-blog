export default {
	tags: [
		"posts"
	],
	"layout": "layouts/post.njk",
	permalink: function ({page}) {
		if (page.inputPath.includes('11tydata.js')) {
			return false;
		}
		return `/blog/${this.slugify(page.fileSlug)}/`;
	}
};
