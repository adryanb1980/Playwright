import { test, expect } from '@playwright/test';
import textboxdata from '../test-data/textbox.json';
import webtablesdata from '../test-data/webtables.json';
import * as Locators from '../locators/Locators.json';
import * as PracticeFormData from '../test-data/practiceform.json';

test('DemoQA Test Report', async ({ page }, testReport) => {
  test.setTimeout(70000);
  await page.goto('/');
  await expect(page).toHaveTitle("DEMOQA");
  const screenshotloginpage = await page.screenshot();
  await testReport.attach('DEMOQA page', { body: screenshotloginpage, contentType: 'image/png' });
  await page.locator(Locators.Elements.ElementsMenuOption).click();
  await page.mouse.up();
  const screenshotelements = await page.screenshot();
  await testReport.attach('Elements menu', { body: screenshotelements, contentType: 'image/png' });

  //Text Box
  await page.locator(Locators.TextBox.TextBoxMenuOption).click();
  await page.locator(Locators.TextBox.FullName).fill(textboxdata.fullname); 
  await page.locator(Locators.TextBox.UserEmail).fill(textboxdata.email);
  await page.locator(Locators.TextBox.CurrentAddress).fill(textboxdata.currentaddress);
  await page.locator(Locators.TextBox.PermanentAddress).fill(textboxdata.permanentaddress);
  const textboxelementsfullname = await page.screenshot();
  await testReport.attach('Textbox area', { body: textboxelementsfullname, contentType: 'image/png' });
  await page.locator(Locators.General.Submit).click();
  await page.mouse.wheel(0, 300);
  const submitbutton = await page.screenshot();
  await testReport.attach('Submit', { body: submitbutton, contentType: 'image/png' });
  await page.mouse.wheel(0, -300);

/*
  //Checkbox
  await page.locator(Locators.CheckBox.CheckBoxMenuOption).click();
  const checkboxoption = await page.screenshot();
  await testReport.attach('CheckBox area', { body: checkboxoption, contentType: 'image/png' });
  await page.locator(Locators.CheckBox.Home).click();
  const checkboxcheck = await page.screenshot();
  await testReport.attach('CheckBox checked', { body: checkboxcheck, contentType: 'image/png' });
  await page.getByRole('button', { name: Locators.CheckBox.Toggle }).click();
  const checkboxexpand = await page.screenshot();
  await testReport.attach('CheckBox expanded', { body: checkboxexpand, contentType: 'image/png' });

  // Radio Button
  await page.locator(Locators.RadioButton.RadioButtonMenuOption).click();
  await page.locator(Locators.RadioButton.YesOption).click();
  await page.locator(Locators.RadioButton.ImpressiveOption).click();
  await page.locator(Locators.RadioButton.YesOption).click();
  const radiobuttonselected = await page.screenshot();
  await testReport.attach('Radio buttons', { body: radiobuttonselected, contentType: 'image/png' });

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
  await testReport.attach('Web Tables area1', { body: webtablesoption1, contentType: 'image/png' });
  await page.locator(Locators.WebTables.SearchBox).clear();
  const webtablesoption = await page.screenshot();
  await testReport.attach('Web Tables area', { body: webtablesoption, contentType: 'image/png' });

  //Buttons
  await page.locator(Locators.Buttons.ButtonsMenuOption).click();
  await page.locator(Locators.Buttons.ButtonDoubleClick).dblclick();
  await page.locator(Locators.Buttons.ButtonRightClick).click({button:'right'});
  await page.getByRole('button', { name: Locators.Buttons.ButtonClickMe, exact: true }).click();
  const buttonclick = await page.screenshot();
  await testReport.attach('Buttons actions', { body: buttonclick, contentType: 'image/png' });

  //Links and tabs
  await page.locator(Locators.Links.LinksMenuOptionId, { hasText: Locators.Links.LinksMenuOption }).click();
  const linksclick = await page.screenshot();
  await testReport.attach('Links actions', { body: linksclick, contentType: 'image/png' });
  await page.locator(Locators.Links.SimpleLink).click();
  await page.context().pages().at(1)?.bringToFront();
  await page.waitForTimeout(1000);
  const simplelinkclick = await page.context().pages().at(1)?.screenshot();
  await testReport.attach('Home Link Click', { body: simplelinkclick, contentType: 'image/png' });  
  await page.context().pages().at(0)?.bringToFront();
  await page.context().pages().at(1)?.close();
  await page.waitForTimeout(1000);
  const currentpagedisplay = await page.screenshot();
  await testReport.attach('Current page', { body: currentpagedisplay, contentType: 'image/png' });
  await page.locator(Locators.Links.CreatedAPI).click();
  await page.mouse.wheel(0, 200);
  const createdAPI = await page.screenshot();
  await testReport.attach('CreatedAPI call', { body: createdAPI, contentType: 'image/png' });
  await page.mouse.wheel(0, -200);
  await page.locator(Locators.Links.NoContentAPI).click();
  await page.mouse.wheel(0, 200);
  const nocontentAPI = await page.screenshot();
  await testReport.attach('NoContentAPI call', { body: nocontentAPI, contentType: 'image/png' });
  //Broken links - similar with links - will not be implemented
 */

  //Download file
  await page.locator(Locators.DownloadUpload.DownloadUploadMenuOption).click();
  const downloadPromise = page.waitForEvent('download');
  await page.locator(Locators.DownloadUpload.DownloadButton).click();
  const download = await downloadPromise;
  const filenames = download.suggestedFilename();
  await download.saveAs(Locators.DownloadUpload.SavePath + filenames);
  //Download confirmation message
  page.on('dialog', async (dialog) => {
    await page.waitForTimeout(1000);
    await dialog.accept(); // or dialog.dismiss();
  })
  page.evaluate(() => alert(`File has been downloaded...`));
  //Upload file
  await page.locator(Locators.DownloadUpload.UploadButton).setInputFiles(Locators.DownloadUpload.UploadPath);
  await page.mouse.wheel(0, -300);
  const downloaduploadscreenshot = await page.screenshot();
  await testReport.attach('Upload - Download', { body: downloaduploadscreenshot, contentType: 'image/png' });
  await page.locator(Locators.Elements.ElementsMenuOption).click();
  //Forms
  await page.locator(Locators.Forms.FormsMenuOption).click();
  await page.locator(Locators.Forms.PracticeFormMenuOption).click();
  await page.locator(Locators.Forms.FirstName).fill(PracticeFormData.firstname);
  await page.locator(Locators.Forms.LastName).fill(PracticeFormData.lastname);
  await page.locator(Locators.Forms.UserEmail).fill(PracticeFormData.emailaddress);
  await page.getByText(PracticeFormData.gender1,{exact:true}).setChecked(true);
  await page.getByText(PracticeFormData.gender2,{exact:true}).setChecked(true);
  await page.getByText(PracticeFormData.gender3,{exact:true}).setChecked(true);
  await page.locator(Locators.Forms.PhoneNumber).fill(PracticeFormData.phone1); 
  await page.locator(Locators.Forms.DateofBirth).fill(PracticeFormData.dob);
  await page.locator(Locators.Forms.SubjectContainer).click();
  await page.locator(Locators.Forms.SubjectContainer).fill(PracticeFormData.subject)
  //await page.waitForTimeout(500);
  await page.getByText(PracticeFormData.hobby1).setChecked(true);
  await page.getByText(PracticeFormData.hobby2).setChecked(true);
  await page.getByText(PracticeFormData.hobby3).setChecked(true);
  await page.getByText(PracticeFormData.hobby1).setChecked(false);
  await page.locator(Locators.Forms.UploadButton2).setInputFiles(Locators.Forms.UploadPath2);
  await page.mouse.wheel(0, 300);
  await page.locator(Locators.Forms.CurrentAddress).fill(PracticeFormData.currentaddress);


  await page.locator(Locators.General.Submit).click();
  //await page.mouse.wheel(0, 300);
  const submitbutton2 = await page.screenshot();
  await testReport.attach('Submit', { body: submitbutton2, contentType: 'image/png' });


  await page.waitForTimeout(500);
  const formspagefillin = await page.screenshot();
  await testReport.attach('Forms menu', { body: formspagefillin, contentType: 'image/png' });

  //Logout and close
  await page.waitForTimeout(5000);
  await page.close();
});
