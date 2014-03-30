// Karma configuration
// Generated on Sat Mar 01 2014 18:04:39 GMT-0500 (EST)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',

    // frameworks to use
    frameworks: ['mocha', 'requirejs', 'chai', 'sinon', 'jquery-2.1.0'],

    // list of files / patterns to load in the browser
    files: [
      {pattern: 'client/*.js', included: true},
      'test/test-main.js',
      {pattern: 'test/*.js', included: true},
      {pattern: 'node_modules/**/*.js', included: false}   // allow to load any *.js from node_modules by karma web-server
    ],

    // list of files to exclude
    exclude: [],

    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress', 'dots'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-script-launcher',
      'karma-chai',
      'karma-sinon',
      'karma-mocha',
      'karma-jquery',
      'karma-requirejs'
    ],

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
