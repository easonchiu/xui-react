var webpack = require('webpack');
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var extractTextPlugin = require("extract-text-webpack-plugin");

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
		path: DIST_PATH,
		filename: 'static/js/[name].bundle.js',
		chunkFilename: 'static/js/[name].bundle.js',
	};

	// 插件项
	config.plugins = [];
	
	// 自动生成html模板
	config.templateSetting = new htmlWebpackPlugin({
		title: 'react dev',
		template: 'src/index.html',
		filename: 'index.html',
		inject: 'body', // 所有javascript资源将被注入至body底部
		minify: {
    		removeComments: true, // 删除注释
    		collapseWhitespace: true, // 压缩成一行
		}
	})
	config.plugins.push(
		config.templateSetting
	);
	
	// 提取css
	config.cssPlugin = new extractTextPlugin('static/css/[name].bundle.css', { allChunks: true /*是否将分散的css文件合并成一个文件*/ });
	config.plugins.push(
		config.cssPlugin
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
	config.fileLoader = {
		test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
		loader: 'file',
		query: {
			name: 'static/images/[name].[ext]',
		}
	};
	config.urlLoader = {
		test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
		loader: 'url',
		query: {
			limit: 8192,
			name: 'static/images/[name].[ext]',
		}
	};
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
			// 该loader会与htmlWebpackPlugin插件冲突导致title变量不起作用，故注释掉
			// {
			// 	test: /\.html$/,
			// 	loader: 'html',
			// 	query: {
			// 		minimize: true
			// 	}
			// },
			{
				test: /\.scss$/,
				loader: extractTextPlugin.extract('style', 'css?minimize!sass?sourceMap')
			},
			{
				test: /\.css$/,
				loader: extractTextPlugin.extract('style', 'css?minimize')
			},
			config.urlLoader,
			config.fileLoader,
		]
	}

	// 自动匹配后缀名
	config.resolve = {
		extensions: ['', '.js', '.jsx', '.scss', '.css']
	}



	return config;
}();