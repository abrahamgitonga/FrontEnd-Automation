// npm install playwright

// minimum node version 8 for async / await feature

// API Docs: https://github.com/microsoft/playwright/blob/master/docs/api.md
const playwright = require('playwright');

const browserType = 'chromium'; // chrome
//const browserType = 'firefox'; // firefox
//const browserType = 'webkit'; // safari

async function main() {
  // disable headless to see the browser
  const browser = await playwright[browserType].launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
//you can change the goto link to any other site you might want to test
  await page.goto('http://google.com');
  await page.waitForLoadState('load');

  const searchTerm = 'simple automation';
  const input = await page.$('[name="q"]');

  await input.type(searchTerm);
  await page.waitForTimeout(2000);
  await input.press('Enter');

  await page.waitForLoadState('load');
  await page.screenshot({ path: 'image1.png' });
  await page.waitForTimeout(3000);
  await browser.close();
}

main();
