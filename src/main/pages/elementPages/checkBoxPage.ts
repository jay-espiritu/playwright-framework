import { ElementHelper } from '@main/helpers';
import { Framework } from '@main/test-setup';
import { Screenshot } from '@main/utils';

const expandButton = "[aria-label='Expand all']";
const collapseButton = "[aria-label='Collapse all']";
const dropdownListDiv = '.check-box-tree-wrapper';
const checkBoxPageHeader = '.playgound-header';

export class CheckBoxPage {
	readonly framework: Framework;
	readonly elementHelper: ElementHelper;
	readonly screenshot: Screenshot;
	constructor(framework: Framework) {
		this.framework = framework;
		this.elementHelper = new ElementHelper(framework);
		this.screenshot = new Screenshot(framework);
	}

	selectCheckboxOption = async (optionNames: string[]): Promise<void> => {
		for (let index = 0; index < optionNames.length; index++) {
			await this.elementHelper.click(`text=${optionNames[index]}`);
		}
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
