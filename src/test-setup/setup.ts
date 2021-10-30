import { Browser, BrowserContext, Page, TestInfo } from '@playwright/test'

export class Framework {
    readonly browser: Browser
    readonly context: BrowserContext
    readonly page: Page
    constructor(browser: Browser, context: BrowserContext, page: Page) {
        this.browser = browser
        this.context = context
        this.page = page
    }
}

export const beforeEachDefault = async (browser: Browser, context: BrowserContext, page: Page): Promise<Framework> => {
    return new Framework(browser, context, page)
}
