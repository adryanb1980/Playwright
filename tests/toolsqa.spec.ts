import { test, expect } from '@playwright/test';
import testdata from '../test-data/input.json';

test('Elements - Text Box', async ({ page }, testInfo) => {
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
  await page.getByPlaceholder('Full Name').fill(testdata.fullname);
  
  await page.locator('#userEmail').fill(testdata.email);
  await page.locator('#currentAddress').fill(testdata.currentaddress);
  await page.locator('#permanentAddress').fill(testdata.permanentaddress);

  const textboxelementsfullname = await page.screenshot();
  await testInfo.attach('Textbox area', { body: textboxelementsfullname, contentType: 'image/png' });

  //Logout and close
  await page.waitForTimeout(4000);
  await page.close();
});