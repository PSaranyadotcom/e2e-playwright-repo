// tests/login-setup.spec.ts
const { test }= require('@playwright/test');

test('Login manually and save Trello session', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  // Go directly to Trello login page (redirects to Atlassian SSO)
  await page.goto('https://trello.com/login');

  // console.log('🧭 Please complete login manually.');
  // console.log('When you see your Trello boards, click the "Resume" button in Playwright Inspector.');

  // Pause for manual loginha
  await page.pause();

  // Confirm you're logged in
  if ((await page.url()).includes('boards')) {
    console.log('✅ Logged in successfully.');
  } else {
    console.warn('⚠️ You might not be fully logged in yet. Please check.');
  }

  // Now save all cookies (Trello + Atlassian)
  await context.storageState({ path: 'state.json' });
  console.log('💾 Saved full session to state.json');

  await context.close();
});
