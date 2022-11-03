// @ts-check
import { chromium, test } from '@playwright/test';
import { data } from './sample2.testdata'

test.describe('Validate Home Page', ()=>{

    test('Sample', async ()=>{
       const {tabPIM, tabAdmin, button} = data.TC001;
        console.log(tabPIM);
        console.log(tabAdmin);
        console.log(button);
    })

});