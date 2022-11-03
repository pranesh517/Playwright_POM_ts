import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
    const { baseURL, storageState } = config.projects[0].use;
    const browser = await chromium.launch({headless: true});
    const page = await browser.newPage();
    await page.goto(baseURL + '');

    await page.locator('[name="username"]').fill('Admin');
    await page.locator('[placeholder="Password"]').fill('admin123');
    await page.locator('[type="submit"]').click();

    await page.context().storageState({path: storageState as string});
    await page.close();
    await browser.close();
  }
  
  export default globalSetup;