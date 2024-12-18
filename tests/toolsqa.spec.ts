import { test, expect } from '@playwright/test';
import textboxdata from '../test-data/textbox.json';
import webtablesdata from '../test-data/webtables.json';
import * as Locators from '../locators/Locators.json';

test('Elements - Text Box', async ({ page }, testElements) => {
  test.setTimeout(120000);
  await page.goto('/');
  await expect(page).toHaveTitle("DEMOQA");
  const screenshotloginpage = await page.screenshot();
  await testElements.attach('DEMOQA page', { body: screenshotloginpage, contentType: 'image/png' });
  await page.locator(Locators.Elements.ElementsMenuOption).click();
  await page.mouse.up();
  const screenshotelements = await page.screenshot();
  await testElements.attach('Elements menu', { body: screenshotelements, contentType: 'image/png' });

  //Text Box
  await page.locator(Locators.TextBox.TextBoxMenuOption).click();
  await page.locator(Locators.TextBox.FullName).fill(textboxdata.fullname); 
  await page.locator(Locators.TextBox.UserEmail).fill(textboxdata.email);
  await page.locator(Locators.TextBox.CurrentAddress).fill(textboxdata.currentaddress);
  await page.locator(Locators.TextBox.PermanentAddress).fill(textboxdata.permanentaddress);
  const textboxelementsfullname = await page.screenshot();
  await testElements.attach('Textbox area', { body: textboxelementsfullname, contentType: 'image/png' });
  await page.locator(Locators.General.Submit).click();
  await page.mouse.wheel(0, 300);
  const submitbutton = await page.screenshot();
  await testElements.attach('Submit', { body: submitbutton, contentType: 'image/png' });
  await page.mouse.wheel(0, -300);

  //Checkbox
  await page.locator(Locators.CheckBox.CheckBoxMenuOption).click();
  const checkboxoption = await page.screenshot();
  await testElements.attach('CheckBox area', { body: checkboxoption, contentType: 'image/png' });
  await page.locator(Locators.CheckBox.Home).click();
  const checkboxcheck = await page.screenshot();
  await testElements.attach('CheckBox checked', { body: checkboxcheck, contentType: 'image/png' });
  await page.getByRole('button', { name: 'Toggle' }).click();
  const checkboxexpand = await page.screenshot();
  await testElements.attach('CheckBox expanded', { body: checkboxexpand, contentType: 'image/png' });

  // Radio Button
  await page.locator(Locators.RadioButton.RadioButtonMenuOption).click();
  await page.locator(Locators.RadioButton.YesOption).click();
  await page.locator(Locators.RadioButton.ImpressiveOption).click();
  await page.locator(Locators.RadioButton.YesOption).click();
  const radiobuttonselected = await page.screenshot();
  await testElements.attach('Radio buttons', { body: radiobuttonselected, contentType: 'image/png' });

  //Web tables
  await page.locator(Locators.WebTables.WebTablesMenuOption).click();
  await page.locator(Locators.WebTables.AddNewRecordButton).click();
  await page.locator(Locators.WebTables.FirstName).fill(webtablesdata.webtablesfirstname);
  await page.locator(Locators.WebTables.LastName).fill(webtablesdata.webtableslastname);
  await page.locator(Locators.WebTables.Email).fill(webtablesdata.webtablesemail);
  await page.locator(Locators.WebTables.Age).fill(webtablesdata.webtablesage);
  await page.locator(Locators.WebTables.Salary).fill(webtablesdata.webtablessalary);
  await page.locator(Locators.WebTables.Department).fill(webtablesdata.webtablesdepartment);
  await page.locator(Locators.General.Submit).click();
  await page.locator(Locators.WebTables.SearchBox).fill(webtablesdata.webtablesfirstname);
  const webtablesoption1 = await page.screenshot();
  await testElements.attach('Web Tables area1', { body: webtablesoption1, contentType: 'image/png' });
  await page.locator(Locators.WebTables.SearchBox).clear();
  const webtablesoption = await page.screenshot();
  await testElements.attach('Web Tables area', { body: webtablesoption, contentType: 'image/png' });

  //Buttons
  await page.locator(Locators.Buttons.ButtonsMenuOption).click();
  await page.locator(Locators.Buttons.ButtonDoubleClick).dblclick();
  await page.locator(Locators.Buttons.ButtonRightClick).click({button:'right'});
  await page.getByRole('button', { name: 'Click Me', exact: true }).click();
  const buttonclick = await page.screenshot();
  await testElements.attach('Buttons actions', { body: buttonclick, contentType: 'image/png' });

  //Links
  await page.locator(Locators.Links.LinksMenuOptionId, { hasText: Locators.Links.LinksMenuOption }).click();
  const linksclick = await page.screenshot();
  await testElements.attach('Links actions', { body: linksclick, contentType: 'image/png' });



  //Logout and close
  await page.waitForTimeout(3000);
  await page.close();
});