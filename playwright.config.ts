import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './',
  reporter: [
    ['list'],
    ['html', { open: 'never' }],
  ],
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    baseURL: 'https://www.theelixrlabs.com'
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],

  
});