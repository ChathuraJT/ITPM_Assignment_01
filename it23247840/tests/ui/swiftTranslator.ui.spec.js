import { test } from '@playwright/test';

test('UI_01 - Swift Translator page loads successfully', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: 'singlish-converter/screenshots/singlish-converter-ui.png' });
});