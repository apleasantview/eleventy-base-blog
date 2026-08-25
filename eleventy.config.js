import baseline, { config as baselineConfig } from '@apleasantview/eleventy-plugin-baseline';
import settings from './src/_data/settings.js';

import pluginFilters from "./_config/filters.js";
import pluginNavigation from "@11ty/eleventy-navigation";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";

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

	// Filters
	eleventyConfig.addPlugin(pluginFilters);

	eleventyConfig.addShortcode("currentBuildDate", () => {
		return (new Date()).toISOString();
	});

	eleventyConfig.addPlugin(pluginNavigation);

	eleventyConfig.addPassthroughCopy({ "./src/content/feed/pretty-atom-feed.xsl": "/feed/pretty-atom-feed.xsl" });
	eleventyConfig.addPlugin(feedPlugin, {
		type: "atom", // or "rss", "json"
		outputPath: "/feed/feed.xml",
		stylesheet: "pretty-atom-feed.xsl",
		templateData: {
			eleventyNavigation: {
				key: "Feed",
				order: 4
			}
		},
		collection: {
			name: "posts",
			limit: 10,
		},
		metadata: {
			language: settings.defaultLocale,
			title: settings.title,
			subtitle: settings.tagline,
			base: settings.url,
			author: settings.author
		}
	});
}

export const config = baselineConfig;
