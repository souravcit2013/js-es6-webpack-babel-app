const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, "app"),
    output: {
        path: path.resolve(__dirname,"build"),
        filename: "esSixBundle.js"
    },
    devServer: {
        port: 2804,
        contentBase: path.resolve(__dirname,"build"),
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    }
}