import { test, expect } from '@playwright/test';

test('Learning', async ({ page }, testInfo) => {
  
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("DEMOQA");
  //Login page screenshot
  const screenshotloginpage = await page.screenshot();
  await testInfo.attach('Login page', { body: screenshotloginpage, contentType: 'image/png' });
});