import { test, expect, selectors } from '@playwright/test';
import * as Locators from '../../locators/AppServ/creareangajat.json';
import * as LoginData from '../../test-data/AppServ/login.json';
import * as GeneralLocators from '../../locators/AppServ/generalcontrols.json';
import * as EmployeeData from '../../test-data/AppServ/creareangajat.json';
import * as LocatorsDatePersonale from '../../locators/AppServ/datepersonalelocators.json'; 
import * as DatePersonaleData from '../../test-data/AppServ/datepersonaledata.json';



test('Creare puncte de lucru', async ({ page }) => {
  
  test.setTimeout(50000);
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
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.Nume).fill(DatePersonaleData.PuncteDeLucru.CrearePuncteDeLucru.Nume);
  //Tip
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.Tip).click();
  await page.getByRole('option', {name:DatePersonaleData.PuncteDeLucru.CrearePuncteDeLucru.Tip}).click();
  //Tara
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.Tara).click();
  await page.getByRole('option', {name:DatePersonaleData.PuncteDeLucru.CrearePuncteDeLucru.Tara}).click();
  //Judet
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.Judet).click();
  await page.getByRole('option', {name:DatePersonaleData.PuncteDeLucru.CrearePuncteDeLucru.Judet}).click();
  //Localitate
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.Localitate).click();
  await page.getByRole('option', {name:DatePersonaleData.PuncteDeLucru.CrearePuncteDeLucru.Localitate}).click();
  //Adresa
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.Adresa).click();
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.Adresa).fill(DatePersonaleData.PuncteDeLucru.CrearePuncteDeLucru.Adresa);
  //CUI
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.CUI).click();
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.CUI).fill(DatePersonaleData.PuncteDeLucru.CrearePuncteDeLucru.CUI);
  //Salvare
  try {
    await page.locator(GeneralLocators.Butoane.Salveaza).click();
    await page.waitForTimeout(2000);
  } catch (error) {
    console.error('Eroare la click pe butonul Salveaza:', error);   
  }
  
  //Logout
  //await page.waitForTimeout(4000);
  await page.locator(GeneralLocators.Logout.Logout).click();
  await page.getByRole('menuitem', {name: GeneralLocators.Logout.Iesire, exact: true}).click();
  await page.context().close();
  await page.close();
});

test('Editare puncte de lucru', async ({ page }) => {
  
  test.setTimeout(50000);
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
  
  //Edit the component
  await page.locator(LocatorsDatePersonale.EditarePuncteDeLucru.Nume).click();
  await page.locator(LocatorsDatePersonale.EditarePuncteDeLucru.Nume).fill(DatePersonaleData.PuncteDeLucru.EditarePuncteDeLucru.NumeInitial);
  await page.mouse.wheel(100, 0);
  await page.getByRole('gridcell').filter({ hasText: DatePersonaleData.PuncteDeLucru.EditarePuncteDeLucru.NumeInitial}).last().click({ position: { x: 30, y: 0 } }); 
  await page.locator(LocatorsDatePersonale.EditarePuncteDeLucru.Modifica).click();
  
  //Nume
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.Nume).click();
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.Nume).fill(DatePersonaleData.PuncteDeLucru.EditarePuncteDeLucru.Nume);
  //Tip
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.Tip).click();
  await page.getByRole('option', {name:DatePersonaleData.PuncteDeLucru.EditarePuncteDeLucru.Tip}).click();
  //Tara
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.Tara).click();
  await page.getByRole('option', {name:DatePersonaleData.PuncteDeLucru.EditarePuncteDeLucru.Tara}).click(); 
  //Judet
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.Judet).click();
  await page.getByRole('option', {name:DatePersonaleData.PuncteDeLucru.EditarePuncteDeLucru.Judet}).click();
  //Localitate
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.Localitate).click();
  await page.getByRole('option', {name:DatePersonaleData.PuncteDeLucru.EditarePuncteDeLucru.Localitate,exact:true}).click();
  //Adresa
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.Adresa).click();
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.Adresa).fill(DatePersonaleData.PuncteDeLucru.EditarePuncteDeLucru.Adresa);
  //CUI
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.CUI).click();
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.CUI).fill(DatePersonaleData.PuncteDeLucru.EditarePuncteDeLucru.CUI);
  //Salvare
  try {
    await page.locator(GeneralLocators.Butoane.Salveaza).click();
  } catch (error) {
    console.error('Eroare la click pe butonul Salveaza:', error);
  }

  //Afisare date punct de lucru editat
  await page.locator(LocatorsDatePersonale.EditarePuncteDeLucru.Nume).click();
  await page.locator(LocatorsDatePersonale.EditarePuncteDeLucru.Nume).clear();
  await page.locator(LocatorsDatePersonale.EditarePuncteDeLucru.Nume).fill(DatePersonaleData.PuncteDeLucru.EditarePuncteDeLucru.Nume);
  await page.mouse.wheel(100, 0);
  await page.getByRole('gridcell').filter({ hasText: DatePersonaleData.PuncteDeLucru.EditarePuncteDeLucru.Nume}).last().click({ position: { x: 30, y: 0 } }); 
  await page.locator(LocatorsDatePersonale.EditarePuncteDeLucru.Modifica).click();
  await page.waitForTimeout(2000);

  //Logout
  //await page.waitForTimeout(4000);
  await page.locator(GeneralLocators.Logout.Logout).click();
  await page.getByRole('menuitem', {name: GeneralLocators.Logout.Iesire, exact: true}).click();
  await page.context().close();
  await page.close();
});

test('Stergere puncte de lucru', async ({ page }) => {
  
  test.setTimeout(50000);
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
    
  //Edit the component
  await page.locator(LocatorsDatePersonale.StergerePuncteDeLucru.Nume).click();
  await page.locator(LocatorsDatePersonale.StergerePuncteDeLucru.Nume).fill(DatePersonaleData.PuncteDeLucru.StergerePuncteDeLucru.Nume);
  await page.mouse.wheel(100, 0);
  await page.getByRole('gridcell').filter({ hasText: DatePersonaleData.PuncteDeLucru.StergerePuncteDeLucru.Nume}).last().click({ position: { x: 30, y: 0 } }); 
  
  //Salvare
  try {
    //Sterge
    await page.locator(GeneralLocators.Butoane.Sterge).click();
    //Confirma
    await page.locator(GeneralLocators.Butoane.Sterge).click();
  } catch (error) {
    console.error('Eroare la click pe butonul Sterge', error);
  }

  //Afisare date punct de lucru sters
  await page.locator(LocatorsDatePersonale.StergerePuncteDeLucru.Nume).click();
  await page.locator(LocatorsDatePersonale.StergerePuncteDeLucru.Nume).clear();
  await page.locator(LocatorsDatePersonale.StergerePuncteDeLucru.Nume).fill(DatePersonaleData.PuncteDeLucru.StergerePuncteDeLucru.Nume);
  await page.mouse.wheel(100, 0);
  await page.getByRole('gridcell').filter({ hasText: DatePersonaleData.PuncteDeLucru.StergerePuncteDeLucru.Nume}); 
  await page.waitForTimeout(2000);

  //Logout
  //await page.waitForTimeout(4000);
  await page.locator(GeneralLocators.Logout.Logout).click();
  await page.getByRole('menuitem', {name: GeneralLocators.Logout.Iesire, exact: true}).click();
  await page.context().close();
  await page.close();
});

/*
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
*/
