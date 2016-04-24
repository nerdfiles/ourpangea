/***
 * @fileOverview ./test/karma.config.js
 * @description
 */
module.exports = function(config) {
  'use strict';

  config.set({
    autoWatch: true,
    basePath: '../',
    frameworks: [
      "jasmine"
    ],

    files: [
      // bower:js
      'bower_components/angular/angular.js',
      'bower_components/firebase/firebase.js',
      'bower_components/angularfire/dist/angularfire.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-aria/angular-aria.js',
      'bower_components/angular-cookies/angular-cookies.js',
      'bower_components/angular-messages/angular-messages.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-touch/angular-touch.js',
      'bower_components/mockfirebase/browser/mockfirebase.js',
      'bower_components/angular-mocks/angular-mocks.js',
      // endbower
      "app/scripts/**/*.js",
      "test/mock/**/*.js",
      "test/spec/**/*.js"
    ],
    exclude: [
    ],
    port: 8080,
    browsers: [
      "PhantomJS"
    ],
    plugins: [
      "karma-phantomjs-launcher",
      "karma-jasmine"
    ],
    singleRun: false,
    colors: true,
    logLevel: config.LOG_INFO,
  });
};
