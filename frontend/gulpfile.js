'use strict';

var
       gulp = require('gulp'),
      watch = require('gulp-watch'),
   prefixer = require('gulp-autoprefixer'),
     uglify = require('gulp-uglify'),
       sass = require('gulp-sass'), 
fileinclude = require('gulp-file-include'),
     cssmin = require('gulp-minify-css'),
   imagemin = require('gulp-imagemin'),
   pngquant = require('imagemin-pngquant'),
     rimraf = require('rimraf'),
browserSync = require("browser-sync"),
     reload = browserSync.reload;

//Пропишем пути
var path = {
    build: { 
        html: '../build/',
          js: '../build/js/',
         css: '../build/css/',
         img: '../build/img/',
       fonts: '../build/fonts/'
    },
    src: { //исходники
        html: '../src/*.html',
          js: '../src/js/main.js',
       style: '../src/style/style.scss',
         img: '../src/img/**/*.*',
       fonts: '../src/fonts/**/*.*'
    },
    watch: { //отслеживание
        html: '../src/**/*.html',
          js: '../src/js/**/*.js',
       style: '../src/style/**/*.scss',
         img: '../src/img/**/*.*',
       fonts: '../src/fonts/**/*.*'
    },
    clean: '../build'
};

//Конфигурация сервера
var config = {
    server: {
        baseDir: "../build"
    },
    tunnel: true,
    host: 'localhost',
    port: 8000,
    logPrefix: "Frontend"
};

//обрабатываем html
gulp.task('html:build', function () {
    gulp.src(path.src.html)
         .pipe(fileinclude({
              prefix: '@@',
              basepath: '@file'
            }))
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream: true}));
});

//обрабатываем js
gulp.task('js:build', function () {
    gulp.src(path.src.js)
        .pipe(fileinclude({
              prefix: '@@',
              basepath: '@file'
            }))
        .pipe(uglify())
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}));
});

// собираем стили
gulp.task('style:build', function () {
    gulp.src(path.src.style) 
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(prefixer())
        .pipe(cssmin())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
});

//собираем изображения
gulp.task('image:build', function () {
    gulp.src(path.src.img)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img))
        .pipe(reload({stream: true}));
});

//копируем шрифты
gulp.task('fonts:build', function () {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});

//общий build
gulp.task('build', [
    'html:build',
    'js:build',
    'style:build',
    'fonts:build',
    'image:build'
]);

//отслеживание изменений
gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start('image:build');
    });
    watch([path.watch.fonts], function(event, cb) {
        gulp.start('fonts:build');
    });
});

//сервер
gulp.task('webserver', function () {
    browserSync(config);
});

//очистка
gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('default', ['build', 'webserver', 'watch']);


