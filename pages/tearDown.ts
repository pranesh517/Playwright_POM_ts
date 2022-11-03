import { Page } from "@playwright/test";

export class TearDown {

    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async closePageInstance() {
        await this.page.close();
    }

}