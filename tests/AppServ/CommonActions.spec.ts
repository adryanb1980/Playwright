// utils/auth.ts
import { Page } from '@playwright/test';
import * as GeneralLocators from '../../locators/AppServ/Global_Locators/globallocators.json';
import * as LoginData from '../../test-data/AppServ/login.json';

export async function logoutUser(page: Page) {
 //Logout
  await page.locator(GeneralLocators.Logout.Logout).click();
  await page.getByRole('menuitem', {name: GeneralLocators.Logout.Iesire, exact: true}).click();
  await page.context().close();
  await page.close();
}

export async function loginUser(page: Page) {
 //Login
  await page.goto(LoginData.link);
  await page.locator(GeneralLocators.Login.UserName).click();
  await page.locator(GeneralLocators.Login.UserName).fill(LoginData.username);
  await page.locator(GeneralLocators.Login.Password).click();
  await page.locator(GeneralLocators.Login.Password).fill(LoginData.password);
  await page.locator(GeneralLocators.Login.Autentificare).click();
  //Acces meniu mare
  await page.locator(GeneralLocators.MainMenu.MainMenuAccess).click();
}

export async function Sterge(page: Page) {
  //Stergere
  try {
    //Sterge
    await page.locator(GeneralLocators.Butoane.Sterge).click();
    //Confirma
    await page.locator(GeneralLocators.Butoane.Sterge).click();
      } 
  catch (error) {
    console.error('Eroare la stergere', error);
  }
}


