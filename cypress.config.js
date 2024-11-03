const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "24uu3z",

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
