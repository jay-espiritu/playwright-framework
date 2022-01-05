import test from '../../page/basePages'
import { TextBoxForm } from '../../page/elementPages/textBoxPage'

import faker from 'faker'
faker.locale = 'en'

test.describe.parallel('Text Box Test Suite ', () => {
    test.beforeEach(async ({ textBoxPage }) => {
        await textBoxPage.framework.page.goto('/text-box')
    })

    test('Complete text box form successfully', async ({ textBoxPage }) => {
        const formDetails: TextBoxForm = {
            fullName: faker.name.findName(),
            email: faker.internet.exampleEmail(),
            currentAddress: faker.address.streetAddress(),
            permanentAddress: faker.address.streetAddress(),
        }

        await textBoxPage.fillTextBoxForm(formDetails)
        await textBoxPage.clickTextButtonSubmit()
        await textBoxPage.validateTextFormWindowExist()
    })
})
