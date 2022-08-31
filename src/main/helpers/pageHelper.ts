import { Framework } from '@main/test-setup';
import { Response } from '@playwright/test';

export const navigateTo = async (framework: Framework, url: string): Promise<null | Response> => {
	const response = await framework.page.goto(url);
	framework.logger.debug(`Navigated to \"${url}\"`);
	return response;
};

export const getCurrentUrl = async (framework: Framework): Promise<string> => {
	const url = framework.page.url();
	framework.logger.debug(`Current URL is \"${url}\"`);
	return url;
};

export const refreshPage = async (framework: Framework): Promise<null | Response> => {
	const response = await framework.page.reload();
	framework.logger.debug(`Refreshed page`);
	return response;
};
