import { test as baseTest } from '@playwright/test';
import { Logger } from 'log4js';
import { logging } from 'src/utils';
import { Framework, Setup } from 'src/main/test-setup';
import { Format } from 'src/main/utils';
import { CheckBoxPage, RadioButtonPage, TextBoxPage } from 'src/main/pages/index';

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
