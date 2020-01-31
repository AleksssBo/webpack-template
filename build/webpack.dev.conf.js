const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    devServer: {
        contentBase: baseWebpackConfig.externals.paths.dist,
        port: 8081,
        overlay: true
    },
    plugins: []
})

module.exports = new Promise(resolve => {
    resolve(devWebpackConfig)
})