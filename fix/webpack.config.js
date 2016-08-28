module.exports = {
	entry: './src/script.js',
	output: {
		path:"./dist",
		filename: 'script.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			}
		]
	}
};