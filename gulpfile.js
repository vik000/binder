var gulp = require('gulp');
var sass = require('gulp-sass');
var gulpImport = require("gulp-html-import");


gulp.task("sass",function(){
  gulp.src("./src/scss/style.scss")
  .pipe(sass())
  .pipe(gulp.dest("./dist/css/"))
});

//copiar e importar html:
gulp.task("html",function(){
  gulp.src("src/*.html")
    .pipe(gulpImport("src/components/"))//ojo con la barra final, que debe ser imprescindible por ser una carpeta.
    .pipe(gulp.dest("dist/"))
});
