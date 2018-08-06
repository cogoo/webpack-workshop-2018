// CommonJS syntax
// module.exports = {};

// module.exports = (env) => ({
//     output: {
//         filename: "bundle.js"
//     }
// })
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const modeConfig = env => require(`./build-scripts/webpack.${env}`)(env);

module.exports = ({
    mode,
    presets
} = {
    mode: "production",
    presets: []
}) => {
    return webpackMerge({
            mode,

            output: {
                filename: "bundle.js"
            },
            plugins: [
                new HtmlWebpackPlugin(),
                new webpack.ProgressPlugin()
            ]
        },
        modeConfig(mode)
    )
}