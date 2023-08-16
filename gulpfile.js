
const gulp = require('gulp')
const concat = require('gulp-concat') 
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin')

function tarefasCSS(cb){

    return gulp.src([
        './node_modules/bootstrap/dist/css/bootstrap.css',
        './vendor/owl/css/owl.css', 
        './vendor/fontawesome/fontawesome.css',
        './src/css-estilo/estilo-site-principal.css'
    ])
        .pipe(concat('style.css'))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'})) // libs.min.css
        .pipe(gulp.dest('./dist/css'))
}

function tarefasJS(){

    return gulp.src([
        './node_modules/jquery/dist/jquery.js',
        './'
    ])
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'})) // libs.min.js
        .pipe(gulp.dest('./dist/js'))
}

function tarefaImagem(){

    return gulp.src('./src/imagens/*')
        .pipe(imagemin({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            mozjpeg: true,
            gifsicle: true,
            svgo: true,
            concurrent: 10,
            quiet: true

        }))
        .pipe(gulp.dest('./dist/imagens'))
}

exports.styles = tarefasCSS
exports.scripts = tarefasJS
exports.images = tarefaImagem