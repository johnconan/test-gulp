var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var less = require('gulp-less');

gulp.task('server', ['styles'], function() {
    browserSync.init({
    	server: { baseDir: './docs/'}
    });
    gulp.watch('./docs/**/*.html').on('change', browserSync.reload);
    gulp.watch('./docs/less/**/*.less', ['styles']);
});

gulp.task('styles', function() {
    return gulp.src('./docs/less/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('./docs/css'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['server']);
