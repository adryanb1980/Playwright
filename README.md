# Playwright UI Automation

End-to-end UI tests written with [Playwright Test](https://playwright.dev/) in TypeScript.

The repo covers two applications:

| Suite | Target | What it tests |
| --- | --- | --- |
| `tests/AppServ` | AppServ (internal HR application, URL in `test-data/AppServ/login.json`) | HR flows: creating employees, allocating them and creating contracts, and the *Date Personale* module (work points, organizations, persons, family doctors) |
| `tests/Demo` | [demoqa.com](https://demoqa.com/) (the `baseURL` in `playwright.config.ts`) | Practice scenarios: text box, web tables, practice form, upload, with screenshots attached to the report |

## Prerequisites

- Node.js (LTS)
- npm

## Setup

```bash
npm ci
npx playwright install --with-deps   # downloads the browsers
```

The `Microsoft Edge` and `Google Chrome` projects use the branded browsers installed on the machine (`channel: 'msedge'` / `'chrome'`). Install them with `npx playwright install msedge chrome` if they are missing.

## Running tests

```bash
# Everything, on every configured project (chromium, firefox, webkit, Edge, Chrome)
npx playwright test

# One suite or one file
npx playwright test tests/AppServ
npx playwright test tests/AppServ/ModulDatePersonale.spec.ts

# One browser
npx playwright test --project="Google Chrome"

# One test by title
npx playwright test -g "Adaugare puncte de lucru"

# Watch the browser / debug step by step
npx playwright test --headed
npx playwright test --debug
npx playwright test --ui
```

Open the HTML report from the last run:

```bash
npx playwright show-report
```

### Configuration notes

These defaults are set in [playwright.config.ts](playwright.config.ts):

- `testDir` is `./tests`. Files in `e2e/` are the Playwright starter example and are **not** run.
- `headless: true` and `slowMo: 300`, so every action is delayed by 300 ms. Remove `slowMo` for faster runs.
- `fullyParallel: true` runs tests in parallel locally. On CI it uses 1 worker and 2 retries.
- Traces are recorded `on-first-retry`. Open one with `npx playwright show-trace <trace.zip>`.

## Project structure

```
├── tests/
│   ├── AppServ/
│   │   ├── CommonActions.spec.ts                 # shared helpers: loginUser, logoutUser, Salveaza, Sterge
│   │   ├── CreareAngajat.spec.ts                 # create employee
│   │   ├── crearealocareangajatcontract.spec.ts  # create employee + allocation + contract
│   │   └── ModulDatePersonale.spec.ts            # Date Personale module CRUD
│   └── Demo/
│       └── toolsqa.spec.ts                       # demoqa.com scenarios
├── locators/      # selectors stored as JSON, grouped by app/module
├── test-data/     # input data stored as JSON (plus upload fixtures), grouped by app
├── specs/         # test plans (used by the Playwright agents)
├── e2e/           # Playwright starter example (not part of testDir)
├── .github/
│   ├── agents/    # Playwright planner / generator / healer agent definitions
│   └── workflows/ # CI
└── playwright.config.ts
```

### How a test is put together

Tests keep **selectors** and **data** out of the spec files. Each spec imports:

1. A locator file from `locators/<App>/<Module>/*.json`, for example `Locators.AdaugaAngajat.Nume`.
2. A data file from `test-data/<App>/*.json`, for example `EmployeeData.lastname`.
3. For AppServ, the shared helpers from `CommonActions.spec.ts`.

```ts
import { loginUser, Salveaza } from './CommonActions.spec.ts';
import * as GeneralLocators from '../../locators/AppServ/Global_Locators/globallocators.json';
import * as Data from '../../test-data/AppServ/datepersonaledata.json';

test('Exemplu', async ({ page }) => {
  await loginUser(page);
  await page.getByText(GeneralLocators.MainMenu.Angajati, { exact: true }).click();
  // ...
  await Salveaza(page);
});
```

When the UI changes, update the JSON locator file. The spec should not need editing.

### Adding a new test

1. Add the selectors to the matching file in `locators/` (or create `locators/<App>/<Module>/<name>.json`). Selectors used across modules go in `Global_Locators/globallocators.json`.
2. Add the input values to `test-data/<App>/<name>.json`.
3. Create `tests/<App>/<Name>.spec.ts`, import both JSON files, and reuse `loginUser` / `logoutUser` / `Salveaza` / `Sterge` for AppServ.
4. Run it with `npx playwright test tests/<App>/<Name>.spec.ts --headed`.

## Test data and credentials

`test-data/AppServ/login.json` holds the AppServ URL, username and password. The `creareangajat.json` / `datepersonaledata.json` files hold employee-style data (names, CNP, ID document, contact details). **Use only fictitious or test-account values in these files**, because they are committed to git. A safer setup is to load credentials from environment variables, for example with `dotenv` (already stubbed at the top of `playwright.config.ts`), and keep a `.env` file that is git-ignored.

## CI

[.github/workflows/playwright.yml](.github/workflows/playwright.yml) runs on every push and pull request to `main`/`master`. It installs dependencies and browsers, runs `npx playwright test` on Ubuntu, and uploads `playwright-report/` as a build artifact that is kept for 30 days.

## AI-assisted test authoring (optional)

[.vscode/mcp.json](.vscode/mcp.json) registers the Playwright Test MCP server (`npx playwright run-test-mcp-server`). The agents in [.github/agents](.github/agents) use it:

- **planner**: explores the app and writes a test plan into `specs/`
- **generator**: turns a plan into a spec file
- **healer**: runs failing tests and fixes broken selectors and steps
