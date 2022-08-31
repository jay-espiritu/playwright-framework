import { expect } from '@main/pages/basePages';
import { ElementHelper } from '@main/helpers';
import { Framework } from '@main/test-setup';

const capturePage = async (framework: Framework): Promise<Buffer> => {
	return await framework.page.screenshot();
};

const captureElement = async (framework: Framework, locator: string): Promise<Buffer> => {
	const element = ElementHelper.findLocator(framework, locator);
	return await element?.screenshot();
};

const validateComparison = async (actualImage: Buffer, name: string): Promise<void> => {
	expect.soft(actualImage).toMatchSnapshot([`${name}.png`]);
};

export const validateElementScreenshot = async (framework: Framework, locator: string, name: string): Promise<void> => {
	const image = await captureElement(framework, locator);
	await validateComparison(image, name);
	framework.logger.info(`Successful element screenshot validation | Name: ${name}`);
};

export const validatePageScreenshot = async (framework: Framework, name: string): Promise<void> => {
	const image = await capturePage(framework);
	await validateComparison(image, name);
	framework.logger.info(`Successful page screenshot validation | Name: ${name}`);
};
