const { resolve } = require("path");
const pkg = require("./package.json");

const cwd = process.cwd();

// Folder Names
const srcFolder = "src";
const mainFolder = "main";
const rendererFolder = "renderer";
const preloadFolder = "preload";
const distFolder = "dist";

module.exports = {
	output: {
		filenames: {
			main: "main.js",
			renderer: "renderer.js",
			preload: "preload.js",
			rendererHTML: "renderer.mount.html"
		}
	},
	misc: {
		// The ID that is used to mount the react app.
		reactRootId: "app-mount",
		// lodash template parameters used in renderer mount html
		htmlTemplateParams: {
			appName: pkg.name
		}
	},
	paths: {
		entry: {
			main: resolve(cwd, srcFolder, mainFolder, "index.ts"),
			renderer: resolve(cwd, srcFolder, rendererFolder, "index.tsx"),
			rendererHTML: resolve(cwd, srcFolder, "renderer_mount.html"),
			preload: resolve(cwd, srcFolder, preloadFolder, "index.ts")
		},
		dist: {
			app: resolve(cwd, distFolder, "app"),
			web: resolve(cwd, distFolder, "web"),
		},
		rendererMountHtml: resolve(cwd, srcFolder, "renderer_mount.html")
	},
}