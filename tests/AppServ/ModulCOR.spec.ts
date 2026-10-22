import { test, expect } from '@playwright/test';
import {loginUser, logoutUser, Salveaza, Sterge} from './CommonActions.spec.ts';
import * as GeneralLocators from '../../locators/AppServ/Global_Locators/globallocators.json';
import * as LocatorsCOR from '../../locators/AppServ/Resurse_Umane/cor.json';
import * as CORData from '../../test-data/AppServ/cor.json';

//Editarea si stergerea folosesc codul COR creat la adaugare, deci testele ruleaza in ordine
//Codurile COR apar in lista Functia / ocupatia din Functii, deci inregistrarea de test se sterge la final
test.describe.configure({ mode: 'serial' });

//Cod unic per rulare (6 cifre, prefix 99 - codurile COR oficiale nu incep cu 99)
const codCOR = CORData.COR.CreareCOR.PrefixCod + Date.now().toString().slice(-4);

//Meniu mare - Resurse umane - COR
test('Adaugare COR', async ({ page }) => {

  test.setTimeout(50000);
  //Login & main menu access
  await loginUser(page);

  //Click COR
  await page.getByText(GeneralLocators.MainMenu.COR,{exact:true}).click();
  await page.locator(GeneralLocators.Butoane.Adaugare).click();

  //Cod
  await page.locator(LocatorsCOR.COR.AdaugareCOR.Cod).click();
  await page.locator(LocatorsCOR.COR.AdaugareCOR.Cod).fill(codCOR);
  //Denumire
  await page.locator(LocatorsCOR.COR.AdaugareCOR.Denumire).click();
  await page.locator(LocatorsCOR.COR.AdaugareCOR.Denumire).fill(CORData.COR.CreareCOR.Denumire);
  //Nivel studii
  await page.locator(LocatorsCOR.COR.AdaugareCOR.NivelStudii).click();
  await page.getByRole('option', {name:CORData.COR.CreareCOR.NivelStudii, exact:true}).click();

  //Salvare
  await Salveaza(page);

  //Afisare COR creat
  await page.locator(LocatorsCOR.COR.Filtre.FiltrareCod).click();
  await page.locator(LocatorsCOR.COR.Filtre.FiltrareCod).clear();
  await page.locator(LocatorsCOR.COR.Filtre.FiltrareCod).fill(codCOR);
  const rand = page.getByRole('row').filter({ has: page.getByRole('gridcell', {name:codCOR, exact:true}) });
  await expect(rand).toHaveCount(1);
  await expect(rand.getByRole('gridcell', {name:CORData.COR.CreareCOR.Denumire, exact:true})).toBeVisible();
  await expect(rand.getByRole('gridcell', {name:CORData.COR.CreareCOR.NivelStudii, exact:true})).toBeVisible();

  //Logout
  await logoutUser(page);
});

test('Editare COR', async ({ page }) => {

  test.setTimeout(50000);
  //Login & main menu access
  await loginUser(page);

  //Click COR
  await page.getByText(GeneralLocators.MainMenu.COR,{exact:true}).click();

  //Edit the component
  await page.locator(LocatorsCOR.COR.Filtre.FiltrareCod).click();
  await page.locator(LocatorsCOR.COR.Filtre.FiltrareCod).fill(codCOR);
  await page.getByRole('gridcell', {name:codCOR, exact:true}).click();
  await page.locator(GeneralLocators.Butoane.Modifica).click();
  await expect(page.locator(LocatorsCOR.COR.AdaugareCOR.Cod)).toHaveValue(codCOR);
  await expect(page.locator(LocatorsCOR.COR.AdaugareCOR.Denumire)).toHaveValue(CORData.COR.CreareCOR.Denumire);

  //Denumire
  await page.locator(LocatorsCOR.COR.AdaugareCOR.Denumire).click();
  await page.locator(LocatorsCOR.COR.AdaugareCOR.Denumire).fill(CORData.COR.EditareCOR.Denumire);
  //Nivel studii
  await page.locator(LocatorsCOR.COR.AdaugareCOR.NivelStudii).click();
  await page.getByRole('option', {name:CORData.COR.EditareCOR.NivelStudii, exact:true}).click();

  //Salvare
  await Salveaza(page);

  //Afisare COR editat
  await page.locator(LocatorsCOR.COR.Filtre.FiltrareCod).click();
  await page.locator(LocatorsCOR.COR.Filtre.FiltrareCod).clear();
  await page.locator(LocatorsCOR.COR.Filtre.FiltrareCod).fill(codCOR);
  const rand = page.getByRole('row').filter({ has: page.getByRole('gridcell', {name:codCOR, exact:true}) });
  await expect(rand).toHaveCount(1);
  await expect(rand.getByRole('gridcell', {name:CORData.COR.EditareCOR.Denumire, exact:true})).toBeVisible();
  await expect(rand.getByRole('gridcell', {name:CORData.COR.EditareCOR.NivelStudii, exact:true})).toBeVisible();

  //Logout
  await logoutUser(page);
});

test('Stergere COR', async ({ page }) => {

  test.setTimeout(50000);
  //Login & main menu access
  await loginUser(page);

  //Click COR
  await page.getByText(GeneralLocators.MainMenu.COR,{exact:true}).click();

  //Selectare COR
  await page.locator(LocatorsCOR.COR.Filtre.FiltrareCod).click();
  await page.locator(LocatorsCOR.COR.Filtre.FiltrareCod).fill(codCOR);
  await page.getByRole('gridcell', {name:codCOR, exact:true}).click();

  //Stergere
  await Sterge(page);

  //Afisare COR sters
  await page.locator(LocatorsCOR.COR.Filtre.FiltrareCod).click();
  await page.locator(LocatorsCOR.COR.Filtre.FiltrareCod).clear();
  await page.locator(LocatorsCOR.COR.Filtre.FiltrareCod).fill(codCOR);
  await expect(page.getByRole('gridcell', {name:codCOR, exact:true})).toHaveCount(0);

  //Logout
  await logoutUser(page);
});
