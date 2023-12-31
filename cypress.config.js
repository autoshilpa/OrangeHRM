const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "pcta14",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.js",
  },

});
