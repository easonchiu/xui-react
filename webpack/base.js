var webpack = require('webpack');
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var ROOT_PATH = path.resolve(__dirname, '../');
var SRC_PATH = path.resolve(ROOT_PATH, 'src');
var MAIN_FILE = path.resolve(SRC_PATH, 'main.jsx');
var DIST_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = function makeWebpackConfig(){

	var config = {};

	// 页面入口文件
	config.entry = {
		'app': MAIN_FILE,
	};

	// 输出文件
	config.output = {
		publicPath: '/',
		path: DIST_PATH, // 输出目录
		filename: '[name].bundle.js', // 最终打包生产的文件名
		chunkFilename: '[name].bundle.js',
	};

	// 插件项
	config.plugins = [];
	
	// 自动生成html模板
	config.plugins.push(
		new htmlWebpackPlugin({
			template: 'src/index.html',
			inject: 'body',
			inject: true,
			minify: {
        		removeComments: true,
        		collapseWhitespace: true,
        		removeAttributeQuotes: true
        		// more options:
        		// https://github.com/kangax/html-minifier#options-quick-reference
    		},
    		// necessary to consistently work with multiple chunks via CommonsChunkPlugin
    		chunksSortMode: 'dependency'
		})
	);
	
	// 提取css
	config.plugins.push(
		new ExtractTextPlugin('styles/[name].[contenthash:8].css', { allChunks: true })
	);

	// 将第三方框架打包进vendor
	config.plugins.push(
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: function(module, count){
		        return (
		        	module.resource &&
		        	/\.js$/.test(module.resource) &&
		        	module.resource.indexOf('/node_modules/') != -1
		        )
		    }
		})
	);

	// 将运行时runtime抽离出来放到manifest
	config.plugins.push(
		new webpack.optimize.CommonsChunkPlugin({
			name: ['vendor', 'manifest'],
		})
	);

	// 加载器
	config.module = {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					presets: ['es2015']
				}
			},
			{
				test: /\.jsx$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					presets: ['react', 'es2015']
				}
			},
			{
				test: /\.html$/,
				loader: 'html',
				query: {
					minimize: true
				}
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('style', 'css?minimize!sass?sourceMap')
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style', 'css?minimize')
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url',
				query: {
					limit: 8192,
					name: 'images/[name].[hash:8].[ext]',
				}
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'file',
				query: {
					name: 'images/[name].[hash:8].[ext]',
				}
			}
		]
	}

	// 自动匹配后缀名
	config.resolve = {
		extensions: ['', '.js', '.jsx', '.scss', '.css']
	}



	return config;
}();