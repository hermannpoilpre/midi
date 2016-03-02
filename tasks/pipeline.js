/**
 * grunt/pipeline.js
 *
 * The order in which your css, javascript, and template files should be
 * compiled and linked from your views and static HTML files.
 *
 * (Note that you can take advantage of Grunt-style wildcard/glob/splat expressions
 * for matching multiple files.)
 *
 * For more information see:
 *   https://github.com/balderdashy/sails-docs/blob/master/anatomy/myApp/tasks/pipeline.js.md
 */


// CSS files to inject in order
//
// (if you're using LESS with the built-in default config, you'll want
//  to change `assets/styles/importer.less` instead.)
var cssFilesToInject = [
  'styles/**/*.css'
];

var jsFilesToInject = [
  'js/dependencies/sails.io.js',

  "js/dependencies/jquery/dist/jquery.min.js",
  "js/dependencies/angular/angular.min.js",
  "js/dependencies/angular-ui-router/release/angular-ui-router.min.js",
  "js/dependencies/angular-animate/angular-animate.min.js",
  "js/dependencies/angular-materialize/src/angular-materialize.js",

  'js/**/*.js'
];

var templateFilesToInject = [
  'templates/**/*.html'
];

var tmpPath = '.tmp/public/';

module.exports.cssFilesToInject = cssFilesToInject.map(function(cssPath) {
  return require('path').join('.tmp/public/', cssPath);
});
module.exports.jsFilesToInject = jsFilesToInject.map(function(jsPath) {
  return require('path').join('.tmp/public/', jsPath);
});
module.exports.templateFilesToInject = templateFilesToInject.map(function(tplPath) {
  return require('path').join('assets/',tplPath);
});


