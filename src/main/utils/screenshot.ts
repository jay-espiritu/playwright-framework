import { expect } from '@main/pages/basePages';
import { ElementHelper } from '@main/helpers';
import { Framework } from '@main/test-setup';

export const capturePage = async (framework: Framework): Promise<Buffer> => {
	return await framework.page.screenshot();
};

export const captureElement = async (framework: Framework, locator: string): Promise<Buffer> => {
	const element = ElementHelper.findLocator(framework, locator);
	return await element?.screenshot();
};

export const validateComparison = async (actualImage: Buffer, name: string): Promise<void> => {
	expect.soft(actualImage).toMatchSnapshot([`${name}.png`]);
};
