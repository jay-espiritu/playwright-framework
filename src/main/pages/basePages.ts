import { test as baseTest, TestInfo } from '@playwright/test'
import { Logger } from 'log4js'
import { TextBoxPage, CheckBoxPage, RadioButtonPage } from '.'
import { Format } from '../../utils'
import { logging } from '../../utils/loggers'
import { Framework, Setup } from '../test-setup'

let framework: Framework
let logger: Logger

const test = baseTest.extend<{
    textBoxPage: TextBoxPage
    checkBoxPage: CheckBoxPage
    radioButtonPage: RadioButtonPage
}>({
    textBoxPage: async ({ browser, context, page }, use, testInfo): Promise<Framework> => {
        logger = logging.getLogger(Format.getTestId(testInfo))
        framework = await Setup.beforeEachDefault(browser, context, page, logger)
        await use(new TextBoxPage(framework))
        return framework
    },
    checkBoxPage: async ({ browser, context, page }, use, testInfo): Promise<Framework> => {
        logger = logging.getLogger(Format.getTestId(testInfo))
        framework = await Setup.beforeEachDefault(browser, context, page, logger)
        await use(new CheckBoxPage(framework))
        return framework
    },
    radioButtonPage: async ({ browser, context, page }, use, testInfo): Promise<Framework> => {
        logger = logging.getLogger(Format.getTestId(testInfo))
        framework = await Setup.beforeEachDefault(browser, context, page, logger)
        await use(new RadioButtonPage(framework))
        return framework
    },
})
export default test
export const expect = test.expect
