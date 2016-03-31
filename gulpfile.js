var gulp = require('gulp');
var browser = require('gulp-browser');

gulp.task('js', function() {
  return gulp.src('./js/app.js')
	.pipe(browser.browserify())
	.pipe(gulp.dest('public/js'));
});
