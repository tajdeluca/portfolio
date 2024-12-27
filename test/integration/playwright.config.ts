import type { PlaywrightTestConfig } from '@playwright/test';
import { defineConfig, devices } from '@playwright/test';
import { cpus } from 'node:os'

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

export default defineConfig({
  testDir: '.',
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000,
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.01,
    }
  },
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  workers: '50%',
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: process.env.CI ? 'github' : 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: process.env.TEST_BASE_URL,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'desktop-chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'desktop-firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },
    {
      name: 'desktop-webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },
    {
      name: 'mobile-webkit-portrait',
      use: {
        ...devices['iPhone 13 Pro Max'],
      },
    },
    {
      name: 'mobile-webkit-landscape',
      use: {
        ...devices['iPhone 13 Pro Max landscape'],
      },
    },
    {
      name: 'tablet-webkit-portrait',
      use: {
        ...devices['iPad Pro 11'],
      },
    },
    {
      name: 'tablet-webkit-landscape',
      use: {
        ...devices['iPad Pro 11 landscape'],
      },
    },
  ],

  snapshotPathTemplate: '{testDir}/__snapshots/{testFilePath}/{projectName}-{arg}{ext}',

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  // outputDir: 'test-results/',

  /* Run your local dev server before starting the tests */
  webServer: process.env.TEST_IS_AGAINST_DEPLOYMENT ? undefined : {
    command: 'cd ../../src && npx serve .output/public',
    port: 3000
  },
});
