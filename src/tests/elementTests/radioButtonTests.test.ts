import test from '../../pages/basePages'
import { RadioButton } from '../../pages/elementPages/radioButtonPage'

test.describe('Radio Button Test Suite ', () => {
    test.beforeEach(async ({ checkBoxPage }) => {
        await checkBoxPage.framework.page.goto('/radio-button')
    })

    test('Select radio button as yes', async ({ radioButtonPage }) => {
        await radioButtonPage.selectRadioButton(RadioButton.Yes)
        await radioButtonPage.validateRadioButtonResult('Yes')
    })

    test('Select radio button as impressive', async ({ radioButtonPage }) => {
        await radioButtonPage.selectRadioButton(RadioButton.Impressive)
        await radioButtonPage.validateRadioButtonResult('Impressive')
    })
})
