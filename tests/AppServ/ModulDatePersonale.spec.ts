import { test, expect, selectors } from '@playwright/test';
import {loginUser, logoutUser} from './CommonActions.spec.ts';
import * as GeneralLocators from '../../locators/AppServ/Global_Locators/globallocators.json';
import * as LocatorsDatePersonale from '../../locators/AppServ/Date_Personale/datepersonalelocators.json'; 
import * as DatePersonaleData from '../../test-data/AppServ/datepersonaledata.json';


//Meniu mare - Puncte de lucru
test('Creare puncte de lucru', async ({ page }) => {
  
  test.setTimeout(50000);
  //Login & main menu access
  await loginUser(page);
    
  //Click Puncte de lucru
  await page.getByText(GeneralLocators.MainMenu.PuncteDeLucru,{exact:true}).click();
  await page.locator(GeneralLocators.Butoane.Adaugare).click();

  //Nume
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.AdaugarePuncteDeLucru.Nume).click();
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.AdaugarePuncteDeLucru.Nume).fill(DatePersonaleData.PuncteDeLucru.CrearePuncteDeLucru.Nume);
  //Tip
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.AdaugarePuncteDeLucru.Tip).click();
  await page.getByRole('option', {name:DatePersonaleData.PuncteDeLucru.CrearePuncteDeLucru.Tip}).click();
  //Tara
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.AdaugarePuncteDeLucru.Tara).click();
  await page.getByRole('option', {name:DatePersonaleData.PuncteDeLucru.CrearePuncteDeLucru.Tara}).click();
  //Judet
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.AdaugarePuncteDeLucru.Judet).click();
  await page.getByRole('option', {name:DatePersonaleData.PuncteDeLucru.CrearePuncteDeLucru.Judet}).click();
  //Localitate
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.AdaugarePuncteDeLucru.Localitate).click();
  await page.getByRole('option', {name:DatePersonaleData.PuncteDeLucru.CrearePuncteDeLucru.Localitate}).click();
  //Adresa
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.AdaugarePuncteDeLucru.Adresa).click();
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.AdaugarePuncteDeLucru.Adresa).fill(DatePersonaleData.PuncteDeLucru.CrearePuncteDeLucru.Adresa);
  //CUI
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.AdaugarePuncteDeLucru.CUI).click();
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.AdaugarePuncteDeLucru.CUI).fill(DatePersonaleData.PuncteDeLucru.CrearePuncteDeLucru.CUI);
  //Salvare
  try {
    await page.locator(GeneralLocators.Butoane.Salveaza).click();
  } catch (error) {
    console.error('Eroare la click pe butonul Salveaza:', error);   
  }

   //Afisare date punct de lucru creat
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.AdaugarePuncteDeLucru.FiltruNume).click();
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.AdaugarePuncteDeLucru.FiltruNume).clear();
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.AdaugarePuncteDeLucru.FiltruNume).fill(DatePersonaleData.PuncteDeLucru.CrearePuncteDeLucru.Nume);

  //Logout
  await logoutUser(page);
});

test('Editare puncte de lucru', async ({ page }) => {
  
  test.setTimeout(50000);
  //Login & main menu access
  await loginUser(page);
  
  //Click Puncte de lucru
  await page.getByText(GeneralLocators.MainMenu.PuncteDeLucru,{exact:true}).click();
  
  //Edit the component
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.EditarePuncteDeLucru.Nume).click();
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.EditarePuncteDeLucru.Nume).fill(DatePersonaleData.PuncteDeLucru.EditarePuncteDeLucru.NumeInitial);
  await page.mouse.wheel(100, 0);
  await page.getByRole('gridcell').filter({ hasText: DatePersonaleData.PuncteDeLucru.EditarePuncteDeLucru.NumeInitial}).last().click({ position: { x: 30, y: 0 } }); 
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.EditarePuncteDeLucru.Modifica).click();
  
  //Nume
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.AdaugarePuncteDeLucru.Nume).click();
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.AdaugarePuncteDeLucru.Nume).fill(DatePersonaleData.PuncteDeLucru.EditarePuncteDeLucru.Nume);
  //Tip
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.AdaugarePuncteDeLucru.Tip).click();
  await page.getByRole('option', {name:DatePersonaleData.PuncteDeLucru.EditarePuncteDeLucru.Tip}).click();
  //Tara
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.AdaugarePuncteDeLucru.Tara).click();
  await page.getByRole('option', {name:DatePersonaleData.PuncteDeLucru.EditarePuncteDeLucru.Tara}).click(); 
  //Judet
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.AdaugarePuncteDeLucru.Judet).click();
  await page.getByRole('option', {name:DatePersonaleData.PuncteDeLucru.EditarePuncteDeLucru.Judet}).click();
  //Localitate
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.AdaugarePuncteDeLucru.Localitate).click();
  await page.getByRole('option', {name:DatePersonaleData.PuncteDeLucru.EditarePuncteDeLucru.Localitate,exact:true}).click();
  //Adresa
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.AdaugarePuncteDeLucru.Adresa).click();
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.AdaugarePuncteDeLucru.Adresa).fill(DatePersonaleData.PuncteDeLucru.EditarePuncteDeLucru.Adresa);
  //CUI
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.AdaugarePuncteDeLucru.CUI).click();
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.AdaugarePuncteDeLucru.CUI).fill(DatePersonaleData.PuncteDeLucru.EditarePuncteDeLucru.CUI);
  //Salvare
  try {
    await page.locator(GeneralLocators.Butoane.Salveaza).click();
  } catch (error) {
    console.error('Eroare la click pe butonul Salveaza:', error);
  }

  //Afisare date punct de lucru editat
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.EditarePuncteDeLucru.Nume).click();
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.EditarePuncteDeLucru.Nume).clear();
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.EditarePuncteDeLucru.Nume).fill(DatePersonaleData.PuncteDeLucru.EditarePuncteDeLucru.Nume);
  await page.mouse.wheel(100, 0);
  await page.getByRole('gridcell').filter({ hasText: DatePersonaleData.PuncteDeLucru.EditarePuncteDeLucru.Nume}).last().click({ position: { x: 30, y: 0 } }); 
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.EditarePuncteDeLucru.Modifica).click();
  await page.waitForTimeout(2000);

  //Logout
  await logoutUser(page);
});

test('Stergere puncte de lucru', async ({ page }) => {
  
  test.setTimeout(50000);  
   //Login & main menu access
  await loginUser(page);
  
  //Click Puncte de lucru
  await page.getByText(GeneralLocators.MainMenu.PuncteDeLucru,{exact:true}).click();
    
  //Edit the component
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.StergerePuncteDeLucru.Nume).click();
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.StergerePuncteDeLucru.Nume).fill(DatePersonaleData.PuncteDeLucru.StergerePuncteDeLucru.Nume);
  await page.mouse.wheel(100, 0);
  await page.getByRole('gridcell').filter({ hasText: DatePersonaleData.PuncteDeLucru.StergerePuncteDeLucru.Nume}).last().click({ position: { x: 30, y: 0 } }); 
  
  //Stergere
  try {
    //Sterge
    await page.locator(GeneralLocators.Butoane.Sterge).click();
    //Confirma
    await page.locator(GeneralLocators.Butoane.Sterge).click();
  } catch (error) {
    console.error('Eroare la click pe butonul Sterge', error);
  }

  //Afisare date punct de lucru sters
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.StergerePuncteDeLucru.Nume).click();
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.StergerePuncteDeLucru.Nume).clear();
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.StergerePuncteDeLucru.Nume).fill(DatePersonaleData.PuncteDeLucru.StergerePuncteDeLucru.Nume);
  await page.mouse.wheel(100, 0);
  await page.getByRole('gridcell').filter({ hasText: DatePersonaleData.PuncteDeLucru.StergerePuncteDeLucru.Nume}); 
  await page.waitForTimeout(2000);

  //Logout
  await logoutUser(page);
});

//Meniu mare - Organizatii

test('Creare organizatii', async ({ page }) => {
  test.setTimeout(50000);
  //Login & main menu access
  await loginUser(page);
  
  //Click Organizatii
  await page.getByText(GeneralLocators.MainMenu.Organizatii,{exact:true}).click();
  await page.locator(GeneralLocators.Butoane.Adaugare).click(); 

  //Nume
  await page.locator(LocatorsDatePersonale.Organizatii.AdaugareOrganizatii.Nume).click();
  await page.locator(LocatorsDatePersonale.Organizatii.AdaugareOrganizatii.Nume).fill(DatePersonaleData.Organizatii.CreareOrganizatii.Nume);
  //Implicita - trebuie sa fie una singura organizatie implicita, deci nu se poate seta alta organizatie implicita
  //await page.locator(LocatorsDatePersonale.Organizatii.AdaugareOrganizatii.Implicita).click();

  //Salvare
  try {
    await page.locator(GeneralLocators.Butoane.Salveaza).click();
  } catch (error) {
    console.error('Eroare la click pe butonul Salveaza:', error);   
  }
  
  //Logout
  await logoutUser(page);
 
});


test('Editare organizatii', async ({ page }) => {
  test.setTimeout(50000);
  //Login & main menu access
  await loginUser(page);
  
  //Click Organizatii
  await page.getByText(GeneralLocators.MainMenu.Organizatii,{exact:true}).click();

  //Edit the component
  await page.locator(LocatorsDatePersonale.Organizatii.EditareOrganizatii.FiltrareNume).click();
  await page.locator(LocatorsDatePersonale.Organizatii.EditareOrganizatii.FiltrareNume).fill(DatePersonaleData.Organizatii.EditareOrganizatii.NumeInitial);
  await page.mouse.wheel(100, 0);
  await page.getByRole('gridcell').filter({ hasText: DatePersonaleData.Organizatii.EditareOrganizatii.NumeInitial}).last().click({ position: { x: 30, y: 0 } }); 
  await page.locator(LocatorsDatePersonale.Organizatii.EditareOrganizatii.Modifica).click();

  //Nume
  await page.locator(LocatorsDatePersonale.Organizatii.EditareOrganizatii.Nume).click();
  await page.locator(LocatorsDatePersonale.Organizatii.EditareOrganizatii.Nume).fill(DatePersonaleData.Organizatii.EditareOrganizatii.Nume);

  //Salvare
  try {
    await page.locator(GeneralLocators.Butoane.Salveaza).click();
  } catch (error) {
    console.error('Eroare la click pe butonul Salveaza:', error);
  }

  //Afisare organizatie editata
  await page.locator(LocatorsDatePersonale.Organizatii.EditareOrganizatii.FiltrareNume).click();
  await page.locator(LocatorsDatePersonale.Organizatii.EditareOrganizatii.FiltrareNume).clear();
  await page.locator(LocatorsDatePersonale.Organizatii.EditareOrganizatii.FiltrareNume).fill(DatePersonaleData.Organizatii.EditareOrganizatii.Nume);
  await page.mouse.wheel(100, 0);
  await page.getByRole('gridcell').filter({ hasText: DatePersonaleData.Organizatii.EditareOrganizatii.Nume}).last().click({ position: { x: 30, y: 0 } }); 
  await page.locator(LocatorsDatePersonale.Organizatii.EditareOrganizatii.Modifica).click();
  await page.waitForTimeout(2000);

  //Logout
  await logoutUser(page);
});

test('Stergere organizatii', async ({ page }) => {
  test.setTimeout(50000);
  //Login & main menu access
  await loginUser(page);
  
  //Click Organizatii
  await page.getByText(GeneralLocators.MainMenu.Organizatii,{exact:true}).click();

  //Edit the component
  await page.locator(LocatorsDatePersonale.Organizatii.StergereOrganizatii.FiltrareNume).click();
  await page.locator(LocatorsDatePersonale.Organizatii.StergereOrganizatii.FiltrareNume).fill(DatePersonaleData.Organizatii.StergereOrganizatii.Nume);
  await page.mouse.wheel(100, 0);
  await page.getByRole('gridcell').filter({ hasText: DatePersonaleData.Organizatii.StergereOrganizatii.Nume}).last().click({ position: { x: 30, y: 0 } }); 
  
  //Stergere
  try {
    //Sterge
    await page.locator(GeneralLocators.Butoane.Sterge).click();
    //Confirma
    await page.locator(GeneralLocators.Butoane.Sterge).click();
  } catch (error) {
    console.error('Eroare la click pe butonul Sterge', error);
  }

  //Afisare organizatie stearsa
  await page.locator(LocatorsDatePersonale.Organizatii.StergereOrganizatii.FiltrareNume).click();
  await page.locator(LocatorsDatePersonale.Organizatii.StergereOrganizatii.FiltrareNume).clear();
  await page.locator(LocatorsDatePersonale.Organizatii.StergereOrganizatii.FiltrareNume).fill(DatePersonaleData.Organizatii.StergereOrganizatii.Nume);
  
  //Logout
  await logoutUser(page);
});

test('Adaugare persoane', async ({ page }) => {
  test.setTimeout(50000);
  //Login & main menu access
  await loginUser(page);
  
  //Click Persoane
  await page.getByText(GeneralLocators.MainMenu.Persoane,{exact:true}).click();
  await page.locator(GeneralLocators.Butoane.Adaugare).click();
  
  //Nume
  await page.locator(LocatorsDatePersonale.Persoane.AdaugarePersoane.Nume).click(); 
  await page.locator(LocatorsDatePersonale.Persoane.AdaugarePersoane.Nume).fill(DatePersonaleData.Persoane.AdaugarePersoana.Nume);

  /*
  //Tip
  await page.locator(LocatorsDatePersonale.PuncteDeLucru.AdaugarePuncteDeLucru.Tip).click();
  await page.getByRole('option', {name:DatePersonaleData.PuncteDeLucru.CrearePuncteDeLucru.Tip}).click();
  */
 
  //Logout
  await logoutUser(page);
});
