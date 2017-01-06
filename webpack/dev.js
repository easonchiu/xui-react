var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var opn = require('opn');

var config = require('./base');

//代理服务器
var proxy = [{
	path: '*', //必须得有一个文件地址，如果顶层文件夹名字不同，则用/*代替
	target: '*',
	host: '0.0.0.0',
	secure: false
}];

var server = new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	progress: true,
	stats: {
	     colors: true
	},
	proxy
});

server.listen(8088, function() {
	// 自动打开浏览器
	var uri = 'http://localhost:8088';
	opn(uri);
});

