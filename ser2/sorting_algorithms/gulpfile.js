var gulp = require('gulp'),
    source = require('vinyl-source-stream'),
    uglify = require('gulp-uglify'),
    watchify = require('watchify'),
    browserify = require('browserify');

var paths = {
    mainJs: ['./src/js/main.js']
};

gulp.task('browserify', function() {
    return browserify('./src/scripts/main.js')
        .bundle()
        // Передаем имя файла, который получим на выходе, vinyl-source-stream
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('minify', function () {
    gulp.src('./src/js/main.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
});

gulp.task('greet', function () {
    console.log('Hello world!');
});


