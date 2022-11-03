// @ts-check
import { test, expect } from '@playwright/test';

test('Sample ',async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await page.locator('#name').fill('Pranesh');

    const optionDropDown = await page.locator('#dropdown-class-example');
    await optionDropDown.selectOption('option1');

    const checkBx = await page.locator('#checkBoxOption2');
    await checkBx.check();
    expect(await checkBx.isChecked()).toBe(true);

    const autoComplete = await page.locator('#autocomplete');
    await autoComplete.fill('India');

    // await page.locator('#ui-id-1 .ui-menu-item div').filter({hasText: 'India'}).first().click();

    await page.locator('#ui-id-1 .ui-menu-item div').getByText('India', {exact: true}).click();

    // await page.on('dialog', dialog => dialog.accept());

    await page.on('dialog', async dialog=>{
            await console.log(dialog.message());
            await dialog.accept();
    });

    await page.locator('#alertbtn').click();
   

    await new Promise(f => setTimeout(f, 6000));
})