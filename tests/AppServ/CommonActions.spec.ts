// utils/auth.ts
import { Page } from '@playwright/test';
import * as GeneralLocators from '../../locators/AppServ/Global_Locators/globallocators.json';
import * as LoginData from '../../test-data/AppServ/login.json';

//Logout
export async function logoutUser(page: Page) { 
  await page.locator(GeneralLocators.Logout.Logout).click();
  await page.getByRole('menuitem', {name: GeneralLocators.Logout.Iesire, exact: true}).click();
  await page.context().close();
  await page.close();
}

//Login
export async function loginUser(page: Page) {
  await page.goto(LoginData.link);
  await page.locator(GeneralLocators.Login.UserName).click();
  await page.locator(GeneralLocators.Login.UserName).fill(LoginData.username);
  await page.locator(GeneralLocators.Login.Password).click();
  await page.locator(GeneralLocators.Login.Password).fill(LoginData.password);
  await page.locator(GeneralLocators.Login.Autentificare).click();
  //Acces meniu mare
  await page.locator(GeneralLocators.MainMenu.MainMenuAccess).click();
}

//Stergere
export async function Sterge(page: Page) {
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

//Salvare
export async function Salveaza(page: Page) {
  try {
    await page.locator(GeneralLocators.Butoane.Salveaza).click();
      } 
  catch (error) {
    console.error('Eroare la salvare', error);
  }
}


