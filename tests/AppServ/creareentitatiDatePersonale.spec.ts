import { test, expect, selectors } from '@playwright/test';
import * as Locators from '../../locators/AppServ/creareangajat.json';
import * as LoginData from '../../test-data/AppServ/login.json';
import * as EmployeeData from '../../test-data/AppServ/creareangajat.json';

test('Creare puncte de lucru', async ({ page }) => {
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
 
 
  
  

});


test('Creare organizatii', async ({ page }) => {
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
 
 
  
  

});

