import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://127.0.0.1:5173/Reservo-frontend/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
  viewportWidth: 1000,
  viewportHeight: 1000,
});
