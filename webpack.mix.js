let mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.js('assets/scripts/app.js', 'assets/js')
    .sass('assets/scss/app.scss', 'assets/css')
    .options({
    processCssUrls: false,
    postCss: [ tailwindcss('./tailwind.config.js') ],
    });