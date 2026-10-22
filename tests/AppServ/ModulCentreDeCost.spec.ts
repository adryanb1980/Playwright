import { test, expect } from '@playwright/test';
import {loginUser, logoutUser, Salveaza, Sterge} from './CommonActions.spec.ts';
import * as GeneralLocators from '../../locators/AppServ/Global_Locators/globallocators.json';
import * as LocatorsCentreDeCost from '../../locators/AppServ/Resurse_Umane/centredecost.json';
import * as CentreDeCostData from '../../test-data/AppServ/centredecost.json';

//Editarea si stergerea folosesc centrul de cost creat la adaugare, deci testele ruleaza in ordine
//Inregistrarea de test se sterge la final
test.describe.configure({ mode: 'serial' });

//Cod unic per rulare (prefix din test-data + 5 cifre)
const codCentruDeCost = CentreDeCostData.CentreDeCost.CreareCentruDeCost.PrefixCod + Date.now().toString().slice(-5);
//Denumirea trebuie sa fie unica (altfel salvarea afiseaza "Aceasta inregistrare exista deja"), deci contine si codul
const denumireCreare = CentreDeCostData.CentreDeCost.CreareCentruDeCost.Denumire + ' ' + codCentruDeCost;
const denumireEditare = CentreDeCostData.CentreDeCost.EditareCentruDeCost.Denumire + ' ' + codCentruDeCost;

//Meniu mare - Resurse umane - Centre de cost
test('Adaugare centru de cost', async ({ page }) => {

  test.setTimeout(50000);
  //Login & main menu access
  await loginUser(page);

  //Click Centre de cost
  await page.getByText(GeneralLocators.MainMenu.CentreDeCost,{exact:true}).click();
  await page.locator(GeneralLocators.Butoane.Adaugare).click();

  //Cod
  await page.locator(LocatorsCentreDeCost.CentreDeCost.AdaugareCentruDeCost.Cod).click();
  await page.locator(LocatorsCentreDeCost.CentreDeCost.AdaugareCentruDeCost.Cod).fill(codCentruDeCost);
  //Denumire
  await page.locator(LocatorsCentreDeCost.CentreDeCost.AdaugareCentruDeCost.Denumire).click();
  await page.locator(LocatorsCentreDeCost.CentreDeCost.AdaugareCentruDeCost.Denumire).fill(denumireCreare);

  //Salvare
  await Salveaza(page);

  //Afisare centru de cost creat
  await page.locator(LocatorsCentreDeCost.CentreDeCost.Filtre.FiltrareCod).click();
  await page.locator(LocatorsCentreDeCost.CentreDeCost.Filtre.FiltrareCod).clear();
  await page.locator(LocatorsCentreDeCost.CentreDeCost.Filtre.FiltrareCod).fill(codCentruDeCost);
  const rand = page.getByRole('row').filter({ has: page.getByRole('gridcell', {name:codCentruDeCost, exact:true}) });
  await expect(rand).toHaveCount(1);
  await expect(rand.getByRole('gridcell', {name:denumireCreare, exact:true})).toBeVisible();

  //Logout
  await logoutUser(page);
});

test('Editare centru de cost', async ({ page }) => {

  test.setTimeout(50000);
  //Login & main menu access
  await loginUser(page);

  //Click Centre de cost
  await page.getByText(GeneralLocators.MainMenu.CentreDeCost,{exact:true}).click();

  //Edit the component
  await page.locator(LocatorsCentreDeCost.CentreDeCost.Filtre.FiltrareCod).click();
  await page.locator(LocatorsCentreDeCost.CentreDeCost.Filtre.FiltrareCod).fill(codCentruDeCost);
  await page.getByRole('gridcell', {name:codCentruDeCost, exact:true}).click();
  await page.locator(GeneralLocators.Butoane.Modifica).click();
  await expect(page.locator(LocatorsCentreDeCost.CentreDeCost.AdaugareCentruDeCost.Cod)).toHaveValue(codCentruDeCost);
  await expect(page.locator(LocatorsCentreDeCost.CentreDeCost.AdaugareCentruDeCost.Denumire)).toHaveValue(denumireCreare);

  //Denumire
  await page.locator(LocatorsCentreDeCost.CentreDeCost.AdaugareCentruDeCost.Denumire).click();
  await page.locator(LocatorsCentreDeCost.CentreDeCost.AdaugareCentruDeCost.Denumire).fill(denumireEditare);

  //Salvare
  await Salveaza(page);

  //Afisare centru de cost editat
  await page.locator(LocatorsCentreDeCost.CentreDeCost.Filtre.FiltrareCod).click();
  await page.locator(LocatorsCentreDeCost.CentreDeCost.Filtre.FiltrareCod).clear();
  await page.locator(LocatorsCentreDeCost.CentreDeCost.Filtre.FiltrareCod).fill(codCentruDeCost);
  const rand = page.getByRole('row').filter({ has: page.getByRole('gridcell', {name:codCentruDeCost, exact:true}) });
  await expect(rand).toHaveCount(1);
  await expect(rand.getByRole('gridcell', {name:denumireEditare, exact:true})).toBeVisible();

  //Logout
  await logoutUser(page);
});

test('Stergere centru de cost', async ({ page }) => {

  test.setTimeout(50000);
  //Login & main menu access
  await loginUser(page);

  //Click Centre de cost
  await page.getByText(GeneralLocators.MainMenu.CentreDeCost,{exact:true}).click();

  //Selectare centru de cost
  await page.locator(LocatorsCentreDeCost.CentreDeCost.Filtre.FiltrareCod).click();
  await page.locator(LocatorsCentreDeCost.CentreDeCost.Filtre.FiltrareCod).fill(codCentruDeCost);
  await page.getByRole('gridcell', {name:codCentruDeCost, exact:true}).click();

  //Stergere
  await Sterge(page);

  //Afisare centru de cost sters
  await page.locator(LocatorsCentreDeCost.CentreDeCost.Filtre.FiltrareCod).click();
  await page.locator(LocatorsCentreDeCost.CentreDeCost.Filtre.FiltrareCod).clear();
  await page.locator(LocatorsCentreDeCost.CentreDeCost.Filtre.FiltrareCod).fill(codCentruDeCost);
  await expect(page.getByRole('gridcell', {name:codCentruDeCost, exact:true})).toHaveCount(0);

  //Logout
  await logoutUser(page);
});