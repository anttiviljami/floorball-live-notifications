var gulp   = require('gulp');
var jshint = require('gulp-jshint');
 
gulp.task('lint', function() {
  return gulp.src(['start.js', 'lib/*.js'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

