const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

// Compile SCSS to CSS
gulp.task('sass', function () {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./src/css'));
});

// Watch for changes in SCSS files
gulp.task('watch', function () {
  gulp.watch('./src/scss/**/*.scss', gulp.series('sass'));
});

// Default task
gulp.task('default', gulp.series('sass', 'watch'));