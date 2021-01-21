const webpack = require("webpack");
const { merge } = require("webpack-merge");
const { getConfig } = require("../../webpack-configs");

const args = (() => {
	const split = process.argv.slice(2).map(s => s.split("="));
	const final = {};

	split.forEach(arg => {
		if (arg.length === 1) {
			final[arg[0]] = true;
		} else {
			final[arg[0]] = arg[1];
		}
	});

	return final;
})();

const consoleDispatch = data => {
	let str = `${args.id}:${data.op}`
	if (data.args) str = str + ":" + data.args.join("||");
	// console.log(str);
}

const exec = (opts, onDispatch) => {
	if (!onDispatch) onDispatch = () => {};
	onDispatch({op: "PREPARING"});

	const compiler = webpack(merge(
		getConfig(opts),
		{plugins: [
			new webpack.ProgressPlugin({
				handler (percentage) {
					onDispatch({op: "COMPILE_PROGRESS_UPDATE", args: [percentage]})
				}
			})
		]}
	));

	compiler.run((err, stats) => {
		if (err) return console.error(err);
		console.log(stats.toString({
			colors: true,
			chunks: false
		}))
	})
}

if (args.is_multiple) {
	exec(args, consoleDispatch)
} else {
	module.exports = exec;
}