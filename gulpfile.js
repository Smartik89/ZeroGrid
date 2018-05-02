var gulp         = require('gulp'),
	sass         = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	rename       = require('gulp-rename'),
	header       = require('gulp-header'),
	date         = require('date-and-time');

// Header
var pkg    = require('./package.json');
var banner = ['/**!',
	' * <%= pkg.name %> - <%= pkg.description %>',
	' * ',
	' * Homepage : <%= pkg.homepage %>',
	' * Author   : <%= pkg.author %>',
	' * License  : <%= pkg.license %>',
	' * Version  : <%= pkg.version %>',
	' * Compiled : <%= date_now %>',
	' */',
	'',
	''].join('\n');

// Files
var scss_files      = 'src/**/*.scss',
	demo_scss_files = 'docs/**/*.scss',
	css_dir         = 'dist/';

// CSS compile task
gulp.task('compile_css', function () {
	compile_css();
	compile_css(true);
});

// CSS compile task
gulp.task('copy_to_docs', function () {
	return gulp.src('dist/zgrid.css')
		.pipe(gulp.dest('docs/assets/'));
});

// Demo styles
gulp.task('compile_demo_css', function () {
	compile_demo_css();
});

// Watcher
gulp.task('watch', function () {
	gulp.watch(scss_files, ['compile_css']);
	gulp.watch(demo_scss_files, ['compile_demo_css']);
	gulp.watch('dist/zgrid.css', ['copy_to_docs']);
});

// Compiler
function compile_css(compressed) {
	var out_style = 'expanded',
		extension = '.css';

	if (compressed) {
		out_style = 'compressed';
		extension = '.min.css';
	}

	// Prepare the compile date
	var now      = new Date(),
		date_now = date.format(now, 'YYYY/MM/DD HH:mm:ss');

	gulp.src(scss_files)
		.pipe(sass({
			outputStyle: out_style
		})
			.on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 5 versions'],
		}))
		.pipe(header(banner, {pkg: pkg, date_now: date_now}))
		.pipe(rename({extname: extension}))
		.pipe(gulp.dest(css_dir));
}

// compiler dor demo styles
function compile_demo_css() {
	gulp.src(demo_scss_files)
		.pipe(sass()
			.on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 5 versions'],
		}))
		.pipe(gulp.dest('docs/'));
}
