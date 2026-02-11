import { test, expect } from '@playwright/test';
import * as Locators from '../locators/app.json';
import * as AppData from '../test-data/appdata.json';

test('App Data Creation', async ({ page }) => {
  await page.goto('http://localhost:3000/auth/login-page');

  await page.locator(Locators.Login.UserName).click();
  await page.locator(Locators.Login.UserName).fill(AppData.username);
  await page.locator(Locators.Login.Password).click();
  await page.locator(Locators.Login.Password).fill(AppData.password);
  await page.locator(Locators.Login.Autentificare).click();

  await page.locator(Locators.MainMenu.MainMenuAccess).click();
    //Logout and close
  await page.waitForTimeout(2000);
  await page.close();
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