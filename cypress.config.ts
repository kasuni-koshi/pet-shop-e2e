import { defineConfig } from "cypress";
require('dotenv').config()

export default defineConfig({
  env: {
    baseUrl: process.env.BASE_URL,
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
