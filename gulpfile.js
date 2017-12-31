var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var plugins = require('gulp-load-plugins')();

gulp.task('sass', function(){
  return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'scss/**/*.scss'])
    .pipe(plugins.plumber(function(error){
      console.log(error.toString());
      this.emit('end');
    }))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('css'));
});

gulp.task('move-js', function(){
  return gulp.src([
      'node_modules/bootstrap/dist/js/bootstrap.min.js',
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/popper.js/dist/popper.min.js'
    ])
    .pipe(gulp.dest('js'));
});

gulp.task('watch', function(){
  gulp.watch('scss/*.scss', ['sass'])
});

gulp.task('default', ['move-js', 'sass', 'watch']);
