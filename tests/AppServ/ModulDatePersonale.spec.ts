import { test, expect, selectors } from '@playwright/test';
import * as Locators from '../../locators/AppServ/creareangajat.json';
import * as LoginData from '../../test-data/AppServ/login.json';
import * as GeneralLocators from '../../locators/AppServ/generalcontrols.json';
import * as EmployeeData from '../../test-data/AppServ/creareangajat.json';

test('Creare puncte de lucru - in progress', async ({ page }) => {
  
  test.setTimeout(80000);
  await page.goto(LoginData.link);
  
  //Acces meniu mare
  await page.locator(Locators.Login.UserName).click();
  await page.locator(Locators.Login.UserName).fill(LoginData.username);
  await page.locator(Locators.Login.Password).click();
  await page.locator(Locators.Login.Password).fill(LoginData.password);
  await page.locator(Locators.Login.Autentificare).click();
  await page.locator(Locators.MainMenu.MainMenuAccess).click();
  
  //Click Puncte de lucru
  await page.getByText(Locators.MainMenu.PuncteDeLucru,{exact:true}).click();
 
  //Logout
  //await page.waitForTimeout(4000);
  await page.locator(GeneralLocators.Logout.Logout).click();
  await page.getByRole('menuitem', {name: GeneralLocators.Logout.Iesire, exact: true}).click();

  await page.context().close();
  await page.close();
});


test('Creare organizatii - in progress', async ({ page }) => {
  await page.goto(LoginData.link);
  
  //Acces meniu mare
  await page.locator(Locators.Login.UserName).click();
  await page.locator(Locators.Login.UserName).fill(LoginData.username);
  await page.locator(Locators.Login.Password).click();
  await page.locator(Locators.Login.Password).fill(LoginData.password);
  await page.locator(Locators.Login.Autentificare).click();
  
  
  
  //await page.locator(Locators.MainMenu.MainMenuAccess).click();
  
  //Click angajati
  //await page.getByText(Locators.MainMenu.Angajati,{exact:true}).click();

  
  //Logout
  //await page.waitForTimeout(4000);
  await page.locator(GeneralLocators.Logout.Logout).click();
  await page.getByRole('menuitem', {name: GeneralLocators.Logout.Iesire, exact: true}).click();

  await page.context().close();
  await page.close();
});
