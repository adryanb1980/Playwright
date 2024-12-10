import { test, expect } from '@playwright/test';
import textboxdata from '../test-data/textbox.json';
import webtables from '../test-data/webtables.json';
import * as Locators from '../locators/MenuOptionsLocators.json';

test('Elements - Text Box', async ({ page }, testElements) => {
  test.setTimeout(120000);
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("DEMOQA");
  //Login page screenshot
  const screenshotloginpage = await page.screenshot();
  await testElements.attach('DEMOQA page', { body: screenshotloginpage, contentType: 'image/png' });


  //Try locators in separate files
  await page.locator(Locators.Elements.ElementsMenuOption).click();
  await page.mouse.up();
  await page.waitForTimeout(1000);
  const screenshotelements = await page.screenshot();
  await testElements.attach('Elements menu', { body: screenshotelements, contentType: 'image/png' });

  //Text Box
  await page.locator(Locators.TextBox.TextBoxMenuOption).click();
  await page.getByPlaceholder('Full Name').fill(textboxdata.fullname);
  //Get elements by id
  await page.locator('#userEmail').fill(textboxdata.email);
  await page.locator('#currentAddress').fill(textboxdata.currentaddress);
  await page.locator('#permanentAddress').fill(textboxdata.permanentaddress);

  const textboxelementsfullname = await page.screenshot();
  await testElements.attach('Textbox area', { body: textboxelementsfullname, contentType: 'image/png' });

  //Click Submit
  await page.locator('#submit').click();
  await page.mouse.wheel(0, 300);
  const submitbutton = await page.screenshot();
  await testElements.attach('Submit', { body: submitbutton, contentType: 'image/png' });
  await page.mouse.wheel(0, -300);

  //Checkbox
  await page.locator(Locators.CheckBox.CheckBoxMenuOption).click();
  const checkboxoption = await page.screenshot();
  await testElements.attach('CheckBox area', { body: checkboxoption, contentType: 'image/png' });

  await page.locator('text=Home').click();
  const checkboxcheck = await page.screenshot();
  await testElements.attach('CheckBox checked', { body: checkboxcheck, contentType: 'image/png' });

  await page.getByRole('button', { name: 'Toggle' }).click();
  const checkboxexpand = await page.screenshot();
  await testElements.attach('CheckBox expanded', { body: checkboxexpand, contentType: 'image/png' });

  // Radio Button
  await page.locator('text=Radio Button').click();
  await page.locator('text=Yes').click();
  await page.locator('text=Impressive').click();
  await page.locator('text=Yes').click();
  const radiobuttonselected = await page.screenshot();
  await testElements.attach('Radio buttons', { body: radiobuttonselected, contentType: 'image/png' });

  //Web tables
  await page.locator('text=Web Tables').click();
  await page.locator('#addNewRecordButton').click();
  await page.locator('#firstName').fill(webtables.webtablesfirstname);
  await page.locator('#lastName').fill(webtables.webtableslastname);
  await page.locator('#userEmail').fill(webtables.webtablesemail);
  await page.locator('#age').fill(webtables.webtablesage);
  await page.locator('#salary').fill(webtables.webtablessalary);
  await page.locator('#department').fill(webtables.webtablesdepartment);
  await page.locator('#submit').click();
  await page.locator('#searchBox').fill(webtables.webtablesfirstname);
  await page.waitForTimeout(1000);
  const webtablesoption1 = await page.screenshot();
  await testElements.attach('Web Tables area1', { body: webtablesoption1, contentType: 'image/png' });
  await page.locator('#searchBox').clear();
  
  await page.waitForTimeout(1000);
  const webtablesoption = await page.screenshot();
  await testElements.attach('Web Tables area', { body: webtablesoption, contentType: 'image/png' });

  //Logout and close
  await page.waitForTimeout(3000);
  await page.close();
});