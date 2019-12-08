
module.exports = function(config) {
  config.set({

      frameworks: ["jasmine", "karma-typescript"],

      files: [
          { pattern: "src/**/*.ts" }
      ],

      exclude: [
        "src/**/server.ts"
      ],

      preprocessors: {
          "**/*.ts": ["karma-typescript"]
      },

      reporters: ["dots", "karma-typescript"],

      browsers : ['Chrome'],

      reporters: ['kjhtml'],

      logLevel: config.LOG_DEBUG,

      singleRun: false
  });
};
