import { test, expect } from '@playwright/test';

test('Learning', async ({ page }, testInfo) => {
  test.setTimeout(120000);
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("DEMOQA");
  //Login page screenshot
  const screenshotloginpage = await page.screenshot();
  await testInfo.attach('DEMOQA page', { body: screenshotloginpage, contentType: 'image/png' });

  await page.locator('text=Elements').click();
  await page.mouse.up();
  await page.waitForTimeout(1000);
  const screenshotelements = await page.screenshot();
  await testInfo.attach('Elements menu', { body: screenshotelements, contentType: 'image/png' });

  await page.locator('text=Text Box').click();
  await page.waitForTimeout(1000);
  const textboxelements = await page.screenshot();
  await testInfo.attach('Text box menu', { body: textboxelements, contentType: 'image/png' });

  await page.getByPlaceholder('Full Name').fill("Adi");
  await page.waitForTimeout(1000);

  //Logout and close
  await page.waitForTimeout(4000);
  await page.close();
});