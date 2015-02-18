var gulp = require('gulp'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    minifyHTML = require('gulp-minify-html'),
    watchify = require('watchify'),
    browserify = require('browserify');

// watching js file with watchify
var jsWatcher = watchify(browserify('./src/scripts/main.js', watchify.args));

function minifyMainScript() {
    return jsWatcher.bundle()
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/scripts/'));
}

// minify main.js
gulp.task('minify-main-js', minifyMainScript);

// watch main.js changes
jsWatcher.on('update', minifyMainScript);

// minify html
gulp.task('minify-html', function(){
    return gulp.src('./src/*.html')
        .pipe(minifyHTML())
        .pipe(gulp.dest('./dist/'));
});

// watch html changes
gulp.task('watch-html-change', function(){
    gulp.watch(['./src/*.html'], ['minify-html']);
});

// default task
gulp.task('default', ['minify-main-js', 'minify-html', 'watch-html-change']);


