var gulp = require('gulp');
// var config = require('./gulp.config')();
// var	args = require('yargs').argv;
// var del = require('del');


/////// CODIGO PROPIO //////////
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/scss/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("app/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("/tmp"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
















// var $ = require('gulp-load-plugins')({lazy: true});

// // var	jshint = require('gulp-jshint');
// // var	jscs = require('gulp-jscs');
// // var	util = require('gulp-util');
// // var	gulpprint = require('gulp-print');
// // var	gulpif = require('gulp-if');


// // Analyzing source with JSHint and JSCS
// gulp.task('vet', function() 
// {
// 	log('Analyzing source with JSHint and JSCS');
// 	return gulp
// 		.src(config.alljs)
// 		.pipe($.if(args.verbose, $.print()))
// 		.pipe($.jscs())
// 		.pipe($.jshint())
// 		.pipe($.jshint.reporter('jshint-stylish', {verbose: true}))
// 		.pipe($.jshint.reporter('fail'));
	
// });


// // Compiling Less --> CSS
// gulp.task('styles', ['clean-styles'], function() 
// {
// 	log('Compiling Less --> CSS');

// 	return gulp
// 		.src(config.less)
// 		.pipe($.plumber())
// 		.pipe($.less())
// 		.pipe($.autoprefixer({browsers: ['last 2 version', '> 5%']}))
// 		.pipe(gulp.dest(config.temp));
	
// });


// // Cleaning temp
// gulp.task('clean-styles', function(done) 
// {
// 	var files = config.temp + '**/*.css';
// 	clean(files, done);
// 	// log();
// });


// // Less Watcher
// gulp.task('less-watcher', function() 
// {
// 	gulp.watch([config.less], ['styles'])
// });


// //HTML Injection
// gulp.task('wiredep', function() 
// {
// 	var options = config.getWiredepDefaultOptions();
// 	var wiredep = require('wiredep').stream;

// 	return gulp
// 		.src(config.index)
// 		.pipe(wiredep(options))
// 		.pipe($.inject(gulp.src(config.js)))
// 		.pipe(gulp.dest(config.client));
// });


// ///////////////////////////////////////

// // function clean(path)
// // {
// // 	log('Cleaning: ' + $.util.colors.blue(path));
// // 	del(path);
// // }

// function clean(path, done) {
//   log('Cleaning: ' + $.util.colors.blue(path));
//   del(path).then(function(paths) {
//     log('Deleted files and folders:\n' + paths.join('\n'));
//     done();
//   });
// }


// function log(msg) 
// {
// 	if (typeof(msg) === 'object') 
// 	{
// 		for (var item in msg) 
// 		{
// 			if (msg.hasOwnProperty(item))
// 			{
// 				$.util.log($.util.colors.blue(msg[item]));
// 			}
// 		}
// 	}
// 	else
// 	{
// 		$.util.log($.util.colors.blue(msg));
// 	}
// }