import { test } from '@playwright/test';

test('Pos_UI_0001 - UI updates output area correctly', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.waitForLoadState('networkidle');

  const inputTextarea = page.locator('textarea').first();   // input
  const outputTextarea = page.locator('textarea').nth(1);   // output (Sinhala)

  // Fill input
  await inputTextarea.fill('mama oyaa ekka tharahin inne');

  // Wait until output textarea has some text
  await page.waitForFunction(
    (el) => el.value.trim().length > 0,
    outputTextarea
  );

  // Take screenshot with both input + output visible
  await page.screenshot({
    path: 'singlish-converter/screenshots/IT23247840_Pos_UI_0001.png',
    fullPage: false
  });
});