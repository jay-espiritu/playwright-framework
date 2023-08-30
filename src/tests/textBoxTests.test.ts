import test from '@main/pages/base/basePages';
import { TextBoxForm } from '@main/pages';
import { faker } from '@faker-js/faker';

test.describe('Text Box Test Suite ', () => {
	test.beforeEach(async ({ pageHelper }) => {
		await pageHelper.navigateTo('/text-box');
	});

	test('TC_TextBox_001: Complete text box form successfully', async ({ textBoxPage }) => {
		const formDetails: TextBoxForm = {
			fullName: faker.name.fullName(),
			email: faker.internet.exampleEmail(),
			currentAddress: faker.address.streetAddress(),
			permanentAddress: faker.address.streetAddress()
		};

		await textBoxPage.fillTextBoxForm(formDetails);
		await textBoxPage.clickTextButtonSubmit();
		await textBoxPage.validateTextFormWindowExist();
	});
});
