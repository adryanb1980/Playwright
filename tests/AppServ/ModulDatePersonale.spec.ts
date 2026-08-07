import { test, expect, selectors } from '@playwright/test';
import * as Locators from '../../locators/AppServ/creareangajat.json';
import * as LoginData from '../../test-data/AppServ/login.json';
import * as GeneralLocators from '../../locators/AppServ/generalcontrols.json';
import * as EmployeeData from '../../test-data/AppServ/creareangajat.json';
import * as LocatorsDatePersonale from '../../locators/AppServ/datepersonalelocators.json'; 
import * as DatePersonaleData from '../../test-data/AppServ/datepersonaledata.json';



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
  await page.locator(GeneralLocators.Butoane.Adaugare).click();

  //Nume
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.Nume).click();
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.Nume).fill(DatePersonaleData.PuncteDeLucru.Nume);
  //Tip
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.Tip).click();
  await page.getByRole('option', {name:DatePersonaleData.PuncteDeLucru.Tip}).click();
  //Tara
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.Tara).click();
  await page.getByRole('option', {name:DatePersonaleData.PuncteDeLucru.Tara}).click();
  //Judet
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.Judet).click();
  await page.getByRole('option', {name:DatePersonaleData.PuncteDeLucru.Judet}).click();
  //Localitate
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.Localitate).click();
  await page.getByRole('option', {name:DatePersonaleData.PuncteDeLucru.Localitate}).click();

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
