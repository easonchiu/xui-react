var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var opn = require('opn');

var config = require('./base');

config.devtool = 'source-map';

//代理服务器
var proxy = [{
	path: '*', //必须得有一个文件地址，如果顶层文件夹名字不同，则用/*代替
	target: '*',
	host: '0.0.0.0',
	secure: false
}];

var server = new webpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	progress: true,
	hot: true,
	historyApiFallback: true,
	stats: {
	    colors: true
	},
	proxy
});

var port = 8001;

server.listen(port, function() {
	// 自动打开浏览器
	var uri = 'http://localhost:' + port;
	opn(uri);
	console.log('打开浏览器', uri);
});

