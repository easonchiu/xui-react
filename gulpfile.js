'use strict';

// 目录配置
var Asset = {
	js: ["src/js/*.js", "dist/js"],
	scss: ["src/scss/**/*.scss", "src/css"],
	css: ["src/css/*.css", "dist/css"],
	images: ["src/images/*.png", "dist/images"],
};

// 引入gulp
var gulp = require("gulp");
var scss = require("gulp-sass");
var css = require('gulp-minify-css');

// js压缩
gulp.task("js", function(){
	return gulp.src(Asset.js[0])
	.pipe(gulp.dest(Asset.js[1]));
});

// scss转css
gulp.task("scss", function(){
	return gulp.src(Asset.scss[0])
	.pipe(scss().on("error", scss.logError))
	.pipe(gulp.dest(Asset.scss[1]));
});

// css压缩
gulp.task("css", function(){
	return gulp.src(Asset.css[0])
	.pipe(css())
	.pipe(gulp.dest(Asset.css[1]));
});



// 主程序
gulp.task("default", ["scss", "js"], function() {
	gulp.watch(Asset.scss[0], ["scss"]);
	gulp.watch(Asset.css[0], ["css"]);
	gulp.watch(Asset.js[0], ["js"]);
});