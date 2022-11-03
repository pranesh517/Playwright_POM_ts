import { Locator, Page } from "@playwright/test";

export class BanerPage {

    private readonly page: Page;
    readonly adminTab: Locator;
    readonly activeSpan: Locator;
    readonly headerButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.adminTab = page.locator('[href="/web/index.php/admin/viewAdminModule"]');
        this.activeSpan = page.locator('.active span');
        this.headerButton = page.locator('.oxd-topbar li');
    }

    async clickOnAdminTab() {
        await this.adminTab.click();
    }

    async getActiveTabName() {
        return await this.activeSpan.innerText();
    }

    async clickOnHeaderButton(buttonName: string) {
        await this.headerButton.filter({hasText: buttonName}).getByText(buttonName, {exact: true}).click();
    }
}