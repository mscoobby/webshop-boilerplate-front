// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function(config) {
    config.set({
        basePath: ''
        , frameworks: ['jasmine', '@angular/cli']
        , plugins: [
            require('karma-jasmine')
            , require('karma-chrome-launcher')
            , require('karma-jasmine-html-reporter')
            , require('karma-coverage-istanbul-reporter')
            , require('@angular/cli/plugins/karma')
            , require('karma-junit-reporter')
            , require('karma-spec-reporter')
        ]
        , client: {
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        }
        , coverageIstanbulReporter: {
            reports: ['html', 'lcovonly', 'text-summary', 'cobertura']
            , fixWebpackSourcePaths: true
            , dir: 'shippable/codecoverage/'
        }
        , angularCli: {
            environment: 'dev'
        }
        , reporters: config.angularCli && config.angularCli.codeCoverage ? ['progress', 'coverage-istanbul'] : ['spec']
        , preprocessors: {
            './src/test.ts': ['@angular/cli']
        }
        , mime: {
            'text/x-typescript': ['ts', 'tsx']
        }
        , port: 9876
        , colors: true
        , logLevel: config.LOG_INFO
        , autoWatch: true
        , browsers: config.angularCli && config.angularCli.codeCoverage ? ['ChromeNoSandboxHeadless'] : ['Chrome']
        , customLaunchers: {
            ChromeNoSandboxHeadless: {
                base: 'Chrome'
                , flags: [
                    '--no-sandbox', // See https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md
                    '--headless'
                    , '--disable-gpu', // Without a remote debugging port, Google Chrome exits immediately.
                    ' --remote-debugging-port=9222'
                ]
            }
        }
        , junitReporter: {
            outputDir: ''
            , outputFile: 'shippable/testresults/unit.xml'
            , suite: ''
            , useBrowserName: false
        , }
        , singleRun: false
    });
};
