import { test as baseTest } from '@playwright/test';
import { Logger } from 'log4js';
import { Framework, Setup } from '@main/test-setup';
import { CheckBoxPage, RadioButtonPage, TextBoxPage } from '@main/pages/index';
import { logging } from '@utils/loggers';
import { Format } from '@main/utils';

let framework: Framework;
let logger: Logger;

const test = baseTest.extend<{
	textBoxPage: TextBoxPage;
	checkBoxPage: CheckBoxPage;
	radioButtonPage: RadioButtonPage;
}>({
	textBoxPage: async ({ browser, context, page }, use, testInfo): Promise<Framework> => {
		logger = logging.getLogger(Format.getTestId(testInfo));
		framework = await Setup.beforeEachDefault(browser, context, page, logger);
		await use(new TextBoxPage(framework));
		return framework;
	},
	checkBoxPage: async ({ browser, context, page }, use, testInfo): Promise<Framework> => {
		logger = logging.getLogger(Format.getTestId(testInfo));
		framework = await Setup.beforeEachDefault(browser, context, page, logger);
		await use(new CheckBoxPage(framework));
		return framework;
	},
	radioButtonPage: async ({ browser, context, page }, use, testInfo): Promise<Framework> => {
		logger = logging.getLogger(Format.getTestId(testInfo));
		framework = await Setup.beforeEachDefault(browser, context, page, logger);
		await use(new RadioButtonPage(framework));
		return framework;
	}
});
export default test;
export const expect = test.expect;
