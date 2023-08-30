import { Framework } from '@main/test-setup';
import { Response } from '@playwright/test';

export class PageHelper {
	readonly framework: Framework;

	constructor(framework: Framework) {
		this.framework = framework;
	}

	navigateTo = async (url: string): Promise<null | Response> => {
		const response = await this.framework.page.goto(url);
		this.framework.logger.debug(`Navigated to "${url}"`);
		return response;
	};

	getCurrentUrl = async (): Promise<string> => {
		const url = this.framework.page.url();
		this.framework.logger.debug(`Current URL is "${url}"`);
		return url;
	};

	refreshPage = async (): Promise<null | Response> => {
		const response = await this.framework.page.reload();
		this.framework.logger.debug(`Refreshed page`);
		return response;
	};
}
