const path = require("path");
const { ReportAggregator, HtmlReporter } = require("@rpii/wdio-html-reporter");
const log4j = require("log4js");

const dotenv = require("dotenv");
dotenv.config();

exports.config = {
  runner: "local",

  specs: ["./src/tests/**/*.js"],

  suites: {
    open: ["./src/tests/**/**.js"],
  },

  exclude: [],

  maxInstances: 1,

  capabilities: [{ maxInstances: 5 }],

  logLevel: "debug",
  // outputDir: path.resolve(__dirname, "../logs"),

  bail: 0,

  waitforTimeout: 10000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,

  framework: "mocha",

  reporters: [
    "spec",
    "dot",
    [
      HtmlReporter,
      {
        debug: true,
        outputDir: "./reports/html-reports/",
        filename: "report.html",
        reportTitle: "GoodRX Test Report",

        //to show the report in a browser when done
        showInBrowser: true,

        //to turn on screenshots after every test
        useOnAfterCommandForScreenshot: false,

        //to initialize the logger
        LOG: log4j.getLogger("default"),
      },
    ],
  ],

  mochaOpts: {
    ui: "bdd",
    timeout: 120000,
  },

  onPrepare: function (capabilities) {
    let reportAggregator = new ReportAggregator({
      outputDir: "./reports/html-reports/",
      filename: "master-report.html",
      reportTitle: "GoodRX Test Master Report",
      browserName: capabilities.browserName,
      collapseTests: true,
    });
    reportAggregator.clean();
    global.reportAggregator = reportAggregator;
  },

  onComplete: function () {
    (async () => {
      await global.reportAggregator.createReport();
    })();
  },

  before: function () {
    browser.setWindowSize(1920, 1440);
  },

  afterTest: function (test) {
    const path = require("path");
    const moment = require("moment");

    // if test passed, ignore, else take and save screenshot.
    if (test.passed) {
      return;
    }
    const timestamp = moment().format("YYYYMMDD-HHmmss.SSS");
    const filepath = path.join(
      "reports/html-reports/screenshots/",
      timestamp + ".png"
    );
    browser.saveScreenshot(filepath);
    process.emit("test:screenshot", filepath);
  },
};
