import os from 'os';
import 'dotenv/config';

if (!process.env.SITE) {
  console.warn("Missing SITE env, defaulting to site-1")
}

const site = process.env.SITE || "design";
const input = `./src/_sites/${site}/`;
const output = `_sites/${site}`;


export default function(eleventyConfig) {
	// 11ty uses gitignore to ignore watching files. Disable this.
	eleventyConfig.setUseGitIgnore(false);

	eleventyConfig.setQuietMode(true);

	eleventyConfig.setDataFileBaseName("_config");

	// We're setting 11ty to build when scss/js is updated, but we want a delay so that the assets have time to build
	eleventyConfig.setWatchThrottleWaitTime(120);

	//--- Plugins


	//--- Misc Options
	// Additional files to watch for changes
	eleventyConfig.addWatchTarget("src/scss/**/*.scss");
	eleventyConfig.addWatchTarget("src/js/**/*.js");

	//--- Adds CSS/JS to _site
	eleventyConfig.addPassthroughCopy({ "_dist/main.css": "css/main.css" });
	eleventyConfig.addPassthroughCopy({ "_dist/main.js": "js/main.js" });

	//--- Adds Favicons to _site
	eleventyConfig.addPassthroughCopy({ "src/favicons": "favicons" });

	//--- Adds images to _site
	eleventyConfig.addPassthroughCopy({ "src/img": "img" });

	//--- Adds fonts to _site
	eleventyConfig.addPassthroughCopy({ "src/fonts": "fonts" });

	//--- Adds fonts to _site
	eleventyConfig.addPassthroughCopy({ "_redirects": "" });

	eleventyConfig.addShortcode("youtube", (videoURL, title) => {
		const url = new URL(videoURL);
		const id = url.searchParams.get("v");
		return `
			<iframe class="yt-shortcode" src="https://www.youtube-nocookie.com/embed/${id}" title="YouTube video player${title ? ` for ${title}` : ""}" frameborder="0" allowfullscreen></iframe>`;
	});

	eleventyConfig.addShortcode('galleryItem', (img, caption, galleryID, link) => {
		if (link) {
			return `<a class="gallery__item" aria-label="Open image in gallery view" href="${img}" data-fancybox="${galleryID}" data-caption="${caption}"><img src="${img}" alt="" width="400" height="400"></a> `;
		} else {
			return `<div class="gallery__item no-link"><img src="${img}" alt="" width="400" height="400"></div> `;
		}
	});

	eleventyConfig.addGlobalData('multisite', function () {
		return site;
	});

	//--- Determine if local or live
	eleventyConfig.addGlobalData('local', function () {
		const hostname = os.hostname();

		if (hostname.includes('local')) {
			return true;
		} else {
			return false;
		}
	});

	return {
		dir: {
			input: input,
			output: output,
			layouts: "../../_layouts",
			includes: "../../_includes",
			data: "../../_data"
		}
	}
}