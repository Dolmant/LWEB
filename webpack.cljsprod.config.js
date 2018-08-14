const merge = require("webpack-merge")
const cljsConfig = require("./webpack.cljs.config")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")

module.exports = merge(cljsConfig, {
    mode: "production",
    optimization: {
        minimizer: [new UglifyJsPlugin({sourceMap: false})],
    },
})
