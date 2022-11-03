import { expect, Locator, Page } from "@playwright/test";

export class setUp {

    private readonly page: Page;
    readonly landingActiveTab: Locator;

    constructor(page: Page) {
        this.page = page;
        this.landingActiveTab = page.locator('.active');
    }

    async goto() {
        await this.page.goto('');
    }

    async validateLandingPage() {
         await this.landingActiveTab.waitFor({state: 'visible'});
         expect(await this.landingActiveTab.isVisible()).toBe(true);
    }

}