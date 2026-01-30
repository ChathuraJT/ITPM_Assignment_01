import { test } from '@playwright/test';

test('Neg_Fun_0001 - Convert paragraph with special symbols', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.waitForLoadState('networkidle');

  const textareas = page.locator('textarea');
  await textareas.nth(0).fill('mama @office #late una! bus eka $$$ slow una.');

  await page.waitForTimeout(2000);

  await page.screenshot({
    path: 'singlish-converter/screenshots/IT23247840_Neg_Fun_0001.png'
  });
});