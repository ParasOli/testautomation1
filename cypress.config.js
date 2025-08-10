const { defineConfig } = require("cypress");
const dotenv = require('dotenv');



dotenv.config();

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    setupNodeEvents(on, config) {
      config.env.USERNAME = process.env.USERNAME;
      config.env.PASSWORD = process.env.PASSWORD;
      return config;
    },
  },
});
