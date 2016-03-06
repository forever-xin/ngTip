
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');


gulp.task('scripts',function(){
    gulp.src('src/*.js')
        .pipe(gulp.dest('dist'))
        .pipe(uglify())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(gulp.dest('dist'));
});


gulp.task('sass',function(){
    gulp.src('src/*.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(gulp.dest('dist'))
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('lib',function(){
    gulp.src('vendor/bootstrap/dist/**/*.*',{base:'vendor'})
        .pipe(gulp.dest('lib'));
    gulp.src('vendor/angular/*.min.js',{base:'vendor'})
        .pipe(gulp.dest('lib'));
});

gulp.task('default',function(){
    gulp.start(['scripts','sass']);
});