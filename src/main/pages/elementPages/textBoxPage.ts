import { expect } from '@main/pages/base/basePages';
import { BaseConfig } from '@main/pages/base/baseConfig';

const fullName = '#userName';
const email = '#userEmail';
const currentAddress = '#currentAddress';
const permanentAddress = '#permanentAddress';
const submitButton = 'text=Submit';
const textFormResultWindow = '.border.col-md-12.col-sm-12';

export class TextBoxPage extends BaseConfig {
	fillTextBoxForm = async (formDetails: TextBoxForm): Promise<void> => {
		await this.elementHelper.enterText(fullName, formDetails.fullName);
		await this.elementHelper.enterText(email, formDetails.email);
		await this.elementHelper.enterText(currentAddress, formDetails.currentAddress);
		await this.elementHelper.enterText(permanentAddress, formDetails.permanentAddress);
		this.framework.logger.info(`Filled in text box form with following details: ${JSON.stringify(formDetails)}`);
	};

	clickTextButtonSubmit = async (): Promise<void> => {
		await this.elementHelper.click(submitButton);
		this.framework.logger.info('Clicked submit button');
	};

	validateTextFormWindowExist = async (): Promise<void> => {
		const locator = this.elementHelper.findLocator(textFormResultWindow);
		await expect(locator).toBeVisible();
		this.framework.logger.info('Validated text form window exists');
	};
}

export interface TextBoxForm {
	fullName: string;
	email: string;
	currentAddress: string;
	permanentAddress: string;
}
