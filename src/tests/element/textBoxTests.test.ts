import test from '@main/pages/basePages';
import { PageHelper } from '@main/helpers';
import { TextBoxForm } from '@main/pages';
import { faker } from '@faker-js/faker';

test.describe('Text Box Test Suite ', () => {
	test.beforeEach(async ({ textBoxPage }) => {
		await PageHelper.navigateTo(textBoxPage.framework, '/text-box');
	});

	test('TC_TextBox_001: Complete text box form successfully', async ({ textBoxPage }) => {
		const formDetails: TextBoxForm = {
			fullName: faker.name.findName(),
			email: faker.internet.exampleEmail(),
			currentAddress: faker.address.streetAddress(),
			permanentAddress: faker.address.streetAddress()
		};

		await textBoxPage.fillTextBoxForm(formDetails);
		await textBoxPage.clickTextButtonSubmit();
		await textBoxPage.validateTextFormWindowExist();
	});
});
