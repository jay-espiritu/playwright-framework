import test from '@main/pages/base/basePages';

test.describe('Radio Button Test Suite ', () => {
	test.beforeEach(async ({ pageHelper }) => {
		await pageHelper.navigateTo('/radio-button');
	});

	test('TC_RadioButton_001: Select radio button as yes', async ({ radioButtonPage }) => {
		await radioButtonPage.selectRadioButton('yes');
		await radioButtonPage.validateRadioButtonResult('Yes');
	});

	test('TC_RadioButton_002: Select radio button as impressive', async ({ radioButtonPage }) => {
		await radioButtonPage.selectRadioButton('yes');
		await radioButtonPage.validateRadioButtonResult('Impressive');
	});
});
