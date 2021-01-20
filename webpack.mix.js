// webpack.mix.js
let mix = require('laravel-mix');

mix.sass('src/scss/styles.scss', 'dist/css');

mix.copy('src/index.html', 'dist/index.html');
mix.copyDirectory('src/images', 'dist/images');