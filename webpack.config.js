
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",
    entry: {
        main: "./src/App.js",
    },
    output: {
        path: path.resolve("./dist"),
        filename: "wepackTest.js",
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|pages)/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: [
                  { loader: MiniCssExtractPlugin.loader },
                  {
                    loader: 'css-loader',
                    options: { import: true },
                  },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin()
    ],
};