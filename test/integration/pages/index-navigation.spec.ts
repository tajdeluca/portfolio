import { test, expect, Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('Index page navigation', () => {
  test.skip('internal links should navigate to other pages', async ({ page }) => {
    test.slow();
    const anchors = await page.locator('a[href]').all()
    expect(anchors.length).toBeGreaterThan(0);
    for (const anchor of anchors) {
      const anchorPath = await anchor.getAttribute('href');
      if (anchorPath?.startsWith('/')) {
        await anchor.click();
        await page.waitForURL(anchorPath, { waitUntil: 'domcontentloaded' });
        await expect(page).toHaveScreenshot(`links/anchor-${anchorPath}-full-page.png`, { fullPage: true });
        await page.goBack({ waitUntil: 'domcontentloaded' });
      }
    }
  });
});
