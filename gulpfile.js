var gulp = require('gulp'),
    elixir = require('laravel-elixir'),
    less2scss = require('gulp-less-to-scss');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

// Convert site LESS files to SASS
gulp.task('less2scss', function() {
    gulp.src('resources/assets/less/*/*.less')
        .pipe(less2scss())
        .pipe(gulp.dest('resources/assets/sass'));
});

elixir(function(mix) {
    mix
        // Run less2scss task
        .task('less2scss')

        // Copy Font Awesome and Material Design font icons
        .copy('resources/assets/fonts/*.*', 'public/fonts/')
        .copy('node_modules/font-awesome/fonts/*.*', 'public/fonts/')

        // Compile dashboard SASS file
        .sass('dashboard.scss')

        // Compile site SASS file
        .sass('site.scss')

        // jQuery and Bootstrap
        .browserify('bootstrap.js')

        // Browserify dashboard JavaScript files
        .browserify('dashboard.js')

        // Browserify site JavaScript files
        .scripts(
            [
                'site/ripples.js',
                'site/material.js',
                'site/wow.js',
                'site/jquery.mmenu.min.all.js',
                'site/count-to.js',
                'site/jquery.inview.min.js',
                'site/classie.js',
                'site/jquery.nav.js',
                'site/smooth-on-scroll.js',
                'site/smooth-scroll.js',
                'site/main.js',
                'site.js'
            ],
            'public/js/site.js'
        );
});
