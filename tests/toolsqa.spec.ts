import { test, expect } from '@playwright/test';
import testdata from '../test-data/input.json';

test('Elements - Text Box', async ({ page }, testElements) => {
  test.setTimeout(120000);
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("DEMOQA");
  //Login page screenshot
  const screenshotloginpage = await page.screenshot();
  await testElements.attach('DEMOQA page', { body: screenshotloginpage, contentType: 'image/png' });

  await page.locator('text=Elements').click();
  await page.mouse.up();
  await page.waitForTimeout(1000);
  const screenshotelements = await page.screenshot();
  await testElements.attach('Elements menu', { body: screenshotelements, contentType: 'image/png' });

  await page.locator('text=Text Box').click();
  await page.getByPlaceholder('Full Name').fill(testdata.fullname);
  //Get elements by id
  await page.locator('#userEmail').fill(testdata.email);
  await page.locator('#currentAddress').fill(testdata.currentaddress);
  await page.locator('#permanentAddress').fill(testdata.permanentaddress);

  const textboxelementsfullname = await page.screenshot();
  await testElements.attach('Textbox area', { body: textboxelementsfullname, contentType: 'image/png' });

  //Click Submit
  await page.locator('#submit').click();
  await page.mouse.wheel(0, 300);
  const submitbutton = await page.screenshot();
  await testElements.attach('Submit', { body: submitbutton, contentType: 'image/png' });
  await page.mouse.wheel(0, -300);

  //Checkbox
  await page.locator('text=Check Box').click();
  const checkboxoption = await page.screenshot();
  await testElements.attach('CheckBox area', { body: checkboxoption, contentType: 'image/png' });

  await page.locator('text=Home').click();
  const checkboxcheck = await page.screenshot();
  await testElements.attach('CheckBox checked', { body: checkboxcheck, contentType: 'image/png' });

  await page.getByRole('button', { name: 'Toggle' }).click();
  await page.waitForTimeout(2000);
  const checkboxexpand = await page.screenshot();
  await testElements.attach('CheckBox expanded', { body: checkboxexpand, contentType: 'image/png' });


  //Logout and close
  await page.waitForTimeout(4000);
  await page.close();
});