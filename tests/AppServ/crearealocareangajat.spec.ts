import { test, expect } from '@playwright/test';
import * as Locators from '../../locators/AppServ/creareangajat.json';
import * as LoginData from '../../test-data/AppServ/login.json';
import * as EmployeeData from '../../test-data/AppServ/creareangajat.json';
import * as AlocareLocators from '../../locators/AppServ/alocareangajat.json';
import * as AlocareData from '../../test-data/AppServ/alocareangajat.json';
import * as FormalitatiDeAngajareLocators from '../../locators/AppServ/formalitatideangajare.json';
import * as FormalitatiDeAngajareData from '../../test-data/AppServ/formalitatideangajare.json';



test('Creare angajat', async ({ page }) => {
  await page.goto('http://localhost:3000/auth/login-page');

  //Acces meniu mare
  await page.locator(Locators.Login.UserName).click();
  await page.locator(Locators.Login.UserName).fill(LoginData.username);
  await page.locator(Locators.Login.Password).click();
  await page.locator(Locators.Login.Password).fill(LoginData.password);
  await page.locator(Locators.Login.Autentificare).click();
  await page.locator(Locators.MainMenu.MainMenuAccess).click();
  

  //Click angajati
  await page.getByText(Locators.MainMenu.Angajati,{exact:true}).click();
  
  
 
 
  //Adauga angajat
  await page.getByText(Locators.OperatiiAngajati.Adauga,{exact:true}).click();
  await page.locator(Locators.AdaugaAngajat.Marca).click();
  await page.locator(Locators.AdaugaAngajat.Marca).fill(EmployeeData.marca);
  await page.locator(Locators.AdaugaAngajat.Nume).click();
  await page.locator(Locators.AdaugaAngajat.Nume).fill(EmployeeData.lastname);
  await page.locator(Locators.AdaugaAngajat.Prenume).click();
  await page.locator(Locators.AdaugaAngajat.Prenume).fill(EmployeeData.firstname);
  await page.locator(Locators.AdaugaAngajat.CNP).click();
  await page.locator(Locators.AdaugaAngajat.CNP).fill(EmployeeData.cnp);
  await page.locator(Locators.AdaugaAngajat.Telefon).click();
  await page.locator(Locators.AdaugaAngajat.Telefon).fill(EmployeeData.phone);
  await page.locator(Locators.AdaugaAngajat.Email).click();
  await page.locator(Locators.AdaugaAngajat.Email).fill(EmployeeData.email);
  //Drop down tip act identitate
  await page.locator(Locators.AdaugaAngajat.Document).click();
  await page.getByRole('option', {name:'Pașaport'}).click();
  await page.locator(Locators.AdaugaAngajat.Serie).click();
  await page.locator(Locators.AdaugaAngajat.Serie).fill(EmployeeData.serie);
  await page.locator(Locators.AdaugaAngajat.Numar).click();
  await page.locator(Locators.AdaugaAngajat.Numar).fill(EmployeeData.numar);
  await page.locator(Locators.AdaugaAngajat.EmisLa).click();
  await page.locator(Locators.AdaugaAngajat.EmisLa).fill(EmployeeData.emisla);
  await page.locator(Locators.AdaugaAngajat.ExpiraLa).click();
  await page.locator(Locators.AdaugaAngajat.ExpiraLa).fill(EmployeeData.expirala);
  await page.locator(Locators.AdaugaAngajat.EmisDe).click();
  await page.locator(Locators.AdaugaAngajat.EmisDe).fill(EmployeeData.emisde);

//Drop down Judet
  await page.locator(Locators.AdaugaAngajat.Judet).click();
  await page.getByRole('option', {name:'Arad'}).click();
//
//Drop down Localitate
  await page.locator(Locators.AdaugaAngajat.Localitate).click();
  await page.getByRole('option', {name:'Aciuta'}).click();
//

  await page.locator(Locators.AdaugaAngajat.Strada).click();
  await page.locator(Locators.AdaugaAngajat.Strada).fill(EmployeeData.strada);
  await page.locator(Locators.AdaugaAngajat.Nr).click();
  await page.locator(Locators.AdaugaAngajat.Nr).fill(EmployeeData.nr);
  await page.locator(Locators.AdaugaAngajat.Ap).click();
  await page.locator(Locators.AdaugaAngajat.Ap).fill(EmployeeData.ap);
  await page.locator(Locators.AdaugaAngajat.CodPostal).click();
  await page.locator(Locators.AdaugaAngajat.CodPostal).fill(EmployeeData.codpostal);
  await page.locator(Locators.AdaugaAngajat.CopiazaAdresaDeDomiciliu).click();
  //SalveazaAngajat
  await page.locator(Locators.General.Salvare).click();
 
  //Alocare pe post
  await page.getByRole('button', {name:AlocareLocators.Angajati.ChipNealocatiPePost}).click();
  await page.locator(AlocareLocators.Angajati.SearchByCNP).click();
  await page.locator(AlocareLocators.Angajati.SearchByCNP).fill(EmployeeData.cnp);
  await page.getByRole('gridcell',{name:EmployeeData.cnp}).click();
  await page.locator(AlocareLocators.Angajati.ButonAlocarePost).click();

  //Drop down Departament
  await page.locator(AlocareLocators.Alocare.Departament).click();
  await page.getByRole('option', {name:AlocareData.Departament}).click();

  
  //Drop down Subdepartament
  await page.locator(AlocareLocators.Alocare.Subdepartament).click();
  await page.getByRole('option', {name:AlocareData.Subdepartament}).click();

  //Selectare post
  await page.locator(AlocareLocators.Alocare.Post).first().click();



  //Formalitati de angajare
  //FIFR&FSEMA
  await page.getByRole('button', {name:AlocareLocators.Angajati.ChipActivi,exact:true}).click();
  await page.locator(AlocareLocators.Angajati.SearchByCNPActivi).click(); 
  await page.locator(AlocareLocators.Angajati.SearchByCNPActivi).clear();
  await page.locator(AlocareLocators.Angajati.SearchByCNPActivi).click();
  await page.locator(AlocareLocators.Angajati.SearchByCNPActivi).fill(EmployeeData.cnp);
  //display meniu dreapta angajat
  const box = await page.getByRole('checkbox').boundingBox();
  await page.mouse.click(box.x + box.width / 2 + 100, box.y + box.height / 2);
  //click buton formalitati de angajare

  
  /*
  await page.locator(FormalitatiDeAngajareLocators.FifrFsema.Angajare).click();
  await page.locator(FormalitatiDeAngajareLocators.FifrFsema.DataAngajare).fill(FormalitatiDeAngajareData.dataangajare);
  await page.locator(FormalitatiDeAngajareLocators.FifrFsema.DataFifr).click();
  await page.locator(FormalitatiDeAngajareLocators.FifrFsema.DataFifr).fill(FormalitatiDeAngajareData.datafifr);
  await page.locator(FormalitatiDeAngajareLocators.General.Salvare).click();
  */
  /*
  //Activi
  await page.getByRole('button', {name:AlocareLocators.Angajati.ChipActivi,exact:true}).click();
  await page.locator(AlocareLocators.Angajati.SearchByCNPActivi).click(); 
  await page.locator(AlocareLocators.Angajati.SearchByCNPActivi).clear();
  await page.locator(AlocareLocators.Angajati.SearchByCNPActivi).click();
  await page.locator(AlocareLocators.Angajati.SearchByCNPActivi).fill(EmployeeData.cnp);
  */


//Logout and close
  /*
  await page.waitForTimeout(3000);
  await page.close();
  */

});



/*
test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
    //Logout and close
  await page.waitForTimeout(2000);
  await page.close();
});
*/