const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const less = require("gulp-less");
const babel = require("gulp-babel");
const minify = require("gulp-babel-minify");
const { series } = require("gulp");

gulp.task("js", () => {
  return gulp
    .src("./src/index.js")
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(
      minify({
        mangle: {
          keepClassName: true,
        },
      })
    )
    .pipe(gulp.dest("dist"));
});

gulp.task("sass", () => {
  return gulp
    .src("./src/**/*.sass")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./dist"));
});

gulp.task("less", () => {
  return gulp.src("./src/**/*.less").pipe(less()).pipe(gulp.dest("./dist"));
});

gulp.task("watch", () => {
  gulp.watch("./src/index.js", series("js"));
  gulp.watch("./src/**/*.sass", series("sass"));
  gulp.watch("./src/**/*.less", series("less"));
});
