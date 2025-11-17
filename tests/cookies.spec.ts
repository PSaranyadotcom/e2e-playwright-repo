// tests/cookies.spec.ts
import { test, expect } from '@playwright/test';

test('this is my test', async ({ browser }) => {
  const context = await browser.newContext({ storageState: 'state.json' });
  const page = await context.newPage();

  await page.goto('https://trello.com/');
  await expect(page).toHaveTitle(/Trello/i);

  // Confirm you’re already logged in (should skip login page)
  await page.screenshot({ path: 'after-login.png' });
  await page.waitForTimeout(5000)

  await context.close();
});
