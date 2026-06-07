# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AppServ\crearealocareangajatcontract.spec.ts >> Creare angajat si contract
- Location: tests\AppServ\crearealocareangajatcontract.spec.ts:12:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForEvent: Target page, context or browser has been closed
=========================== logs ===========================
waiting for event "popup"
============================================================
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - img "..." [ref=e8]
        - list [ref=e9]:
          - listitem [ref=e10]:
            - link "Barbos Adrian-Ioan" [ref=e11] [cursor=pointer]:
              - /url: /admin/employees/21552/employment-formalities
              - generic [ref=e12]: Barbos Adrian-Ioan
      - list [ref=e14]:
        - listitem [ref=e15]:
          - link "Resurse umane" [ref=e16] [cursor=pointer]:
            - /url: /admin/employees/21552/employment-formalities
            - img [ref=e17]
            - generic [ref=e19]: Resurse umane
        - listitem [ref=e21]:
          - link "Pontaje" [ref=e22] [cursor=pointer]:
            - /url: /admin/employees/21552/employment-formalities
            - img [ref=e23]
            - generic [ref=e26]: Pontaje
        - listitem [ref=e28]:
          - link "Salarizare" [ref=e29] [cursor=pointer]:
            - /url: /admin/employees/21552/employment-formalities
            - img [ref=e30]
            - generic [ref=e32]: Salarizare
        - listitem [ref=e34]:
          - link "Producție" [ref=e35] [cursor=pointer]:
            - /url: /admin/employees/21552/employment-formalities
            - img [ref=e36]
            - generic [ref=e38]: Producție
        - listitem [ref=e40]:
          - link "Calitate" [ref=e41] [cursor=pointer]:
            - /url: /admin/employees/21552/employment-formalities
            - img [ref=e42]
            - generic [ref=e44]: Calitate
        - listitem [ref=e46]:
          - link "Planificare producție" [ref=e47] [cursor=pointer]:
            - /url: /admin/employees/21552/employment-formalities
            - img [ref=e48]
            - generic [ref=e50]: Planificare producție
        - listitem [ref=e52]:
          - link "Mentenanță" [ref=e53] [cursor=pointer]:
            - /url: /admin/employees/21552/employment-formalities
            - img [ref=e54]
            - generic [ref=e56]: Mentenanță
        - listitem [ref=e58]:
          - link "Laborator testare" [ref=e59] [cursor=pointer]:
            - /url: /admin/employees/21552/employment-formalities
            - img [ref=e60]
            - generic [ref=e64]: Laborator testare
        - listitem [ref=e66]:
          - link "Management proiect" [ref=e67] [cursor=pointer]:
            - /url: /admin/employees/21552/employment-formalities
            - img [ref=e68]
            - generic [ref=e70]: Management proiect
    - img [ref=e73]
  - banner [ref=e76]:
    - generic [ref=e77]:
      - button [ref=e80] [cursor=pointer]:
        - img [ref=e81]
      - generic [ref=e84]:
        - button [ref=e85] [cursor=pointer]:
          - img [ref=e86]
        - link "Angajați" [ref=e88] [cursor=pointer]:
          - /url: /admin/employees
        - text: /Fabrica de Confectii/Croitorie Bazaltului/Alimentator /Adi Test060305
      - generic [ref=e90]:
        - button [ref=e91] [cursor=pointer]:
          - img [ref=e92]
        - button [ref=e94] [cursor=pointer]:
          - img [ref=e95]
        - button [ref=e97] [cursor=pointer]:
          - img [ref=e98]
        - button [ref=e100] [cursor=pointer]:
          - img [ref=e101]
        - button [ref=e104] [cursor=pointer]:
          - img [ref=e105]
  - generic [ref=e111]:
    - generic [ref=e113]:
      - button "Date personale" [ref=e115] [cursor=pointer]:
        - generic [ref=e116]:
          - img [ref=e118]
          - generic [ref=e121]: Date personale
      - button "FIFR&FSEMA" [ref=e125] [cursor=pointer]:
        - generic [ref=e126]:
          - img [ref=e128]
          - generic [ref=e131]: FIFR&FSEMA
      - button "Fișa psihologică" [ref=e135] [cursor=pointer]:
        - generic [ref=e136]:
          - img [ref=e138]
          - generic [ref=e141]: Fișa psihologică
      - button "Dosar medical" [ref=e145] [cursor=pointer]:
        - generic [ref=e146]:
          - img [ref=e148]
          - generic [ref=e151]: Dosar medical
      - button "Fișa de aptitudini" [ref=e155] [cursor=pointer]:
        - generic [ref=e156]:
          - img [ref=e158]
          - generic [ref=e161]: Fișa de aptitudini
      - button "Contract" [ref=e165] [cursor=pointer]:
        - generic [ref=e166]:
          - img [ref=e168]
          - generic [ref=e171]: Contract
    - generic [ref=e172]:
      - generic [ref=e173]:
        - generic "[object Object]" [ref=e175]:
          - generic [ref=e176]:
            - img [ref=e179]
            - generic [ref=e182]: Contract
          - generic [ref=e184]:
            - generic [ref=e186]:
              - generic [ref=e187]: Tip contract
              - generic [ref=e188]:
                - combobox "Contract individual de muncă" [ref=e189] [cursor=pointer]
                - textbox: ContractIndividualMunca
                - img
            - generic [ref=e191]:
              - generic [ref=e192]: Nr. contract
              - textbox "Nr. contract" [ref=e194]: "2026060305"
              - paragraph
            - generic [ref=e196]:
              - generic [ref=e197]: Dată încheiere
              - textbox "Dată încheiere" [ref=e199]: 2025-04-24
              - paragraph
        - generic "[object Object]" [ref=e201]:
          - generic [ref=e202]:
            - img [ref=e205]
            - generic [ref=e208]: Obiectul contractului
          - generic [ref=e210]:
            - generic [ref=e212]:
              - generic [ref=e213]: Obiectul contractului
              - textbox "Obiectul contractului" [ref=e215]: Prestare munca in folosul angajatorului in schimbul platii activitatii prestate
              - paragraph
            - generic [ref=e217]:
              - generic [ref=e218]: Alte clauze
              - textbox "Alte clauze" [ref=e220]
              - paragraph
        - generic "[object Object]" [ref=e222]:
          - generic [ref=e223]:
            - img [ref=e226]
            - generic [ref=e229]: Durata contractului
          - generic [ref=e231]:
            - generic [ref=e233]:
              - generic [ref=e234]: Durata contract
              - generic [ref=e235]:
                - combobox "Nedeterminată" [ref=e236] [cursor=pointer]
                - textbox: Nedeterminata
                - img
            - generic [ref=e238]:
              - generic [ref=e239]: Data începere activitate
              - textbox "Data începere activitate" [ref=e241]: 2025-04-24
              - paragraph
        - generic "[object Object]" [ref=e243]:
          - generic [ref=e244]:
            - img [ref=e247]
            - generic [ref=e250]: Durata muncii
          - generic [ref=e252]:
            - generic [ref=e254]:
              - generic [ref=e255]: Durată timp muncă
              - generic [ref=e256]:
                - combobox "Normă întreagă 8/40" [ref=e257] [cursor=pointer]
                - textbox: NormaIntreaga840
                - img
            - generic [ref=e259]:
              - generic [ref=e260]: Repartizare muncă
              - generic [ref=e261]:
                - combobox "Schimburi" [ref=e262] [cursor=pointer]
                - textbox: Schimburi
                - img
            - generic [ref=e264]:
              - generic [ref=e265]: Tip tură
              - generic [ref=e266]:
                - combobox "Alta" [ref=e267] [cursor=pointer]
                - textbox: Alta
                - img
            - generic [ref=e269] [cursor=pointer]:
              - generic [ref=e270]:
                - checkbox "Ore de zi" [checked] [ref=e271]
                - img [ref=e272]
              - generic [ref=e274]: Ore de zi
            - generic [ref=e276] [cursor=pointer]:
              - checkbox "Ore de noapte" [ref=e278]
              - generic [ref=e280]: Ore de noapte
            - generic [ref=e282] [cursor=pointer]:
              - checkbox "Ore de repaus" [ref=e284]
              - generic [ref=e286]: Ore de repaus
            - generic [ref=e287]:
              - text: Program de lucru
              - generic [ref=e288]:
                - generic [ref=e290]:
                  - textbox [ref=e292]: "pe schimburi:"
                  - paragraph
                - generic [ref=e294]:
                  - textbox [ref=e296]: 06-14; 14-22
                  - paragraph
        - generic "[object Object]" [ref=e298]:
          - generic [ref=e299]:
            - img [ref=e302]
            - generic [ref=e305]: Felul muncii
          - generic [ref=e307]:
            - generic [ref=e310]:
              - generic [ref=e311]: Funcția / ocupația
              - generic [ref=e312]:
                - combobox "Funcția / ocupația" [ref=e313]: 932905 Muncitor necalificat în industria confectiilor
                - button "Open" [ref=e315] [cursor=pointer]:
                  - img [ref=e316]
              - paragraph
            - generic [ref=e319]:
              - generic [ref=e320]: Locul de muncă
              - textbox "Locul de muncă" [ref=e322]: Secțiile Producție aflate la sediul principal al Angajatorului
              - paragraph
            - generic [ref=e324]:
              - generic [ref=e325]: Tip loc muncă
              - generic [ref=e326]:
                - combobox "Fix" [ref=e327] [cursor=pointer]
                - textbox: Fix
                - img
        - generic "[object Object]" [ref=e330]:
          - generic [ref=e331]:
            - img [ref=e334]
            - generic [ref=e337]: Salariu și beneficii
          - generic [ref=e339]:
            - generic [ref=e341]:
              - generic [ref=e342]: Salariu de baza brut
              - spinbutton "Salariu de baza brut" [ref=e344]: "4060"
              - paragraph
            - generic [ref=e346]:
              - generic [ref=e347]: Sporuri
              - spinbutton "Sporuri" [ref=e349]
              - paragraph
            - generic [ref=e351]:
              - generic [ref=e352]: Indemnizații
              - spinbutton "Indemnizații" [ref=e354]
              - paragraph
            - generic [ref=e356]:
              - generic [ref=e357]: Alte adaosuri
              - spinbutton "Alte adaosuri" [ref=e359]
              - paragraph
            - generic [ref=e361]:
              - generic [ref=e362]: Ziua de plată salariu
              - spinbutton "Ziua de plată salariu" [ref=e364]: "15"
              - paragraph
        - generic "[object Object]" [ref=e366]:
          - generic [ref=e367]:
            - img [ref=e370]
            - generic [ref=e373]: Concediu
          - generic [ref=e375]:
            - generic [ref=e377]:
              - generic [ref=e378]: Concediu anual
              - spinbutton "Concediu anual" [ref=e380]: "20"
              - paragraph
            - generic [ref=e382]:
              - generic [ref=e383]: Concediu suplimentar
              - spinbutton "Concediu suplimentar" [ref=e385]: "0"
              - paragraph
        - generic "[object Object]" [ref=e387]:
          - generic [ref=e388]:
            - img [ref=e391]
            - generic [ref=e394]: Preavize
          - generic [ref=e396]:
            - generic [ref=e398]:
              - generic [ref=e399]: Perioada de proba
              - spinbutton "Perioada de proba" [ref=e401]: "90"
              - paragraph
            - generic [ref=e403]:
              - generic [ref=e404]: Preaviz concediere
              - spinbutton "Preaviz concediere" [ref=e406]: "20"
              - paragraph
            - generic [ref=e408]:
              - generic [ref=e409]: Preaviz demisie
              - spinbutton "Preaviz demisie" [ref=e411]: "20"
              - paragraph
        - generic "[object Object]" [ref=e413]:
          - generic [ref=e414]:
            - img [ref=e417]
            - generic [ref=e420]: Sănătate și siguranță
          - generic [ref=e422]:
            - generic [ref=e424]:
              - generic [ref=e425]: Condiții de muncă
              - generic [ref=e426]:
                - combobox "Normale" [ref=e427] [cursor=pointer]
                - textbox: Normal
                - img
            - generic [ref=e429]:
              - generic [ref=e430]: Echipament de protecție
              - textbox "Echipament de protecție" [ref=e432]: DA
              - paragraph
            - generic [ref=e434]:
              - generic [ref=e435]: Echipament de muncă
              - textbox "Echipament de muncă" [ref=e437]: DA
              - paragraph
            - generic [ref=e439]:
              - generic [ref=e440]: Igienico-sanitare
              - textbox "Igienico-sanitare" [ref=e442]: DA
              - paragraph
            - generic [ref=e444]:
              - generic [ref=e445]: Alimentație de protecție
              - textbox "Alimentație de protecție" [ref=e447]: DA
              - paragraph
            - generic [ref=e449]:
              - generic [ref=e450]: Alte SSM
              - textbox "Alte SSM" [ref=e452]: DA
              - paragraph
      - generic [ref=e453]:
        - button "Anexe CIM cu stagiu" [active] [ref=e455] [cursor=pointer]: Anexe CIM cu stagiu
        - button "Anexe CIM fără stagiu" [ref=e457] [cursor=pointer]: Anexe CIM fără stagiu
        - button "Fișa postului" [ref=e459] [cursor=pointer]: Fișa postului
        - button "Fișa postului necalificat" [ref=e461] [cursor=pointer]: Fișa postului necalificat
        - button "Tipărire" [ref=e464] [cursor=pointer]: Tipărire
        - button "Anulează" [ref=e466] [cursor=pointer]: Anulează
        - button "Salvează" [ref=e468] [cursor=pointer]: Salvează
        - button "Modifică fișa postului" [ref=e471] [cursor=pointer]: Modifică fișa postului
```

# Test source

```ts
  85  | 
  86  |   
  87  |   //Drop down Subdepartament
  88  |   await page.locator(AlocareLocators.Alocare.Subdepartament).click();
  89  |   await page.getByRole('option', {name:AlocareData.Subdepartament}).click();
  90  | 
  91  |   //Selectare post
  92  |   await page.locator(AlocareLocators.Alocare.Post).first().click();
  93  | 
  94  |   //Formalitati de angajare
  95  |   //FIFR&FSEMA
  96  |   await page.getByRole('button', {name:AlocareLocators.Angajati.ChipActivi,exact:true}).click();
  97  |   
  98  |   await page.locator(AlocareLocators.Angajati.SearchByCNPActivi).click(); 
  99  |   await page.locator(AlocareLocators.Angajati.SearchByCNPActivi).fill(EmployeeData.cnp);
  100 |   await page.mouse.wheel(100, 0);
  101 |   await page.getByRole('gridcell').filter({ hasText: EmployeeData.cnp}).last().click({ position: { x: 30, y: 0 } }); 
  102 |   await page.locator(FormalitatiDeAngajareLocators.FifrFsema.FormalitatiDeAngajare).isVisible();
  103 |   await page.locator(FormalitatiDeAngajareLocators.FifrFsema.FormalitatiDeAngajare).click();  
  104 |   await page.keyboard.press('Tab');
  105 |   await page.keyboard.press('Tab');
  106 |   await page.keyboard.press('Tab');
  107 |   await page.keyboard.press('Space');
  108 |   await page.locator(FormalitatiDeAngajareLocators.FifrFsema.DataAngajare).click();
  109 |   await page.locator(FormalitatiDeAngajareLocators.FifrFsema.DataAngajare).fill(FormalitatiDeAngajareData.dataangajare);
  110 |   await page.locator(FormalitatiDeAngajareLocators.FifrFsema.DataFifr).click();
  111 |   await page.locator(FormalitatiDeAngajareLocators.FifrFsema.DataFifr).fill(FormalitatiDeAngajareData.datafifr);
  112 |   const page2Promise = page.waitForEvent('popup');
  113 |   await page.locator(FormalitatiDeAngajareLocators.General.Salvare).click();
  114 |   const page2 = await page2Promise;
  115 |   await page2.close();
  116 |   //FisaPsihologica
  117 |   await page.locator(FormalitatiDeAngajareLocators.General.Back).click();
  118 |   await page.getByRole('gridcell').filter({ hasText: EmployeeData.cnp}).last().click({ position: { x: 20, y: 0 } }); 
  119 |   await page.locator(FormalitatiDeAngajareLocators.FisaPsihologica.FormalitatiDeAngajare).click();
  120 |   await page.keyboard.press('Tab');
  121 |   await page.keyboard.press('Tab');
  122 |   await page.keyboard.press('Tab');
  123 |   await page.keyboard.press('Tab');
  124 |   await page.keyboard.press('Tab');  
  125 |   await page.keyboard.press('Space');
  126 |   await page.locator(FormalitatiDeAngajareLocators.FisaPsihologica.Concluzii).fill(FormalitatiDeAngajareData.concluzii);
  127 |   await page.locator(FormalitatiDeAngajareLocators.FisaPsihologica.DataPsihologic).click();
  128 |   await page.locator(FormalitatiDeAngajareLocators.FisaPsihologica.DataPsihologic).fill(FormalitatiDeAngajareData.datapsihologic);
  129 |   const fileChooserPromise = page.waitForEvent('filechooser');
  130 |   await page.getByText("Trageți un fișier sau click").click();
  131 |   const fileChooser = await fileChooserPromise;
  132 |   await fileChooser.setFiles(FormalitatiDeAngajareData.UploadPath);
  133 |   await page.locator(FormalitatiDeAngajareLocators.General.Salvare).click();
  134 |   //Dosar medical
  135 |   await page.getByRole('gridcell').filter({ hasText: EmployeeData.cnp}).last().click({ position: { x: 20, y: 0 } }); 
  136 |   await page.locator(FormalitatiDeAngajareLocators.DosarMedical.FormalitatiDeAngajare).click();
  137 |   await page.locator(FormalitatiDeAngajareLocators.DosarMedical.NrDosar).click();
  138 |   await page.locator(FormalitatiDeAngajareLocators.DosarMedical.NrDosar).fill(FormalitatiDeAngajareData.nrdosarmedical);
  139 |   await page.locator(FormalitatiDeAngajareLocators.DosarMedical.DataDosar).click();
  140 |   await page.locator(FormalitatiDeAngajareLocators.DosarMedical.DataDosar).fill(FormalitatiDeAngajareData.datadosarmedical);
  141 |   await page.locator(FormalitatiDeAngajareLocators.DosarMedical.DataDosarAngajare).click();
  142 |   await page.locator(FormalitatiDeAngajareLocators.DosarMedical.DataDosarAngajare).fill(FormalitatiDeAngajareData.datadosarangajare);
  143 |   await page.locator(FormalitatiDeAngajareLocators.DosarMedical.DosarT).click();
  144 |   await page.locator(FormalitatiDeAngajareLocators.DosarMedical.DosarT).fill(FormalitatiDeAngajareData.dosarT);
  145 |   await page.locator(FormalitatiDeAngajareLocators.DosarMedical.DosarG).click();
  146 |   await page.locator(FormalitatiDeAngajareLocators.DosarMedical.DosarG).fill(FormalitatiDeAngajareData.dosarG);
  147 |   await page.locator(FormalitatiDeAngajareLocators.DosarMedical.AvizMedical).click();
  148 |   await page.locator(FormalitatiDeAngajareLocators.DosarMedical.AvizMedical).fill(FormalitatiDeAngajareData.avizmedical);
  149 |   await page.keyboard.press('Tab');  
  150 |   await page.keyboard.press('Space');
  151 |   await page.locator(FormalitatiDeAngajareLocators.DosarMedical.DataAviz).click();
  152 |   await page.locator(FormalitatiDeAngajareLocators.DosarMedical.DataAviz).fill(FormalitatiDeAngajareData.dataaviz);
  153 |   await page.locator(FormalitatiDeAngajareLocators.DosarMedical.DataControlUrmator).click();
  154 |   await page.locator(FormalitatiDeAngajareLocators.DosarMedical.DataControlUrmator).fill(FormalitatiDeAngajareData.datacontrolurmator);
  155 |   const fileChooserPromise2 = page.waitForEvent('filechooser');
  156 |   await page.getByText("Trageți un fișier sau click").click();
  157 |   const fileChooser2 = await fileChooserPromise2;
  158 |   await fileChooser2.setFiles(FormalitatiDeAngajareData.UploadPath);
  159 |   await page.locator(FormalitatiDeAngajareLocators.General.Salvare).click();
  160 |   //Fisa de aptitudini
  161 |   await page.locator(FormalitatiDeAngajareLocators.FisadeAptitudini.Nrfisadeaptitudini).click();
  162 |   await page.locator(FormalitatiDeAngajareLocators.FisadeAptitudini.Nrfisadeaptitudini).fill(FormalitatiDeAngajareData.nrfisadeaptitudini);
  163 |   await page.locator(FormalitatiDeAngajareLocators.FisadeAptitudini.Datafisaaptitudini).click();
  164 |   await page.locator(FormalitatiDeAngajareLocators.FisadeAptitudini.Datafisaaptitudini).fill(FormalitatiDeAngajareData.datafisaaptitudini);
  165 |   const fileChooserPromise3 = page.waitForEvent('filechooser');
  166 |   await page.getByText("Trageți un fișier sau click").click();
  167 |   const fileChooser3 = await fileChooserPromise3;
  168 |   await fileChooser3.setFiles(FormalitatiDeAngajareData.UploadPath);
  169 |   const page4Promise = page.waitForEvent('popup');
  170 |   await page.locator(FormalitatiDeAngajareLocators.General.Salvare).click();
  171 |   const page4 = await page4Promise;
  172 |   await page4.close(); 
  173 |   await page.locator(FormalitatiDeAngajareLocators.General.Salvare).click();
  174 | 
  175 | 
  176 |   //Contract de munca
  177 |   await page.getByRole('gridcell').filter({ hasText: EmployeeData.cnp}).last().click({ position: { x: 20, y: 0 } }); 
  178 |   await page.locator(FormalitatiDeAngajareLocators.ContractDeMunca.FormalitatiDeAngajare).click();
  179 |   await page.locator(FormalitatiDeAngajareLocators.ContractDeMunca.NrContract).click();
  180 |   await page.locator(FormalitatiDeAngajareLocators.ContractDeMunca.NrContract).fill(FormalitatiDeAngajareData.numarcontract);
  181 |   await page.locator(FormalitatiDeAngajareLocators.ContractDeMunca.DataIncheiereContract).click();
  182 |   await page.locator(FormalitatiDeAngajareLocators.ContractDeMunca.DataIncheiereContract).fill(FormalitatiDeAngajareData.dataincheierecontract);
  183 |   await page.locator(FormalitatiDeAngajareLocators.ContractDeMunca.DataIncepereActivitate).click();
  184 |   await page.locator(FormalitatiDeAngajareLocators.ContractDeMunca.DataIncepereActivitate).fill(FormalitatiDeAngajareData.dataincepereactivitate);
> 185 |   const page5Promise = page.waitForEvent('popup');
      |                             ^ Error: page.waitForEvent: Target page, context or browser has been closed
  186 |   await page.getByRole('button', {name: 'Anexe CIM cu stagiu'}).click();
  187 |   const page5 = await page5Promise;
  188 |   await page5.close(); 
  189 |   const page6Promise = page.waitForEvent('popup');
  190 |   await page.getByRole('button', {name: 'Anexe CIM fără stagiu'}).click();
  191 |   const page6 = await page6Promise;
  192 |   await page6.close(); 
  193 |   const page7Promise = page.waitForEvent('popup');
  194 |   await page.getByRole('button', {name: 'Fișa postului', exact: true}).click();
  195 |   const page7 = await page7Promise;
  196 |   await page7.close(); 
  197 |   const page8Promise = page.waitForEvent('popup');
  198 |   await page.getByRole('button', {name: 'Fișa postului necalificat', exact: true}).click();
  199 |   const page8 = await page8Promise;
  200 |   await page8.close(); 
  201 |   await page.locator(FormalitatiDeAngajareLocators.General.Salvare).click();
  202 |   await page.locator(FormalitatiDeAngajareLocators.General.Back).click();
  203 |   
  204 | 
  205 | });
  206 | 
  207 | 
```