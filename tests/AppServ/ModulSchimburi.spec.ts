import { test, expect } from '@playwright/test';
import {loginUser, logoutUser, Salveaza, Sterge} from './CommonActions.spec.ts';
import * as GeneralLocators from '../../locators/AppServ/Global_Locators/globallocators.json';
import * as LocatorsSchimburi from '../../locators/AppServ/Resurse_Umane/schimburi.json';
import * as SchimburiData from '../../test-data/AppServ/schimburi.json';

//Editarea si stergerea folosesc schimbul creat la adaugare, deci testele ruleaza in ordine
//Schimburile apar in toate listele de schimburi din aplicatie, deci schimbul de test se sterge la final
test.describe.configure({ mode: 'serial' });

//Cod unic per rulare
const codSchimb = SchimburiData.Schimburi.CreareSchimburi.PrefixCod + Date.now().toString().slice(-4);

//Meniu mare - Resurse umane - Schimburi
test('Adaugare schimburi', async ({ page }) => {

  test.setTimeout(50000);
  //Login & main menu access
  await loginUser(page);

  //Click Schimburi
  await page.getByText(GeneralLocators.MainMenu.Schimburi,{exact:true}).click();
  await page.locator(GeneralLocators.Butoane.Adaugare).click();

  //Cod
  await page.locator(LocatorsSchimburi.Schimburi.AdaugareSchimburi.Cod).click();
  await page.locator(LocatorsSchimburi.Schimburi.AdaugareSchimburi.Cod).fill(codSchimb);
  //Denumire
  await page.locator(LocatorsSchimburi.Schimburi.AdaugareSchimburi.Denumire).click();
  await page.locator(LocatorsSchimburi.Schimburi.AdaugareSchimburi.Denumire).fill(SchimburiData.Schimburi.CreareSchimburi.Denumire);

  //Salvare
  await Salveaza(page);

  //Afisare schimb creat
  await page.locator(LocatorsSchimburi.Schimburi.Filtre.FiltrareCod).click();
  await page.locator(LocatorsSchimburi.Schimburi.Filtre.FiltrareCod).clear();
  await page.locator(LocatorsSchimburi.Schimburi.Filtre.FiltrareCod).fill(codSchimb);
  const rand = page.getByRole('row').filter({ has: page.getByRole('gridcell', {name:codSchimb, exact:true}) });
  await expect(rand).toHaveCount(1);
  await expect(rand.getByRole('gridcell', {name:SchimburiData.Schimburi.CreareSchimburi.Denumire, exact:true})).toBeVisible();

  //Logout
  await logoutUser(page);
});

test('Editare schimburi', async ({ page }) => {

  test.setTimeout(50000);
  //Login & main menu access
  await loginUser(page);

  //Click Schimburi
  await page.getByText(GeneralLocators.MainMenu.Schimburi,{exact:true}).click();

  //Edit the component
  await page.locator(LocatorsSchimburi.Schimburi.Filtre.FiltrareCod).click();
  await page.locator(LocatorsSchimburi.Schimburi.Filtre.FiltrareCod).fill(codSchimb);
  await page.getByRole('gridcell', {name:codSchimb, exact:true}).click();
  await page.locator(GeneralLocators.Butoane.Modifica).click();
  await expect(page.locator(LocatorsSchimburi.Schimburi.AdaugareSchimburi.Cod)).toHaveValue(codSchimb);
  await expect(page.locator(LocatorsSchimburi.Schimburi.AdaugareSchimburi.Denumire)).toHaveValue(SchimburiData.Schimburi.CreareSchimburi.Denumire);

  //Denumire
  await page.locator(LocatorsSchimburi.Schimburi.AdaugareSchimburi.Denumire).click();
  await page.locator(LocatorsSchimburi.Schimburi.AdaugareSchimburi.Denumire).fill(SchimburiData.Schimburi.EditareSchimburi.Denumire);

  //Salvare
  await Salveaza(page);

  //Afisare schimb editat
  await page.locator(LocatorsSchimburi.Schimburi.Filtre.FiltrareCod).click();
  await page.locator(LocatorsSchimburi.Schimburi.Filtre.FiltrareCod).clear();
  await page.locator(LocatorsSchimburi.Schimburi.Filtre.FiltrareCod).fill(codSchimb);
  const rand = page.getByRole('row').filter({ has: page.getByRole('gridcell', {name:codSchimb, exact:true}) });
  await expect(rand).toHaveCount(1);
  await expect(rand.getByRole('gridcell', {name:SchimburiData.Schimburi.EditareSchimburi.Denumire, exact:true})).toBeVisible();

  //Logout
  await logoutUser(page);
});

test('Stergere schimburi', async ({ page }) => {

  test.setTimeout(50000);
  //Login & main menu access
  await loginUser(page);

  //Click Schimburi
  await page.getByText(GeneralLocators.MainMenu.Schimburi,{exact:true}).click();

  //Selectare schimb
  await page.locator(LocatorsSchimburi.Schimburi.Filtre.FiltrareCod).click();
  await page.locator(LocatorsSchimburi.Schimburi.Filtre.FiltrareCod).fill(codSchimb);
  await page.getByRole('gridcell', {name:codSchimb, exact:true}).click();

  //Stergere
  await Sterge(page);

  //Afisare schimb sters
  await page.locator(LocatorsSchimburi.Schimburi.Filtre.FiltrareCod).click();
  await page.locator(LocatorsSchimburi.Schimburi.Filtre.FiltrareCod).clear();
  await page.locator(LocatorsSchimburi.Schimburi.Filtre.FiltrareCod).fill(codSchimb);
  await expect(page.getByRole('gridcell', {name:codSchimb, exact:true})).toHaveCount(0);

  //Logout
  await logoutUser(page);
});
