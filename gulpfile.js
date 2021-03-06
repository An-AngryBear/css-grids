var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    gulp.src('sass/**/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css/'));
});

gulp.task('default', function () {
    gulp.watch('sass/**/*.sass', ['sass']);
});