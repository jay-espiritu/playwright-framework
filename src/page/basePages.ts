import { test as baseTest } from '@playwright/test'
import { TextBoxPage, CheckBoxPage } from '.'
import { Framework, Setup } from '../test-setup'

let framework: Framework

const test = baseTest.extend<{
    textBoxPage: TextBoxPage
    checkBoxPage: CheckBoxPage
}>({
    textBoxPage: async ({ browser, context, page }, use): Promise<Framework> => {
        framework = await Setup.beforeEachDefault(browser, context, page)
        await use(new TextBoxPage(framework))
        return framework
    },
    checkBoxPage: async ({ browser, context, page }, use): Promise<Framework> => {
        framework = await Setup.beforeEachDefault(browser, context, page)
        await use(new CheckBoxPage(framework))
        return framework
    },
})
export default test
export const expect = test.expect
