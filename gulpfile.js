/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var gulp = require('gulp');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');


gulp.task('cliente1', function(){
  return gulp.src('*.html')
    .pipe(useref())
.pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('build/web'))
});

gulp.task('cliente2', function(){
  return gulp.src('*.php')
    .pipe(useref())
.pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('build/web'))
});


gulp.task('administrador1', function(){
  return gulp.src('administrador/*.html')
    .pipe(useref())
.pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('build/web/administrador'))
});

gulp.task('administrador2', function(){
  return gulp.src('administrador/*.php')
    .pipe(useref())
.pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('build/web/administrador'))
});
