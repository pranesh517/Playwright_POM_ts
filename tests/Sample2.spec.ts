// @ts-check
import { test, expect } from '@playwright/test';
import { setUp } from './../pages/setUp'
import { PIMPage } from './../pages/pimPage';
import { BanerPage } from './../pages/banerPage';
import { data } from './sample2.testdata';
import { TearDown } from './../pages/tearDown';

test.describe('Validate Home Page', ()=>{
    let Setup;
    let tearDown;

    test.beforeEach(async ({page}, testInfo) => {
        console.log(`Running ${testInfo.title}`);
        
        Setup = new setUp(page);
        await Setup.goto();
        await Setup.validateLandingPage();
    });

    test.afterEach(async({page}, testInfo) => {
        console.log(`Finished ${testInfo.title} with status ${testInfo.status}`);

        if (testInfo.status !== testInfo.expectedStatus)
        console.log(`Did not run as expected, ended up at ${page.url()}`);

        tearDown = new TearDown(page);
        await tearDown.closePageInstance();
    });

    test('TC001: Validate PIM Page functionality',async ({page}) => {
        const {tabPIM, tabAdmin, button} = data.TC001;
        const pimPage = new PIMPage(page);
        expect(await pimPage.getActiveTabName()).toBe(tabPIM);
        await pimPage.enterEmployeeId();
        await pimPage.clickOnSearchButton();
        expect(await pimPage.validateIfSearchResultsAreDisplayed()).toBeTruthy();
        expect(await pimPage.getSearchResultEmployeeName()).toBe('A');
        const banerPage = new BanerPage(page);
        await banerPage.clickOnAdminTab();
        expect(await banerPage.getActiveTabName()).toBe(tabAdmin);
        await banerPage.clickOnHeaderButton(button);
    });
});