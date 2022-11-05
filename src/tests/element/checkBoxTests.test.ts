import test from '@main/pages/basePages';
import { TearDown } from '@main/test-setup';
import { TestInfo } from '@playwright/test';

test.describe('Check Box Test Suite ', () => {
	test.beforeEach(async ({ pageHelper }) => {
		await pageHelper.navigateTo('/checkbox');
	});

	test('TC_Checkbox_001: Select multiple dropdown options', async ({ checkBoxPage }) => {
		const options = ['Notes', 'React', 'Private'];

		await checkBoxPage.expandDropdownList();
		await checkBoxPage.selectCheckboxOption(options);
	});

	test('TC_Checkbox_002: Expand and collapse dropdown options', async ({ checkBoxPage }) => {
		await checkBoxPage.expandDropdownList();
		await checkBoxPage.validateCheckboxScreenshot('expanded-checkbox');

		await checkBoxPage.collapseDropdownList();
		await checkBoxPage.validateCheckboxScreenshot('collapsed-checkbox');
	});
});
