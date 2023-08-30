import { test as baseTest } from '@playwright/test';
import { Logger } from 'log4js';
import { Framework, Setup } from '@main/test-setup';
import { CheckBoxPage, RadioButtonPage, TextBoxPage } from '@main/pages/index';

import { logging } from '@utils/loggers';
import { Format } from '@utils/index';
import { ElementHelper, PageHelper } from '@main/helpers/index';
import { TearDown } from '../../test-setup/tearDown';

let framework: Framework;
let logger: Logger;

const test = baseTest.extend<{
	checkBoxPage: CheckBoxPage;
	elementHelper: ElementHelper;
	pageHelper: PageHelper;
	radioButtonPage: RadioButtonPage;
	tearDown: TearDown;
	textBoxPage: TextBoxPage;
}>({
	//#region Page and Element helpers
	elementHelper: async ({ browser, context, page }, use, testInfo): Promise<Framework> => {
		logger = logging.getLogger(Format.getTestId(testInfo));
		framework = await Setup.beforeEachDefault(browser, context, page, logger);
		await use(new ElementHelper(framework));
		return framework;
	},
	pageHelper: async ({ browser, context, page }, use, testInfo): Promise<Framework> => {
		logger = logging.getLogger(Format.getTestId(testInfo));
		framework = await Setup.beforeEachDefault(browser, context, page, logger);
		await use(new PageHelper(framework));
		return framework;
	},
	//#endregion

	//#region Setup pages
	tearDown: async ({ browser, context, page }, use, testInfo): Promise<Framework> => {
		logger = logging.getLogger(Format.getTestId(testInfo));
		framework = await Setup.beforeEachDefault(browser, context, page, logger);
		await use(new TearDown(framework, testInfo));
		return framework;
	},
	//#endregion

	//#region Page object models
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
	},
	textBoxPage: async ({ browser, context, page }, use, testInfo): Promise<Framework> => {
		logger = logging.getLogger(Format.getTestId(testInfo));
		framework = await Setup.beforeEachDefault(browser, context, page, logger);
		await use(new TextBoxPage(framework));
		return framework;
	}
	//#endregion
});
export default test;
export const expect = test.expect;
