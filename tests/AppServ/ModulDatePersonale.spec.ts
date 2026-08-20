import { test, expect, selectors } from '@playwright/test';
import {loginUser, logoutUser, Salveaza, Sterge} from './CommonActions.spec.ts';
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
  await Salveaza(page);

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
  await Salveaza(page);

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
  await Sterge(page);

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
  await Salveaza(page);

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
  await Salveaza(page);

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
  await Sterge(page);

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
  //Prenume
  await page.locator(LocatorsDatePersonale.Persoane.AdaugarePersoane.Prenume).click();
  await page.locator(LocatorsDatePersonale.Persoane.AdaugarePersoane.Prenume).fill(DatePersonaleData.Persoane.AdaugarePersoana.Prenume);
  //CNP
  await page.locator(LocatorsDatePersonale.Persoane.AdaugarePersoane.CNP).click();
  await page.locator(LocatorsDatePersonale.Persoane.AdaugarePersoane.CNP).fill(DatePersonaleData.Persoane.AdaugarePersoana.CNP);
  //Telefon
  await page.locator(LocatorsDatePersonale.Persoane.AdaugarePersoane.Telefon).click();
  await page.locator(LocatorsDatePersonale.Persoane.AdaugarePersoane.Telefon).fill(DatePersonaleData.Persoane.AdaugarePersoana.Telefon);
  //Email
  await page.locator(LocatorsDatePersonale.Persoane.AdaugarePersoane.Email).click();
  await page.locator(LocatorsDatePersonale.Persoane.AdaugarePersoane.Email).fill(DatePersonaleData.Persoane.AdaugarePersoana.Email);
  //Organizatia
  await page.locator(LocatorsDatePersonale.Persoane.AdaugarePersoane.Organizatia).click();
  await page.getByRole('option').filter({ hasText: DatePersonaleData.Persoane.AdaugarePersoana.Organizatia }).click();
  //Numar card
  await page.locator(LocatorsDatePersonale.Persoane.AdaugarePersoane.NumarCard).click();
  await page.locator(LocatorsDatePersonale.Persoane.AdaugarePersoane.NumarCard).fill(DatePersonaleData.Persoane.AdaugarePersoana.NumarCard);
  //Nationalitate
  await page.locator(LocatorsDatePersonale.Persoane.AdaugarePersoane.Nationalitate).click();
  await page.getByRole('option').filter({ hasText: DatePersonaleData.Persoane.AdaugarePersoana.Nationalitate }).click();
  //Refugiat
  await page.locator(LocatorsDatePersonale.Persoane.AdaugarePersoane.Refugiat).check();
  await page.locator(LocatorsDatePersonale.Persoane.AdaugarePersoane.Refugiat).uncheck();
  //Nume anterior
  await page.locator(LocatorsDatePersonale.Persoane.AdaugarePersoane.NumeAnterior).click();
  await page.locator(LocatorsDatePersonale.Persoane.AdaugarePersoane.NumeAnterior).fill(DatePersonaleData.Persoane.AdaugarePersoana.NumeAnterior);
  //Judet
  await page.locator(LocatorsDatePersonale.Persoane.AdaugarePersoane.Judet).click();
  await page.getByRole('option').filter({ hasText: DatePersonaleData.Persoane.AdaugarePersoana.Judet }).click();
  //Localitate
  await page.locator(LocatorsDatePersonale.Persoane.AdaugarePersoane.Localitate).click();
  await page.getByRole('option').filter({ hasText: DatePersonaleData.Persoane.AdaugarePersoana.Localitate }).click();
  //Strada
  await page.locator(LocatorsDatePersonale.Persoane.AdaugarePersoane.Strada).click();
  await page.locator(LocatorsDatePersonale.Persoane.AdaugarePersoane.Strada).fill(DatePersonaleData.Persoane.AdaugarePersoana.Strada);
  //Numar
  await page.locator(LocatorsDatePersonale.Persoane.AdaugarePersoane.Numar).click();
  await page.locator(LocatorsDatePersonale.Persoane.AdaugarePersoane.Numar).fill(DatePersonaleData.Persoane.AdaugarePersoana.Numar);
  //Apartament
  await page.locator(LocatorsDatePersonale.Persoane.AdaugarePersoane.Ap).click();
  await page.locator(LocatorsDatePersonale.Persoane.AdaugarePersoane.Ap).fill(DatePersonaleData.Persoane.AdaugarePersoana.Ap);
  //Cod postal
  await page.locator(LocatorsDatePersonale.Persoane.AdaugarePersoane.CodPostal).click();
  await page.locator(LocatorsDatePersonale.Persoane.AdaugarePersoane.CodPostal).fill(DatePersonaleData.Persoane.AdaugarePersoana.CodPostal);
  await page.mouse.wheel(0, 200); 
  
  //Salvare
  await Salveaza(page);

  //Logout
  await logoutUser(page);
});

test('Editare persoane', async ({ page }) => {
  test.setTimeout(50000);
  //Login & main menu access
  await loginUser(page); 
  //Click Persoane
  await page.getByText(GeneralLocators.MainMenu.Persoane,{exact:true}).click();
   
  //Edit the component
  await page.locator(LocatorsDatePersonale.Persoane.EditarePersoane.FiltrareCNP).click();
  await page.locator(LocatorsDatePersonale.Persoane.EditarePersoane.FiltrareCNP).fill(DatePersonaleData.Persoane.EditarePersoana.CNPInitial);
  await page.mouse.wheel(100, 0);
  await page.getByRole('gridcell').filter({ hasText: DatePersonaleData.Persoane.EditarePersoana.CNPInitial}).last().click({ position: { x: 30, y: 0 } }); 
  await page.locator(GeneralLocators.Butoane.Modifica).click();

  //Nume
  await page.locator(LocatorsDatePersonale.Persoane.EditarePersoane.Nume).click(); 
  await page.locator(LocatorsDatePersonale.Persoane.EditarePersoane.Nume).fill(DatePersonaleData.Persoane.EditarePersoana.Nume);
  //Prenume
  await page.locator(LocatorsDatePersonale.Persoane.EditarePersoane.Prenume).click();
  await page.locator(LocatorsDatePersonale.Persoane.EditarePersoane.Prenume).fill(DatePersonaleData.Persoane.EditarePersoana.Prenume);
  //CNP
  await page.locator(LocatorsDatePersonale.Persoane.EditarePersoane.CNP).click();
  await page.locator(LocatorsDatePersonale.Persoane.EditarePersoane.CNP).fill(DatePersonaleData.Persoane.EditarePersoana.CNP);
  //Telefon
  await page.locator(LocatorsDatePersonale.Persoane.EditarePersoane.Telefon).click();
  await page.locator(LocatorsDatePersonale.Persoane.EditarePersoane.Telefon).fill(DatePersonaleData.Persoane.EditarePersoana.Telefon);
  //Email
  await page.locator(LocatorsDatePersonale.Persoane.EditarePersoane.Email).click();
  await page.locator(LocatorsDatePersonale.Persoane.EditarePersoane.Email).fill(DatePersonaleData.Persoane.EditarePersoana.Email);
  //Organizatia
  await page.locator(LocatorsDatePersonale.Persoane.EditarePersoane.Organizatia).click();
  await page.getByRole('option').filter({ hasText: DatePersonaleData.Persoane.EditarePersoana.Organizatia }).click();
  //Numar card
  await page.locator(LocatorsDatePersonale.Persoane.EditarePersoane.NumarCard).click();
  await page.locator(LocatorsDatePersonale.Persoane.EditarePersoane.NumarCard).fill(DatePersonaleData.Persoane.EditarePersoana.NumarCard);
  //Nationalitate
  await page.locator(LocatorsDatePersonale.Persoane.EditarePersoane.Nationalitate).click();
  await page.getByRole('option').filter({ hasText: DatePersonaleData.Persoane.EditarePersoana.Nationalitate }).click();
  //Refugiat
  await page.locator(LocatorsDatePersonale.Persoane.EditarePersoane.Refugiat).check();
  await page.locator(LocatorsDatePersonale.Persoane.EditarePersoane.Refugiat).uncheck();
  //Nume anterior
  await page.locator(LocatorsDatePersonale.Persoane.EditarePersoane.NumeAnterior).click();
  await page.locator(LocatorsDatePersonale.Persoane.EditarePersoane.NumeAnterior).fill(DatePersonaleData.Persoane.EditarePersoana.NumeAnterior);
  //Judet
  await page.locator(LocatorsDatePersonale.Persoane.EditarePersoane.Judet).click();
  await page.getByRole('option').filter({ hasText: DatePersonaleData.Persoane.EditarePersoana.Judet }).click();
  //Localitate
  await page.locator(LocatorsDatePersonale.Persoane.EditarePersoane.Localitate).click();
  await page.getByRole('option').filter({ hasText: DatePersonaleData.Persoane.EditarePersoana.Localitate }).click();
  //Strada
  await page.locator(LocatorsDatePersonale.Persoane.EditarePersoane.Strada).click();
  await page.locator(LocatorsDatePersonale.Persoane.EditarePersoane.Strada).fill(DatePersonaleData.Persoane.EditarePersoana.Strada);
  //Numar
  await page.locator(LocatorsDatePersonale.Persoane.EditarePersoane.Numar).click();
  await page.locator(LocatorsDatePersonale.Persoane.EditarePersoane.Numar).fill(DatePersonaleData.Persoane.EditarePersoana.Numar);
  //Apartament
  await page.locator(LocatorsDatePersonale.Persoane.EditarePersoane.Ap).click();
  await page.locator(LocatorsDatePersonale.Persoane.EditarePersoane.Ap).fill(DatePersonaleData.Persoane.EditarePersoana.Ap);
  //Cod postal
  await page.locator(LocatorsDatePersonale.Persoane.EditarePersoane.CodPostal).click();
  await page.locator(LocatorsDatePersonale.Persoane.EditarePersoane.CodPostal).fill(DatePersonaleData.Persoane.EditarePersoana.CodPostal);
  await page.mouse.wheel(0, 200); 
  //Salvare
  await Salveaza(page);

  //View the component
  await page.locator(LocatorsDatePersonale.Persoane.EditarePersoane.FiltrareCNP).click();
  await page.locator(LocatorsDatePersonale.Persoane.EditarePersoane.FiltrareCNP).fill(DatePersonaleData.Persoane.EditarePersoana.CNP);
  await page.mouse.wheel(100, 0);
  await page.getByRole('gridcell').filter({ hasText: DatePersonaleData.Persoane.EditarePersoana.CNP}).last().click({ position: { x: 30, y: 0 } }); 
  await page.locator(GeneralLocators.Butoane.Modifica).click();
  
  //Logout
  await logoutUser(page);
});

//NU FUNCTIONEAZA DELETE-UL PE PERSOANE LA NIVEL DE APLICATIE
test('Stergere persoane', async ({ page }) => {
  test.setTimeout(50000);
  //Login & main menu access
  await loginUser(page);  
  //Click Persoane
  await page.getByText(GeneralLocators.MainMenu.Persoane,{exact:true}).click();
  //Edit the component
  await page.locator(LocatorsDatePersonale.Persoane.StergerePersoane.FiltrareCNP).click();
  await page.locator(LocatorsDatePersonale.Persoane.StergerePersoane.FiltrareCNP).fill(DatePersonaleData.Persoane.StergerePersoana.CNP);
  await page.mouse.wheel(100, 0);
  await page.getByRole('gridcell').filter({ hasText: DatePersonaleData.Persoane.StergerePersoana.CNP}).last().click({ position: { x: 30, y: 0 } }); 
  await Sterge(page);
  //Afisare persoana stearsa
  await page.locator(LocatorsDatePersonale.Persoane.StergerePersoane.FiltrareCNP).click();
  await page.locator(LocatorsDatePersonale.Persoane.StergerePersoane.FiltrareCNP).clear();
  await page.locator(LocatorsDatePersonale.Persoane.StergerePersoane.FiltrareCNP).fill(DatePersonaleData.Persoane.StergerePersoana.CNP);
  await page.waitForTimeout(3000);
  //Logout
  await logoutUser(page);
});