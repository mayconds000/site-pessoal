const gulp        = require('gulp')
const browserSync = require('browser-sync').create();
const sass        = require('gulp-sass');
const concat      = require('gulp-concat')


// Static server + watching sass/html files
gulp.task('serve', ['sass'], function() {
  
  browserSync.init({
    server: "./public"
  })

  gulp.watch('./sass/*.sass', ['sass']);
  gulp.watch('./public/*.html').on('change', browserSync.reload);
  gulp.watch('./js/*.js', ['js']);
});

//Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src('./sass/*.sass')
          .pipe(sass().on('error', sass.logError))
          .pipe(gulp.dest('./public/css'))
          .pipe(browserSync.stream())
});

//Functions for js files
gulp.task('js', function() {
  return gulp.src('./js/*.js')
          .pipe(concat('all.js'))
          .pipe(gulp.dest('./public'))
          .pipe(browserSync.stream())
})

gulp.task('default', ['serve']);