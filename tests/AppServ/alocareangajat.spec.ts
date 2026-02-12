import { test, expect } from '@playwright/test';
import * as LoginLocators from '../../locators/AppServ/creareangajat.json';
import * as AlocareLocators from '../../locators/AppServ/alocareangajat.json';
import * as LoginData from '../../test-data/AppServ/login.json';
import * as AlocareData from '../../test-data/AppServ/alocareangajat.json';



test('Alocare angajat', async ({ page }) => {
  await page.goto('http://localhost:3000/auth/login-page');

  //Acces meniu mare
  await page.locator(LoginLocators.Login.UserName).click();
  await page.locator(LoginLocators.Login.UserName).fill(LoginData.username);
  await page.locator(LoginLocators.Login.Password).click();
  await page.locator(LoginLocators.Login.Password).fill(LoginData.password);
  await page.locator(LoginLocators.Login.Autentificare).click();
  await page.locator(LoginLocators.MainMenu.MainMenuAccess).click();
  
  //Click angajati
  await page.getByText(LoginLocators.MainMenu.Angajati,{exact:true}).click();
 
  //Alocare pe post
  await page.getByRole('button', {name:'Nealocați pe post'}).click();
  await page.locator(AlocareLocators.Angajati.SearchByCNP).click();
  await page.locator(AlocareLocators.Angajati.SearchByCNP).fill(AlocareData.cnp);
  //await page.getByRole('gridcell',{name:AlocareLocators.Angajati.ShortMenuDisplay}).click();
  await page.getByRole('gridcell',{name:AlocareData.cnp}).click();
  await page.locator(AlocareLocators.Angajati.ButonAlocarePost).click();
  


  /*
//Logout and close
  await page.waitForTimeout(5000);
  await page.close();
*/


});