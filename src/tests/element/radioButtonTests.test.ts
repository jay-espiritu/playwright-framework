import { PageHelper } from '../../main/helpers'
import test from '../../main/pages/basePages'
import { RadioButton } from '../../main/pages/elementPages/radioButtonPage'

test.describe('Radio Button Test Suite ', () => {
    test.beforeEach(async ({ radioButtonPage }) => {
        await PageHelper.navigateTo(radioButtonPage.framework, '/radio-button')
    })

    test('TC_RadioButton_001: Select radio button as yes', async ({ radioButtonPage }) => {
        await radioButtonPage.selectRadioButton(RadioButton.Yes)
        await radioButtonPage.validateRadioButtonResult('Yes')
    })

    test('TC_RadioButton_002: Select radio button as impressive', async ({ radioButtonPage }) => {
        await radioButtonPage.selectRadioButton(RadioButton.Impressive)
        await radioButtonPage.validateRadioButtonResult('Impressive')
    })
})
