import { expect } from '@playwright/test';
import { ElementHelper } from '@main/helpers';
import { Framework } from '@main/test-setup';

const resultMessage = '.text-success';

export class RadioButtonPage {
	readonly framework: Framework;

	constructor(framework: Framework) {
		this.framework = framework;
	}

	selectRadioButton = async (radioButton: RadioButton): Promise<void> => {
		await ElementHelper.check(this.framework, `text=${radioButton}`);
		this.framework.logger.debug(`Selected radio button option '${radioButton}'`);
	};

	validateRadioButtonResult = async (result: string): Promise<void> => {
		const actual = ElementHelper.findLocator(this.framework, resultMessage);
		expect(await actual.innerText()).toBe(result);
		this.framework.logger.info('Successfully validated radio button results');
	};
}

export enum RadioButton {
	Yes = 'yes',
	No = 'no',
	Impressive = 'impressive'
}
