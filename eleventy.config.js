import baseline, { config as baselineConfig } from '@apleasantview/eleventy-plugin-baseline';
import settings from './src/_data/settings.js';

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default async function (eleventyConfig) {
	await eleventyConfig.addPlugin(baseline(settings));

	// Drafts, see also _data/eleventyDataSchema.js
	eleventyConfig.addPreprocessor("drafts", "*", (data, content) => {
		if (data.draft) {
			data.title = `${data.title} (draft)`;
		}

		if(data.draft && process.env.ELEVENTY_RUN_MODE === "build") {
			return false;
		}
	});
}

export const config = baselineConfig;
