var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var plugins = require('gulp-load-plugins')();

gulp.task('sass', function(){
  gulp.src('sass/**/*.scss')
    .pipe(plugins.plumber(function(error){
      console.log(error.toString());
      this.emit('end');
    }))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function(){
  gulp.watch('sass/*.scss', ['sass'])
});

gulp.task('default', ['sass', 'watch']);