'use strict';

// 目录配置
var Asset = {
	js: ["src/entry.js", "dist/js", "src/js/**/*.js"],
	scss: ["src/scss/**/*.scss", "dist/css"],
	images: ["src/images/*.+(png|jpg|gif|svg)", "dist/images"],
	html: ["src/**/*.html", "dist/"]
};

// 载入外挂
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    order = require("gulp-order"),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    webpack = require('gulp-webpack'),
    fileinclude = require('gulp-file-include');

//html
gulp.task('html', function() {
  return gulp.src(Asset.html[0])
      .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
      }))
      .pipe(gulp.dest(Asset.html[1]))
      .pipe(notify({ message: 'html task complete' }));
});

// 脚本
gulp.task('scripts', function(callback) {
  return gulp.src(Asset.js[0])
      .pipe(webpack( require('./webpack.config.js') ))
      .pipe(gulp.dest(Asset.js[1]));
});

// 样式
gulp.task('styles', function() {
  return sass(Asset.scss[0])
      .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
      .pipe(gulp.dest(Asset.scss[1]))
      .pipe(rename({ suffix: '.min' }))
      .pipe(minifycss())
      .pipe(gulp.dest(Asset.scss[1]))
      .pipe(notify({ message: 'Styles task complete' }));
});

// 图片
gulp.task('images', function() {
  return gulp.src(Asset.images[0])
      .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
      .pipe(gulp.dest(Asset.images[1]))
      .pipe(notify({ message: 'Images task complete' }));
});

// 清理
gulp.task('clean', function() {
  return gulp.src([Asset.scss[1], Asset.js[1], Asset.images[1]], {read: false})
      .pipe(clean());
});

// 预设任务
gulp.task('default', ['clean'], function() {
  gulp.start('styles', 'scripts', 'images', 'html');
});



gulp.task('watch', function() {

  // 看守所有.scss档
  gulp.watch(Asset.scss[0], ['styles']);

  // 看守所有.js档
  gulp.watch(Asset.js[2], ['scripts']);

  // 看守所有图片档
  gulp.watch(Asset.images[0], ['images']);

  //看守html
  gulp.watch(Asset.html[0], ['html']) ;

  livereload.listen();
  gulp.watch(['dist/**']).on('change', livereload.changed);

});