const merge = require("webpack-merge")
const baseConfig = require("./webpack.base.config")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")

module.exports = merge(baseConfig, {
    mode: "production",
    optimization: {
        minimizer: [new UglifyJsPlugin({sourceMap: false})],
    },
})
