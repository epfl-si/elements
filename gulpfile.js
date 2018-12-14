const gulp = require('gulp');
const svgmin = require('gulp-svgmin');

// use gulp-svgmin to remove all width/height from feathericons to ues them as icons in toolbox
gulp.task('svg-clean', () => {
  return gulp.src('assets/icons/*.svg')
    .pipe(svgmin({
      plugins:
      [
        { removeComments: true },
        { removeViewBox: false },
        { removeDimensions: true },
      ],
    }))
    .pipe(gulp.dest('./assets/icons/'));
});
