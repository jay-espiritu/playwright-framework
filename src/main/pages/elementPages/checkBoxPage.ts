import { ElementHelper } from '@main/helpers';
import { Framework } from '@main/test-setup';
import { Screenshot } from '@main/utils';

const expandButton = "[aria-label='Expand all']";
const collapseButton = "[aria-label='Collapse all']";
const dropdownListDiv = '.check-box-tree-wrapper';
const checkBoxPageHeader = '.playgound-header';

export class CheckBoxPage {
	readonly framework: Framework;

	constructor(framework: Framework) {
		this.framework = framework;
	}

	selectCheckboxOption = async (optionNames: string[]): Promise<void> => {
		for (let index = 0; index < optionNames.length; index++) {
			await ElementHelper.click(this.framework, `text=${optionNames[index]}`);
		}
		this.framework.logger.info(`Selected the following checkbox options: ${optionNames}`);
	};

	expandDropdownList = async (): Promise<void> => {
		await ElementHelper.click(this.framework, expandButton);
		await ElementHelper.click(this.framework, checkBoxPageHeader);
		this.framework.logger.info('Expanded dropdown list');
	};

	collapseDropdownList = async (): Promise<void> => {
		await ElementHelper.click(this.framework, collapseButton);
		await ElementHelper.click(this.framework, checkBoxPageHeader);
		this.framework.logger.info('Collapsed dropdown list');
	};

	validateCheckboxScreenshot = async (screenshotName: string): Promise<void> => {
		await Screenshot.validateElementScreenshot(this.framework, dropdownListDiv, screenshotName);
		this.framework.logger.info('Successfully validated checkbox screenshot');
	};
}
