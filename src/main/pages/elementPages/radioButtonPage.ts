import { expect } from '@main/pages/base/basePages';
import { BaseConfig } from '@main/pages/base/baseConfig';

const resultMessage = '.text-success';

export class RadioButtonPage extends BaseConfig {
	selectRadioButton = async (radioButton: 'yes' | 'no' | 'impressive'): Promise<void> => {
		await this.elementHelper.check(`text=${radioButton}`);
		this.framework.logger.info(`Selected radio button option "${radioButton}"`);
	};

	validateRadioButtonResult = async (result: string): Promise<void> => {
		const actual = this.elementHelper.findLocator(resultMessage);
		await expect(actual).toHaveText(result);
		this.framework.logger.info('Successfully validated radio button results');
	};
}
