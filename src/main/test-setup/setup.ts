import { Browser, BrowserContext, Page, TestInfo } from '@playwright/test';
import { Logger } from 'log4js';

export class Framework {
	readonly browser: Browser;
	readonly context: BrowserContext;
	readonly page: Page;
	readonly logger: Logger;
	constructor(browser: Browser, context: BrowserContext, page: Page, logger: Logger) {
		this.browser = browser;
		this.context = context;
		this.page = page;
		this.logger = logger;
	}
}

export const beforeEachDefault = async (browser: Browser, context: BrowserContext, page: Page, logger: Logger): Promise<Framework> => {
	return new Framework(browser, context, page, logger);
};
