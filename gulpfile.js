var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
	gulp.src('sass/style.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./css/'));
	gulp.src('bootstrap/scss/bootstrap.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./bootstrap/dist/css'));
});

//Watch task
gulp.task('default',function() {
	gulp.watch('sass/style.scss',['styles']);
	gulp.watch('bootstrap/scss/bootstrap.scss',['styles']);
});