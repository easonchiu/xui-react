var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

var entrys = {
	index: './src/js/index.js',
	main: './src/js/main.js'
};

var chunks = [];
for (var i in entrys){
	chunks.push(i);
}

module.exports = {
	//页面入口文件配置
	entry: entrys,
	//入口文件输出配置
	output: {
		filename: '[name]' + '.js'
	},
	module: {
		//加载器配置
		loaders: [
			//转化ES6语法
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					"presets": ["es2015"]
				}
		    },
			//解析.vue文件
			{
				test: /\.vue$/,
				loader: 'vue'
			}
	    ]
    },
	plugins: [
	    new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
			},
			output: {
				comments: false,
			},
	    }),//压缩和丑化

	    new webpack.ProvidePlugin({
	    	$: 'jquery'
	    }),//直接定义第三方库

	    new CommonsChunkPlugin({
			name: "commons",
			// (the commons chunk name)

			filename: "commons.js",
			// (the filename of the commons chunk)

			minChunks: 2,
			// (Modules must be shared between 2 entries)

			chunks: chunks
			// (Only use these entries)
	    })//定义公共chunk
	],
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.js'
		}
	}
};