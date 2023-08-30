import { BaseConfig } from '@main/pages/base/baseConfig';

const expandButton = "[aria-label='Expand all']";
const collapseButton = "[aria-label='Collapse all']";
const dropdownListDiv = '.check-box-tree-wrapper';
const checkBoxPageHeader = '.playgound-header';

export class CheckBoxPage extends BaseConfig {
	selectCheckboxOption = async (optionNames: string[]): Promise<void> => {
		for (const name of optionNames) await this.elementHelper.click(`text=${name}`);
		this.framework.logger.info(`Selected the following checkbox options: ${optionNames}`);
	};

	expandDropdownList = async (): Promise<void> => {
		await this.elementHelper.click(expandButton);
		await this.elementHelper.click(checkBoxPageHeader);
		this.framework.logger.info('Expanded dropdown list');
	};

	collapseDropdownList = async (): Promise<void> => {
		await this.elementHelper.click(collapseButton);
		await this.elementHelper.click(checkBoxPageHeader);
		this.framework.logger.info('Collapsed dropdown list');
	};

	validateCheckboxScreenshot = async (screenshotName: string): Promise<void> => {
		await this.screenshot.validateElementScreenshot(dropdownListDiv, screenshotName);
		this.framework.logger.info('Successfully validated checkbox screenshot');
	};
}
