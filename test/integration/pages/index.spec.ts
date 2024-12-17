import { test, expect, Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('Index page', () => {
  test('should be visually identical', async ({ page }) => {
    await expect(page).toHaveScreenshot('full-page.png', { fullPage: true });
  });

  test('should have a header', async ({ page }) => {
    const header = page.locator('.header');
    expect(header).toBeDefined();
  });

  test('should have only one h1', async ({ page }) => {
    const headingOne = page.locator('h1');
    await expect(headingOne).toHaveCount(1);
    expect(await headingOne.textContent()).toMatchSnapshot('index-h1.txt');
  });

  test('should have a h2', async ({ page }) => {
    const headingTwo = page.locator('h2');
    expect(headingTwo).toBeDefined();
    expect(await headingTwo.textContent()).toMatchSnapshot('index-h2.txt');
  });
});
