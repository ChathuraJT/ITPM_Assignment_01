import { test } from '@playwright/test';

test('Pos_Fun_0024 - Convert paragraph with food delivery condition', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.waitForLoadState('networkidle');

  const textareas = page.locator('textarea');
  await textareas.nth(0).fill(
    'rathri 9.00 kalin order eka place kaloth free delivery labenavaa. late order kaloth charge ekak add wenavaa.'
  );

  await page.waitForTimeout(2500);

  await page.screenshot({
    path: 'singlish-converter/screenshots/IT23247840_Pos_Fun_0024.png'
  });
});