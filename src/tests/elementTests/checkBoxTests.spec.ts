import test from '../../page/basePages'

test.describe.parallel('Check Box Test Suite ', () => {
    test.beforeEach(async ({ checkBoxPage }) => {
        await checkBoxPage.framework.page.goto('/checkbox')
    })

    test('Select multiple dropdown options', async ({ checkBoxPage }) => {
        const options = ['Notes', 'React', 'Private']

        await checkBoxPage.expandDropdownList()
        await checkBoxPage.selectCheckboxOption(options)
    })

    test('Expand and collapse dropdown options', async ({ checkBoxPage }) => {
        await checkBoxPage.expandDropdownList()
        // await checkBoxPage.validateCheckboxScreenshot('expanded-checkbox')

        await checkBoxPage.collapseDropdownList()
        // await checkBoxPage.validateCheckboxScreenshot('collapsed-checkbox')
    })
})
