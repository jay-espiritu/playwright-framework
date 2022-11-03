import { expect } from '@main/pages/basePages';
import { ElementHelper } from '@main/helpers';
import { Framework } from '@main/test-setup';

export class Screenshot {
	readonly framework: Framework;
	readonly elementHelper: ElementHelper;
	constructor(framework: Framework) {
		this.framework = framework;
		this.elementHelper = new ElementHelper(framework);
	}

	validateComparison = async (actualImage: Buffer, name: string): Promise<void> => {
		expect.soft(actualImage).toMatchSnapshot([`${name}.png`]);
	};

	validateElementScreenshot = async (locator: string, name: string): Promise<void> => {
		const image = await this.captureElement(locator);
		await this.validateComparison(image, name);
		this.framework.logger.info(`Successful element screenshot validation | Name: ${name}`);
	};

	validatePageScreenshot = async (name: string): Promise<void> => {
		const image = await this.capturePage();
		await this.validateComparison(image, name);
		this.framework.logger.info(`Successful page screenshot validation | Name: ${name}`);
	};

	private capturePage = async (): Promise<Buffer> => {
		return await this.framework.page.screenshot();
	};

	private captureElement = async (locator: string): Promise<Buffer> => {
		const element = this.elementHelper.findLocator(locator);
		return await element?.screenshot();
	};
}
