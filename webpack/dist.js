var webpack = require('webpack');
var config = require('./base');

// 配置公共路径
config.output.publicPath = '/';

// 文件重命名
config.output.filename = 'static/js/[name].[chunkhash:8].js';
config.output.chunkFilename = 'static/js/[name].[chunkhash:8].js';
config.cssPlugin.filename = 'static/css/[name].[contenthash:8].css';
config.fileLoader.query.name = 'static/images/[name].[hash:8].[ext]';
config.urlLoader.query.name = 'static/images/[name].[hash:8].[ext]';

// 重新配置模板信息
config.templateSetting.options.title = 'react';

// 查找相等或近似的模块，避免在最终生成的文件中出现重复的模块
config.plugins.push(
	new webpack.optimize.DedupePlugin()
);

// 还不清楚是干啥的...
config.plugins.push(
	new webpack.optimize.OccurenceOrderPlugin()
);

// 切换到产品版本
config.plugins.push(
	new webpack.DefinePlugin({
		"process.env": { 
			NODE_ENV: JSON.stringify("production")
		}
	})
);

// js压缩混淆
config.plugins.push(
	new webpack.optimize.UglifyJsPlugin({
		output: {
            comments: false,
        },
        compress: {
            warnings: false,
        }
    })
);


module.exports = config;