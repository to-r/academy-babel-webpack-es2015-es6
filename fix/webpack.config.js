var path = require('path');

module.exports = {
    entry: "./src/script.js",
    output: {
        path:path.resolve(__dirname, "dist"),
        filename: "script.js"
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