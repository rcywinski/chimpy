"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _path = _interopRequireDefault(require("path"));

var _ci = require("../lib/ci");

module.exports = {
  // - - - - CHIMP - - - -
  watch: false,
  watchTags: '@watch,@focus',
  domainSteps: null,
  e2eSteps: null,
  fullDomain: false,
  domainOnly: false,
  e2eTags: '@e2e',
  watchWithPolling: false,
  server: false,
  serverPort: 8060,
  serverHost: 'localhost',
  sync: true,
  offline: false,
  showXolvioMessages: true,
  'fail-when-no-tests-run': false,
  // - - - - CUCUMBER - - - -
  path: './features',
  format: 'pretty',
  tags: '~@ignore',
  singleSnippetPerFile: true,
  recommendedFilenameSeparator: '_',
  chai: false,
  screenshotsOnError: (0, _ci.isCI)(),
  screenshotsPath: '.screenshots',
  captureAllStepScreenshots: false,
  saveScreenshotsToDisk: true,
  // Note: With a large viewport size and captureAllStepScreenshots enabled,
  // you may run out of memory. Use browser.setViewportSize to make the
  // viewport size smaller.
  saveScreenshotsToReport: false,
  jsonOutput: null,
  compiler: 'js:' + _path.default.resolve(__dirname, '../lib/babel-register.js'),
  conditionOutput: true,
  // - - - - SELENIUM  - - - -
  browser: null,
  platform: 'ANY',
  name: '',
  user: '',
  key: '',
  port: null,
  host: null,
  // deviceName: null,
  // - - - - WEBDRIVER-IO  - - - -
  webdriverio: {
    desiredCapabilities: {},
    logLevel: 'silent',
    // logOutput: null,
    host: '127.0.0.1',
    port: 4444,
    path: '/wd/hub',
    baseUrl: null,
    coloredLogs: true,
    screenshotPath: null,
    waitforTimeout: 500,
    waitforInterval: 250
  },
  // - - - - SELENIUM-STANDALONE
  seleniumStandaloneOptions: {
    // check for more recent versions of selenium here:
    // http://selenium-release.storage.googleapis.com/index.html
    version: '3.8.1',
    baseURL: 'https://selenium-release.storage.googleapis.com',
    drivers: {
      chrome: {
        // check for more recent versions of chrome driver here:
        // http://chromedriver.storage.googleapis.com/index.html
        version: require('../../package').dependencies.chromedriver.substring(1),
        arch: process.arch,
        baseURL: 'https://chromedriver.storage.googleapis.com'
      },
      ie: {
        // check for more recent versions of internet explorer driver here:
        // http://selenium-release.storage.googleapis.com/index.html
        version: '3.0.0',
        arch: 'ia32',
        baseURL: 'https://selenium-release.storage.googleapis.com'
      },
      firefox: {
        // check for more recent versions of gecko  driver here:
        // https://github.com/mozilla/geckodriver/releases
        version: '0.19.1',
        arch: process.arch,
        baseURL: 'https://github.com/mozilla/geckodriver/releases/download'
      }
    }
  },
  // - - - - SESSION-MANAGER  - - - -
  noSessionReuse: false,
  // - - - - SIMIAN  - - - -
  simianResultEndPoint: 'api.simian.io/v1.0/result',
  simianAccessToken: false,
  simianResultBranch: null,
  simianRepositoryId: null,
  // - - - - MOCHA  - - - -
  mocha: false,
  mochaCommandLineOptions: {
    bail: true
  },
  mochaConfig: {
    // tags and grep only work when watch mode is false
    tags: '',
    grep: null,
    timeout: 60000,
    reporter: 'spec',
    slow: 10000,
    useColors: true
  },
  // - - - - JASMINE  - - - -
  jasmine: false,
  jasmineConfig: {
    specDir: '.',
    specFiles: ['**/*@(_spec|-spec|Spec).@(js|jsx)'],
    helpers: ['support/**/*.@(js|jsx)'],
    stopSpecOnExpectationFailure: false,
    random: false
  },
  jasmineReporterConfig: {// This options are passed to jasmine.configureDefaultReporter(...)
    // See: http://jasmine.github.io/2.4/node.html#section-Reporters
  },
  // - - - - METEOR  - - - -
  ddp: false,
  serverExecuteTimeout: 10000,
  // - - - - PHANTOM  - - - -
  phantom_w: 1280,
  phantom_h: 1024,
  phantom_ignoreSSLErrors: false,
  // - - - - DEBUGGING  - - - -
  log: 'info',
  debug: false,
  seleniumDebug: null,
  debugCucumber: null,
  debugBrkCucumber: null,
  debugMocha: null,
  debugBrkMocha: null
};