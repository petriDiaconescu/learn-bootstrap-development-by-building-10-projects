var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var plugins = require('gulp-load-plugins')();

gulp.task('less', function(){
  gulp.src('less/**/*.less')
    .pipe(plugins.plumber(function(error){
      console.log(error.toString());
      this.emit('end');
    }))
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function(){
  gulp.watch('less/*.less', ['less'])
});

gulp.task('default', ['less', 'watch']);