var gulp = require('gulp'),
  scss = require('gulp-sass'),
  browserSync = require('browser-sync').create(),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify-es').default,
  cleancss = require('gulp-clean-css'),
  autoprefixer = require('gulp-autoprefixer'),
  rsync = require('gulp-rsync'),
  imagemin = require('gulp-imagemin'),
  svgSprite = require('gulp-svg-sprite'),
  svgmin = require('gulp-svgmin'),
  cheerio = require('gulp-cheerio'),
  cache = require('gulp-cache'),
  replace = require('gulp-replace'),
  del = require('del'),
  babel = require('gulp-babel')

// Local Server
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: 'dist'
    },
    notify: false
    // online: false, // Work offline without internet connection
    // tunnel: true, tunnel: 'projectname', // Demonstration page: http://projectname.localtunnel.me
  })
})
function bsReload(done) {
  browserSync.reload()
  done()
}
gulp.task('html', function() {
  return gulp
    .src('app/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream())
})
gulp.task('fonts', function() {
  return gulp
    .src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
    .pipe(browserSync.stream())
})
gulp.task('mailPHP', function() {
  return gulp.src('app/mail.php').pipe(gulp.dest('dist/'))
})

// Custom Styles
gulp.task('styles', function() {
  return (
    gulp
      .src('app/scss/**/*.scss')
      .pipe(
        scss({
          outputStyle: 'expanded',
          includePaths: [__dirname + '/node_modules']
        })
      )
      .pipe(concat('styles.css'))
      .pipe(
        autoprefixer({
          overrideBrowserslist: ['last 10 versions']
        })
      )
      // .pipe(cleancss({ level: { 1: { specialComments: 0 } } })) // Optional. Comment out when debugging
      .pipe(gulp.dest('dist/css'))
      .pipe(browserSync.stream())
  )
})

// Scripts & JS Libraries
gulp.task('scripts', function() {
  return (
    gulp
      .src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/swiper/js/swiper.min.js',
        'node_modules/jquery.maskedinput/src/jquery.maskedinput.js',
        'node_modules/jquery-validation/dist/jquery.validate.min.js',
        'app/js/_custom.js' // Custom scripts. Always at the end
      ])
      .pipe(
        babel({
          presets: ['@babel/env']
        })
      )
      .pipe(concat('scripts.js'))
      // .pipe(uglify()) // Minify js (opt.)
      .pipe(gulp.dest('dist/js'))
      .pipe(browserSync.reload({ stream: true }))
  )
})

// IMG

gulp.task('img', function() {
  return gulp
    .src('app/img/**/*')
    .pipe(cache(imagemin())) // Cache Images
    .pipe(gulp.dest('dist/img'))
})

gulp.task('svgSpriteBuild', function() {
  return (
    gulp
      .src('app/img/sprite/*.svg')
      // минифицируем svg
      .pipe(
        svgmin({
          js2svg: {
            pretty: true
          }
        })
      )
      // удалить все атрибуты fill, style and stroke в фигурах
      .pipe(
        cheerio({
          run: function($) {
            $('[fill]').removeAttr('fill')
            $('[stroke]').removeAttr('stroke')
            $('[style]').removeAttr('style')
          },
          parserOptions: { xmlMode: true }
        })
      )
      // cheerio плагин заменит, если появилась, скобка '&gt;', на нормальную.
      .pipe(replace('&gt;', '>'))
      // build svg sprite
      .pipe(
        svgSprite({
          mode: {
            symbol: {
              sprite: 'sprite.svg'
            }
          }
        })
      )
      .pipe(gulp.dest('dist/img/sprite/'))
  )
})

// Code & Reload
gulp.task('code', function() {
  return gulp.src('app/**/*.html').pipe(browserSync.reload({ stream: true }))
})

// Deploy
gulp.task('rsync', function() {
  return gulp.src('app/').pipe(
    rsync({
      root: 'app/',
      hostname: 'username@yousite.com',
      destination: 'yousite/public_html/',
      // include: ['*.htaccess'], // Included files
      exclude: ['**/Thumbs.db', '**/*.DS_Store'], // Excluded files
      recursive: true,
      archive: true,
      silent: false,
      compress: true
    })
  )
})
gulp.task('clean', function() {
  return del('./dist')
})
gulp.task('watch', function() {
  gulp.watch('app/**/*.html', gulp.parallel('html'))
  gulp.watch('app/fonts/**/*', gulp.parallel('fonts'))
  gulp.watch('app/scss/**/*.scss', gulp.parallel('styles'))
  gulp.watch(['app/js/_custom.js', 'app/js/_libs.js'], gulp.parallel('scripts'))
  gulp.watch('app/*.html', gulp.parallel('code'))
  gulp.watch('app/img/**/*', gulp.parallel('img'))
  gulp.watch('app/img/**/*.svg', gulp.parallel('svgSpriteBuild'))
})

gulp.task(
  'default',
  gulp.series(
    'clean',
    gulp.parallel(
      'html',
      'fonts',
      'img',
      'svgSpriteBuild',
      'styles',
      'scripts',
      'mailPHP',
      'browser-sync',
      'watch'
    )
  )
)
