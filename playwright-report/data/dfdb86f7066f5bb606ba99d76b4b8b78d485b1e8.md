# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AppServ\CreareAlocareAngajatContract.spec.ts >> Creare angajat si contract
- Location: tests\AppServ\CreareAlocareAngajatContract.spec.ts:13:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('button', { name: 'Nealocați pe post' })

```

# Test source

```ts
  1   | import { test, expect, selectors } from '@playwright/test';
  2   | import * as Locators from '../../locators/AppServ/Resurse_Umane/creareangajat.json';
  3   | import * as GeneralLocators from '../../locators/AppServ/Global_Locators/globallocators.json';
  4   | import * as LoginData from '../../test-data/AppServ/login.json';
  5   | import * as EmployeeData from '../../test-data/AppServ/creareangajat.json';
  6   | import * as AlocareLocators from '../../locators/AppServ/Resurse_Umane/alocareangajat.json';
  7   | import * as AlocareData from '../../test-data/AppServ/alocareangajat.json';
  8   | import * as FormalitatiDeAngajareLocators from '../../locators/AppServ/Resurse_Umane/formalitatideangajare.json';
  9   | import * as FormalitatiDeAngajareData from '../../test-data/AppServ/formalitatideangajare.json';
  10  | 
  11  | 
  12  | 
  13  | test('Creare angajat si contract', async ({ page }) => {
  14  |   await page.goto(LoginData.link);
  15  |   //Acces meniu mare
  16  |   await page.locator(Locators.Login.UserName).click();
  17  |   await page.locator(Locators.Login.UserName).fill(LoginData.username);
  18  |   await page.locator(Locators.Login.Password).click();
  19  |   await page.locator(Locators.Login.Password).fill(LoginData.password);
  20  |   await page.locator(Locators.Login.Autentificare).click();
  21  |   await page.locator(GeneralLocators.MainMenu.MainMenuAccess).click();
  22  |  
  23  |   //Click angajati
  24  |   await page.getByText(GeneralLocators.MainMenu.Angajati,{exact:true}).click();
  25  |   
  26  |   //Adauga angajat
  27  |   await page.getByText(Locators.OperatiiAngajati.Adauga,{exact:true}).click();
  28  |   await page.locator(Locators.AdaugaAngajat.Marca).click();
  29  |   await page.locator(Locators.AdaugaAngajat.Marca).fill(EmployeeData.marca);
  30  |   await page.locator(Locators.AdaugaAngajat.Nume).click();
  31  |   await page.locator(Locators.AdaugaAngajat.Nume).fill(EmployeeData.lastname);
  32  |   await page.locator(Locators.AdaugaAngajat.Prenume).click();
  33  |   await page.locator(Locators.AdaugaAngajat.Prenume).fill(EmployeeData.firstname);
  34  |   await page.locator(Locators.AdaugaAngajat.CNP).click();
  35  |   await page.locator(Locators.AdaugaAngajat.CNP).fill(EmployeeData.cnp);
  36  |   await page.locator(Locators.AdaugaAngajat.Telefon).click();
  37  |   await page.locator(Locators.AdaugaAngajat.Telefon).fill(EmployeeData.phone);
  38  |   await page.locator(Locators.AdaugaAngajat.Email).click();
  39  |   await page.locator(Locators.AdaugaAngajat.Email).fill(EmployeeData.email);
  40  |  
  41  |   //Drop down tip act identitate
  42  |   await page.locator(Locators.AdaugaAngajat.Document).click();
  43  |   await page.getByRole('option', {name:EmployeeData.document}).click();
  44  |   await page.locator(Locators.AdaugaAngajat.Serie).click();
  45  |   await page.locator(Locators.AdaugaAngajat.Serie).fill(EmployeeData.serie);
  46  |   await page.locator(Locators.AdaugaAngajat.Numar).click();
  47  |   await page.locator(Locators.AdaugaAngajat.Numar).fill(EmployeeData.numar);
  48  |   await page.locator(Locators.AdaugaAngajat.EmisLa).click();
  49  |   await page.locator(Locators.AdaugaAngajat.EmisLa).fill(EmployeeData.emisla);
  50  |   await page.locator(Locators.AdaugaAngajat.ExpiraLa).click();
  51  |   await page.locator(Locators.AdaugaAngajat.ExpiraLa).fill(EmployeeData.expirala);
  52  |   await page.locator(Locators.AdaugaAngajat.EmisDe).click();
  53  |   await page.locator(Locators.AdaugaAngajat.EmisDe).fill(EmployeeData.emisde);
  54  | 
  55  | //Drop down Judet
  56  |   await page.locator(Locators.AdaugaAngajat.Judet).click();
  57  |   await page.getByRole('option', {name:EmployeeData.judet}).click();
  58  | //
  59  | //Drop down Localitate
  60  |   await page.locator(Locators.AdaugaAngajat.Localitate).click();
  61  |   await page.getByRole('option', {name:EmployeeData.localitate}).click();
  62  | //
  63  | 
  64  |   await page.locator(Locators.AdaugaAngajat.Strada).click();
  65  |   await page.locator(Locators.AdaugaAngajat.Strada).fill(EmployeeData.strada);
  66  |   await page.locator(Locators.AdaugaAngajat.Nr).click();
  67  |   await page.locator(Locators.AdaugaAngajat.Nr).fill(EmployeeData.nr);
  68  |   await page.locator(Locators.AdaugaAngajat.Ap).click();
  69  |   await page.locator(Locators.AdaugaAngajat.Ap).fill(EmployeeData.ap);
  70  |   await page.locator(Locators.AdaugaAngajat.CodPostal).click();
  71  |   await page.locator(Locators.AdaugaAngajat.CodPostal).fill(EmployeeData.codpostal);
  72  |   await page.locator(Locators.AdaugaAngajat.CopiazaAdresaDeDomiciliu).click();
  73  |   //SalveazaAngajat
  74  |   await page.locator(Locators.General.Salvare).click();
  75  |  
  76  |   //Alocare pe post
> 77  |   await page.getByRole('button', {name:AlocareLocators.Angajati.ChipNealocatiPePost}).click();
      |                                                                                       ^ Error: locator.click: Target page, context or browser has been closed
  78  |   await page.locator(AlocareLocators.Angajati.SearchByCNP).click();
  79  |   await page.locator(AlocareLocators.Angajati.SearchByCNP).fill(EmployeeData.cnp);
  80  |   await page.getByRole('gridcell',{name:EmployeeData.cnp}).click();
  81  |   await page.locator(AlocareLocators.Angajati.ButonAlocarePost).click();
  82  | 
  83  |   //Drop down Departament
  84  |   await page.locator(AlocareLocators.Alocare.Departament).click();
  85  |   await page.getByRole('option', {name:AlocareData.Departament}).click();
  86  | 
  87  |   
  88  |   //Drop down Subdepartament
  89  |   await page.locator(AlocareLocators.Alocare.Subdepartament).click();
  90  |   await page.getByRole('option', {name:AlocareData.Subdepartament}).click();
  91  | 
  92  |   //Selectare post
  93  |   await page.locator(AlocareLocators.Alocare.Post).first().click();
  94  | 
  95  |   //Formalitati de angajare
  96  |   //FIFR&FSEMA
  97  |   await page.getByRole('button', {name:AlocareLocators.Angajati.ChipActivi,exact:true}).click();
  98  |   
  99  |   await page.locator(AlocareLocators.Angajati.SearchByCNPActivi).click(); 
  100 |   await page.locator(AlocareLocators.Angajati.SearchByCNPActivi).fill(EmployeeData.cnp);
  101 |   await page.mouse.wheel(100, 0);
  102 |   await page.getByRole('gridcell').filter({ hasText: EmployeeData.cnp}).last().click({ position: { x: 30, y: 0 } }); 
  103 |   await page.locator(FormalitatiDeAngajareLocators.FifrFsema.FormalitatiDeAngajare).isVisible();
  104 |   await page.locator(FormalitatiDeAngajareLocators.FifrFsema.FormalitatiDeAngajare).click();  
  105 |   await page.keyboard.press('Tab');
  106 |   await page.keyboard.press('Tab');
  107 |   await page.keyboard.press('Tab');
  108 |   await page.keyboard.press('Space');
  109 |   await page.locator(FormalitatiDeAngajareLocators.FifrFsema.DataAngajare).click();
  110 |   await page.locator(FormalitatiDeAngajareLocators.FifrFsema.DataAngajare).fill(FormalitatiDeAngajareData.dataangajare);
  111 |   await page.locator(FormalitatiDeAngajareLocators.FifrFsema.DataFifr).click();
  112 |   await page.locator(FormalitatiDeAngajareLocators.FifrFsema.DataFifr).fill(FormalitatiDeAngajareData.datafifr);
  113 |   const page2Promise = page.waitForEvent('popup');
  114 |   await page.locator(FormalitatiDeAngajareLocators.General.Salvare).click();
  115 |   const page2 = await page2Promise;
  116 |   await page2.close();
  117 |   //FisaPsihologica
  118 |   await page.locator(FormalitatiDeAngajareLocators.General.Back).click();
  119 |   await page.getByRole('gridcell').filter({ hasText: EmployeeData.cnp}).last().click({ position: { x: 20, y: 0 } }); 
  120 |   await page.locator(FormalitatiDeAngajareLocators.FisaPsihologica.FormalitatiDeAngajare).click();
  121 |   await page.keyboard.press('Tab');
  122 |   await page.keyboard.press('Tab');
  123 |   await page.keyboard.press('Tab');
  124 |   await page.keyboard.press('Tab');
  125 |   await page.keyboard.press('Tab');  
  126 |   await page.keyboard.press('Space');
  127 |   await page.locator(FormalitatiDeAngajareLocators.FisaPsihologica.Concluzii).fill(FormalitatiDeAngajareData.concluzii);
  128 |   await page.locator(FormalitatiDeAngajareLocators.FisaPsihologica.DataPsihologic).click();
  129 |   await page.locator(FormalitatiDeAngajareLocators.FisaPsihologica.DataPsihologic).fill(FormalitatiDeAngajareData.datapsihologic);
  130 |   const fileChooserPromise = page.waitForEvent('filechooser');
  131 |   await page.getByText("Trageți un fișier sau click").click();
  132 |   const fileChooser = await fileChooserPromise;
  133 |   await fileChooser.setFiles(FormalitatiDeAngajareData.UploadPath);
  134 |   await page.locator(FormalitatiDeAngajareLocators.General.Salvare).click();
  135 |   //Dosar medical
  136 |   await page.getByRole('gridcell').filter({ hasText: EmployeeData.cnp}).last().click({ position: { x: 20, y: 0 } }); 
  137 |   await page.locator(FormalitatiDeAngajareLocators.DosarMedical.FormalitatiDeAngajare).click();
  138 |   await page.locator(FormalitatiDeAngajareLocators.DosarMedical.NrDosar).click();
  139 |   await page.locator(FormalitatiDeAngajareLocators.DosarMedical.NrDosar).fill(FormalitatiDeAngajareData.nrdosarmedical);
  140 |   await page.locator(FormalitatiDeAngajareLocators.DosarMedical.DataDosar).click();
  141 |   await page.locator(FormalitatiDeAngajareLocators.DosarMedical.DataDosar).fill(FormalitatiDeAngajareData.datadosarmedical);
  142 |   await page.locator(FormalitatiDeAngajareLocators.DosarMedical.DataDosarAngajare).click();
  143 |   await page.locator(FormalitatiDeAngajareLocators.DosarMedical.DataDosarAngajare).fill(FormalitatiDeAngajareData.datadosarangajare);
  144 |   await page.locator(FormalitatiDeAngajareLocators.DosarMedical.DosarT).click();
  145 |   await page.locator(FormalitatiDeAngajareLocators.DosarMedical.DosarT).fill(FormalitatiDeAngajareData.dosarT);
  146 |   await page.locator(FormalitatiDeAngajareLocators.DosarMedical.DosarG).click();
  147 |   await page.locator(FormalitatiDeAngajareLocators.DosarMedical.DosarG).fill(FormalitatiDeAngajareData.dosarG);
  148 |   await page.locator(FormalitatiDeAngajareLocators.DosarMedical.AvizMedical).click();
  149 |   await page.locator(FormalitatiDeAngajareLocators.DosarMedical.AvizMedical).fill(FormalitatiDeAngajareData.avizmedical);
  150 |   await page.keyboard.press('Tab');  
  151 |   await page.keyboard.press('Space');
  152 |   await page.locator(FormalitatiDeAngajareLocators.DosarMedical.DataAviz).click();
  153 |   await page.locator(FormalitatiDeAngajareLocators.DosarMedical.DataAviz).fill(FormalitatiDeAngajareData.dataaviz);
  154 |   await page.locator(FormalitatiDeAngajareLocators.DosarMedical.DataControlUrmator).click();
  155 |   await page.locator(FormalitatiDeAngajareLocators.DosarMedical.DataControlUrmator).fill(FormalitatiDeAngajareData.datacontrolurmator);
  156 |   const fileChooserPromise2 = page.waitForEvent('filechooser');
  157 |   await page.getByText("Trageți un fișier sau click").click();
  158 |   const fileChooser2 = await fileChooserPromise2;
  159 |   await fileChooser2.setFiles(FormalitatiDeAngajareData.UploadPath);
  160 |   await page.locator(FormalitatiDeAngajareLocators.General.Salvare).click();
  161 |   //Fisa de aptitudini
  162 |   await page.locator(FormalitatiDeAngajareLocators.FisadeAptitudini.Nrfisadeaptitudini).click();
  163 |   await page.locator(FormalitatiDeAngajareLocators.FisadeAptitudini.Nrfisadeaptitudini).fill(FormalitatiDeAngajareData.nrfisadeaptitudini);
  164 |   await page.locator(FormalitatiDeAngajareLocators.FisadeAptitudini.Datafisaaptitudini).click();
  165 |   await page.locator(FormalitatiDeAngajareLocators.FisadeAptitudini.Datafisaaptitudini).fill(FormalitatiDeAngajareData.datafisaaptitudini);
  166 |   const fileChooserPromise3 = page.waitForEvent('filechooser');
  167 |   await page.getByText("Trageți un fișier sau click").click();
  168 |   const fileChooser3 = await fileChooserPromise3;
  169 |   await fileChooser3.setFiles(FormalitatiDeAngajareData.UploadPath);
  170 |   const page4Promise = page.waitForEvent('popup');
  171 |   await page.locator(FormalitatiDeAngajareLocators.General.Salvare).click();
  172 |   const page4 = await page4Promise;
  173 |   await page4.close(); 
  174 |   await page.locator(FormalitatiDeAngajareLocators.General.Salvare).click();
  175 | 
  176 | 
  177 |   //Contract de munca
```