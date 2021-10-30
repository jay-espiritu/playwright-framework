import { test as baseTest } from '@playwright/test'
import { AlertsPage, BookStorePage, ElementsPage, FormsPage, InteractionsPage, WidgetsPage } from '.'
import { Framework, Setup } from '../test-setup'

let framework: Framework

const test = baseTest.extend<{
    alertsPage: AlertsPage
    bookStorePage: BookStorePage
    elementsPage: ElementsPage
    formsPage: FormsPage
    interactionsPage: InteractionsPage
    widgetsPage: WidgetsPage
}>({
    alertsPage: async ({ browser, context, page }, use): Promise<Framework> => {
        framework = await Setup.beforeEachDefault(browser, context, page)
        await use(new AlertsPage(framework))
        return framework
    },
    bookStorePage: async ({ browser, context, page }, use): Promise<Framework> => {
        framework = await Setup.beforeEachDefault(browser, context, page)
        await use(new BookStorePage(framework))
        return framework
    },
    elementsPage: async ({ browser, context, page }, use): Promise<Framework> => {
        framework = await Setup.beforeEachDefault(browser, context, page)
        await use(new ElementsPage(framework))
        return framework
    },
    formsPage: async ({ browser, context, page }, use): Promise<Framework> => {
        framework = await Setup.beforeEachDefault(browser, context, page)
        await use(new FormsPage(framework))
        return framework
    },
    interactionsPage: async ({ browser, context, page }, use): Promise<Framework> => {
        framework = await Setup.beforeEachDefault(browser, context, page)
        await use(new InteractionsPage(framework))
        return framework
    },
    widgetsPage: async ({ browser, context, page }, use): Promise<Framework> => {
        framework = await Setup.beforeEachDefault(browser, context, page)
        await use(new WidgetsPage(framework))
        return framework
    },
})
export default test
export const expect = test.expect
