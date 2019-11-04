const path    = require('path');

function resolve (dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    // lintOnSave: false,
    publicPath: './',
    chainWebpack: (config) => {
        config.resolve.alias
        .set('@', resolve('src'))
        .set('assets', resolve('src/assets'))
        .set('base', resolve('src/base'))
        .set('components', resolve('src/components'))
        .set('utils', resolve('src/utils'))
    }
}