var path = require("path");
var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry: SRC_DIR + "/app/index.jsx",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        loaders: [{
            test: /\.jsx?/,
            include: SRC_DIR,
            loader: "babel-loader",
            query: {
                presets: ["react", "es2015", "stage-2"]
            },
        }, {
            test: /\.s[ac]ss$/,
            include: SRC_DIR,
            loaders: [
                require.resolve('style-loader'),
                require.resolve('css-loader'),
                require.resolve('sass-loader')
            ]
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    }
};

module.exports = config;