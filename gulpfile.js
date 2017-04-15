var gulp        = require('gulp')
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Static server + watching sass/html files
gulp.task('serve', ['sass'], function() {
  
  browserSync.init({
    server: "./public"
  })

  gulp.watch('sass/*.sass', ['sass']);
  gulp.watch('public/*.html').on('change', browserSync.reload);
});

//Compiçle sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src('sass/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.stream())
});

gulp.task('default', ['serve']);