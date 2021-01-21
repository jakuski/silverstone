const { resolve } = require("path");
const pkg = require("./package.json");

const cwd = process.cwd();

// Root Folder Names
const srcFolder = "src";
// Src folder names
const mainFolder = "main";
const rendererFolder = "renderer";
const preloadFolder = "preload";

const distFolder = "dist";

module.exports = {
	outputFilenames: {
		// folder for these is located in config.paths.dist
		main: "main.js",
		renderer: "renderer.js",
		preload: "preload.js",
		rendererHTML: "renderer.mount.html",
		webScripts: "scripts.js",
		webHTML: "index.html"
	},
	misc: {
		// The ID that is used to mount the react app.
		// If you want to change the element type, edit src/renderer_mount.html
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
		}
	},
}