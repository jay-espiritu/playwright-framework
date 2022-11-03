import { ElementHelper } from '@main/helpers';
import { Framework } from '@main/test-setup';
import { expect } from '@main/pages/basePages';

const resultMessage = '.text-success';

export class RadioButtonPage {
	readonly framework: Framework;
	readonly elementHelper: ElementHelper;
	constructor(framework: Framework) {
		this.framework = framework;
		this.elementHelper = new ElementHelper(framework);
	}

	selectRadioButton = async (radioButton: RadioButton): Promise<void> => {
		await this.elementHelper.check(`text=${radioButton}`);
		this.framework.logger.info(`Selected radio button option \"${radioButton}\"`);
	};

	validateRadioButtonResult = async (result: string): Promise<void> => {
		const actual = this.elementHelper.findLocator(resultMessage);
		expect(await actual.innerText()).toBe(result);
		this.framework.logger.info('Successfully validated radio button results');
	};
}

export enum RadioButton {
	Yes = 'yes',
	No = 'no',
	Impressive = 'impressive'
}
