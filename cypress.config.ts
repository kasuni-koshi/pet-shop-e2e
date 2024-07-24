import { defineConfig } from "cypress";
require('dotenv').config()

export default defineConfig({
  viewportWidth: 1440,
  viewportHeight: 990,
  env: {
    baseUrl: process.env.BASE_URL,
    apiUrl: process.env.API_URL,
    adminEmail: process.env.ADMIN_EMAIL,
    adminPassword: process.env.ADMIN_PASSWORD,
  },
  retries: {
    runMode: 0
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: '**/*.spec.ts'
  },
});
