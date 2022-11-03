import { Locator, Page } from "@playwright/test";

export class PIMPage {
    private readonly page: Page;
    readonly activeSpan: Locator;
    readonly employeeIdTextField: Locator;
    readonly searchButton: Locator;
    readonly searchResultsId: Locator;
    readonly searchResultsName: Locator;

    constructor(page: Page){
        this.page = page;
        this.activeSpan = page.locator('.active span');
        this.employeeIdTextField = page.locator('.oxd-form-row .oxd-input');
        this.searchResultsId = page.locator('[role="cell"]:nth-of-type(2)');
        this.searchButton = page.locator('[type="submit"]');
        this.searchResultsName = page.locator('[role="cell"]:nth-of-type(3)');
    }

    async getActiveTabName() {
       return await this.activeSpan.innerText();
    }

    async enterEmployeeId() {
        await this.employeeIdTextField.fill('0290');
    }

    async clickOnSearchButton() {
        await this.searchButton.click();
    }

    async validateIfSearchResultsAreDisplayed() {
        await this.searchResultsId.first().waitFor({state: 'visible'});
        return await this.searchResultsId.getByText('0290', {exact: true}).first().isVisible();
    }

    async getSearchResultEmployeeName() {
        return await this.searchResultsName.getByText('A', {exact: true}).innerText();
    }
}