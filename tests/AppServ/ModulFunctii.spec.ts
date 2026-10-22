import { test, expect, Page } from '@playwright/test';
import {loginUser, logoutUser, Salveaza, Sterge} from './CommonActions.spec.ts';
import * as GeneralLocators from '../../locators/AppServ/Global_Locators/globallocators.json';
import * as LocatorsFunctii from '../../locators/AppServ/Resurse_Umane/functii.json';
import * as FunctiiData from '../../test-data/AppServ/functii.json';

//Meniu mare - Resurse umane - Functii
//Functia noua nu se creeaza direct: salvarea trimite o cerere "Functie noua" in Aprobari (status In asteptare)
test('Adaugare functii - cerere aprobare', async ({ page }) => {

  test.setTimeout(50000);
  //Cod unic per rulare, ca cererea verificata sa fie cea creata acum (cererile vechi raman in asteptare)
  const cod = FunctiiData.Functii.CreareFunctii.Cod + '-' + Date.now().toString().slice(-5);
  const descriereCerere = cod + ' - ' + FunctiiData.Functii.CreareFunctii.Denumire;

  //Login & main menu access
  await loginUser(page);

  //Click Functii
  await page.getByText(GeneralLocators.MainMenu.Functii,{exact:true}).click();
  await page.locator(GeneralLocators.Butoane.Adaugare).click();

  //Cod
  await page.locator(LocatorsFunctii.Functii.AdaugareFunctii.Cod).click();
  await page.locator(LocatorsFunctii.Functii.AdaugareFunctii.Cod).fill(cod);
  //Denumire
  await page.locator(LocatorsFunctii.Functii.AdaugareFunctii.Denumire).click();
  await page.locator(LocatorsFunctii.Functii.AdaugareFunctii.Denumire).fill(FunctiiData.Functii.CreareFunctii.Denumire);
  //Denumire Engleza
  await page.locator(LocatorsFunctii.Functii.AdaugareFunctii.DenumireEngleza).click();
  await page.locator(LocatorsFunctii.Functii.AdaugareFunctii.DenumireEngleza).fill(FunctiiData.Functii.CreareFunctii.DenumireEngleza);
  //Denumire Singaleza
  await page.locator(LocatorsFunctii.Functii.AdaugareFunctii.DenumireSingaleza).click();
  await page.locator(LocatorsFunctii.Functii.AdaugareFunctii.DenumireSingaleza).fill(FunctiiData.Functii.CreareFunctii.DenumireSingaleza);
  //Salariu brut
  await page.locator(LocatorsFunctii.Functii.AdaugareFunctii.SalariuBrut).click();
  await page.locator(LocatorsFunctii.Functii.AdaugareFunctii.SalariuBrut).fill(FunctiiData.Functii.CreareFunctii.SalariuBrut);
  //Categorie
  await page.locator(LocatorsFunctii.Functii.AdaugareFunctii.Categorie).click();
  await page.locator(LocatorsFunctii.Functii.AdaugareFunctii.Categorie).fill(FunctiiData.Functii.CreareFunctii.Categorie);
  //Functia / ocupatia (COR) - autocomplete
  await page.locator(LocatorsFunctii.Functii.AdaugareFunctii.FunctiaOcupatia).click();
  await page.locator(LocatorsFunctii.Functii.AdaugareFunctii.FunctiaOcupatia).fill(FunctiiData.Functii.CreareFunctii.FunctiaOcupatia);
  await page.getByRole('option', {name:FunctiiData.Functii.CreareFunctii.OptiuneCOR}).click();
  //Productie
  await page.locator(LocatorsFunctii.Functii.AdaugareFunctii.Productie).check();

  //Salvare
  await Salveaza(page);

  //Verificare cerere in Aprobari
  await page.locator(LocatorsFunctii.Aprobari.Acces).click();
  await page.getByText(LocatorsFunctii.Aprobari.ChipInAsteptare,{exact:true}).first().click();
  await page.locator(LocatorsFunctii.Aprobari.FiltrareDescriere).click();
  await page.locator(LocatorsFunctii.Aprobari.FiltrareDescriere).fill(descriereCerere);
  const cerere = page.getByRole('row').filter({ has: page.getByRole('gridcell', {name:descriereCerere, exact:true}) });
  await expect(cerere).toHaveCount(1);
  await expect(cerere.getByRole('gridcell', {name:LocatorsFunctii.Aprobari.TipFunctieNoua, exact:true})).toBeVisible();
  await expect(cerere.getByRole('gridcell', {name:LocatorsFunctii.Aprobari.ChipInAsteptare, exact:true})).toBeVisible();

  //Logout
  await logoutUser(page);
});

//Editare functie existenta si aprobata - optiunile functiei (Productie, Coordonare schimb) se salveaza direct, fara cerere de aprobare
//(Salariul / categoria trec prin Aprobari, iar Denumire Engleza / Singaleza nu se salveaza la editare)

//Selectare functie in lista si click Modifica
async function deschideEditare(page: Page) {
  await page.getByText(GeneralLocators.MainMenu.Functii,{exact:true}).click();
  await page.locator(LocatorsFunctii.Functii.Filtre.FiltrareCod).click();
  await page.locator(LocatorsFunctii.Functii.Filtre.FiltrareCod).fill(FunctiiData.Functii.EditareFunctii.Cod);
  await page.getByRole('gridcell', {name:FunctiiData.Functii.EditareFunctii.Cod, exact:true}).click();
  await page.locator(GeneralLocators.Butoane.Modifica).click();
  //Daca exista o cerere in asteptare pentru functie, Modifica afiseaza un mesaj si nu deschide formularul
  await expect(page.locator(LocatorsFunctii.Functii.AdaugareFunctii.Cod)).toHaveValue(FunctiiData.Functii.EditareFunctii.Cod);
  await expect(page.locator(LocatorsFunctii.Functii.AdaugareFunctii.Denumire)).toHaveValue(FunctiiData.Functii.EditareFunctii.Denumire);
}

test('Editare functii', async ({ page }) => {

  test.setTimeout(60000);
  //Login & main menu access
  await loginUser(page);

  //Edit the component - valorile initiale
  await deschideEditare(page);
  await expect(page.locator(LocatorsFunctii.Functii.AdaugareFunctii.Productie)).toBeChecked({checked:FunctiiData.Functii.EditareFunctii.ProductieInitial});
  await expect(page.locator(LocatorsFunctii.Functii.AdaugareFunctii.CoordonareSchimb)).toBeChecked({checked:FunctiiData.Functii.EditareFunctii.CoordonareSchimbInitial});

  //Productie
  await page.locator(LocatorsFunctii.Functii.AdaugareFunctii.Productie).setChecked(FunctiiData.Functii.EditareFunctii.Productie);
  //Coordonare schimb
  await page.locator(LocatorsFunctii.Functii.AdaugareFunctii.CoordonareSchimb).setChecked(FunctiiData.Functii.EditareFunctii.CoordonareSchimb);

  //Salvare
  await Salveaza(page);

  //Afisare functie editata
  await page.locator(GeneralLocators.MainMenu.MainMenuAccess).click();
  await deschideEditare(page);
  await expect(page.locator(LocatorsFunctii.Functii.AdaugareFunctii.Productie)).toBeChecked({checked:FunctiiData.Functii.EditareFunctii.Productie});
  await expect(page.locator(LocatorsFunctii.Functii.AdaugareFunctii.CoordonareSchimb)).toBeChecked({checked:FunctiiData.Functii.EditareFunctii.CoordonareSchimb});

  //Revenire la valorile initiale, ca testul sa poata fi rulat din nou
  await page.locator(LocatorsFunctii.Functii.AdaugareFunctii.Productie).setChecked(FunctiiData.Functii.EditareFunctii.ProductieInitial);
  await page.locator(LocatorsFunctii.Functii.AdaugareFunctii.CoordonareSchimb).setChecked(FunctiiData.Functii.EditareFunctii.CoordonareSchimbInitial);
  await Salveaza(page);

  //Afisare functie dupa revenire
  await page.locator(GeneralLocators.MainMenu.MainMenuAccess).click();
  await deschideEditare(page);
  await expect(page.locator(LocatorsFunctii.Functii.AdaugareFunctii.Productie)).toBeChecked({checked:FunctiiData.Functii.EditareFunctii.ProductieInitial});
  await expect(page.locator(LocatorsFunctii.Functii.AdaugareFunctii.CoordonareSchimb)).toBeChecked({checked:FunctiiData.Functii.EditareFunctii.CoordonareSchimbInitial});
  await page.locator(GeneralLocators.Butoane.Anuleaza).click();

  //Logout
  await logoutUser(page);
});

//Stergere - o functie noua exista doar dupa aprobare, deci testul isi creeaza functia: cerere -> aprobare -> stergere
test('Stergere functii', async ({ page }) => {

  test.setTimeout(90000);
  //Cod unic per rulare
  const cod = FunctiiData.Functii.StergereFunctii.Cod + '-' + Date.now().toString().slice(-5);
  const descriereCerere = cod + ' - ' + FunctiiData.Functii.StergereFunctii.Denumire;

  //Login & main menu access
  await loginUser(page);

  //Click Functii
  await page.getByText(GeneralLocators.MainMenu.Functii,{exact:true}).click();
  await page.locator(GeneralLocators.Butoane.Adaugare).click();

  //Cod
  await page.locator(LocatorsFunctii.Functii.AdaugareFunctii.Cod).click();
  await page.locator(LocatorsFunctii.Functii.AdaugareFunctii.Cod).fill(cod);
  //Denumire
  await page.locator(LocatorsFunctii.Functii.AdaugareFunctii.Denumire).click();
  await page.locator(LocatorsFunctii.Functii.AdaugareFunctii.Denumire).fill(FunctiiData.Functii.StergereFunctii.Denumire);
  //Salariu brut
  await page.locator(LocatorsFunctii.Functii.AdaugareFunctii.SalariuBrut).click();
  await page.locator(LocatorsFunctii.Functii.AdaugareFunctii.SalariuBrut).fill(FunctiiData.Functii.StergereFunctii.SalariuBrut);
  //Categorie
  await page.locator(LocatorsFunctii.Functii.AdaugareFunctii.Categorie).click();
  await page.locator(LocatorsFunctii.Functii.AdaugareFunctii.Categorie).fill(FunctiiData.Functii.StergereFunctii.Categorie);
  //Functia / ocupatia (COR) - autocomplete
  await page.locator(LocatorsFunctii.Functii.AdaugareFunctii.FunctiaOcupatia).click();
  await page.locator(LocatorsFunctii.Functii.AdaugareFunctii.FunctiaOcupatia).fill(FunctiiData.Functii.StergereFunctii.FunctiaOcupatia);
  await page.getByRole('option', {name:FunctiiData.Functii.StergereFunctii.OptiuneCOR}).click();

  //Salvare - se creeaza cererea "Functie noua"
  await Salveaza(page);

  //Aprobare cerere in Aprobari
  await page.locator(LocatorsFunctii.Aprobari.Acces).click();
  await page.locator(LocatorsFunctii.Aprobari.FiltrareDescriere).click();
  await page.locator(LocatorsFunctii.Aprobari.FiltrareDescriere).fill(descriereCerere);
  const cerere = page.getByRole('row').filter({ has: page.getByRole('gridcell', {name:descriereCerere, exact:true}) });
  await expect(cerere).toHaveCount(1);
  await cerere.getByRole('checkbox').check();
  await page.getByRole('button', {name:LocatorsFunctii.Aprobari.Aproba, exact:true}).click();
  //Data actului aditional - luna curenta
  await page.getByRole('dialog').locator(LocatorsFunctii.Aprobari.DataActAditional).fill(new Date().toISOString().slice(0, 7));
  await page.getByRole('dialog').locator(LocatorsFunctii.Aprobari.Confirma).click();
  await expect(page.getByRole('dialog')).toHaveCount(0);
  //Cererea nu mai este in asteptare
  await expect(cerere).toHaveCount(0);

  //Functia aprobata apare in lista
  await page.locator(GeneralLocators.MainMenu.MainMenuAccess).click();
  await page.getByText(GeneralLocators.MainMenu.Functii,{exact:true}).click();
  await page.locator(LocatorsFunctii.Functii.Filtre.FiltrareCod).click();
  await page.locator(LocatorsFunctii.Functii.Filtre.FiltrareCod).fill(cod);
  await expect(page.getByRole('gridcell', {name:FunctiiData.Functii.StergereFunctii.Denumire, exact:true})).toBeVisible();

  //Selectare functie si stergere
  //Click pe textul unei celule deschide direct formularul de editare, deci se da click pe marginea din dreapta a celulei Categorie
  //(valoare scurta, nu umple coloana; codul poate umple toata latimea coloanei Cod) - deschide panoul lateral
  const randFunctie = page.getByRole('row').filter({ has: page.getByRole('gridcell', {name:cod, exact:true}) });
  const celulaCategorie = randFunctie.getByRole('gridcell', {name:FunctiiData.Functii.StergereFunctii.Categorie, exact:true});
  const dimensiuneCelula = await celulaCategorie.boundingBox();
  await celulaCategorie.click({ position: { x: dimensiuneCelula!.width - 3, y: dimensiuneCelula!.height / 2 } });
  await expect(page.getByRole('heading', {name:FunctiiData.Functii.StergereFunctii.Denumire, exact:true})).toBeVisible();
  await Sterge(page);

  //Afisare functie stearsa
  await page.locator(LocatorsFunctii.Functii.Filtre.FiltrareCod).click();
  await page.locator(LocatorsFunctii.Functii.Filtre.FiltrareCod).clear();
  await page.locator(LocatorsFunctii.Functii.Filtre.FiltrareCod).fill(cod);
  await expect(page.getByRole('gridcell', {name:cod, exact:true})).toHaveCount(0);

  //Logout
  await logoutUser(page);
});
