var webpack = require('webpack');
var config = require('./base');

// 配置公共路径
config.output.publicPath = '/';

// 文件重命名
config.output.filename = '[name].[chunkhash:8].js';
config.output.chunkFilename = '[name].[chunkhash:8].js';

// 查找相等或近似的模块，避免在最终生成的文件中出现重复的模块
config.plugins.push(
	new webpack.optimize.DedupePlugin()
);

// js压缩混淆
config.plugins.push(
	new webpack.optimize.UglifyJsPlugin({
		output: {
            comments: false, // 删除注释
        },
        compress: {
            warnings: false,
        }
    })
);

module.exports = config;