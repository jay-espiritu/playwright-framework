import { Framework } from '@main/test-setup';
import { Locator } from '@playwright/test';

export const findLocator = (framework: Framework, locator: string): Locator => {
	return framework.page.locator(locator);
};

export const click = async (framework: Framework, locator: string): Promise<void> => {
	await findLocator(framework, locator).click();
	framework.logger.trace(`Clicked element | Element: ${locator}`);
};

export const doubleClick = async (framework: Framework, locator: string): Promise<void> => {
	await findLocator(framework, locator).dblclick();
	framework.logger.trace(`Double clicked element | Element: ${locator}`);
};

export const enterText = async (framework: Framework, locator: string, text: string): Promise<void> => {
	await clearText(framework, locator);
	await findLocator(framework, locator).fill(text);
	framework.logger.trace(`Filled in text field | Element: ${locator}`);
};

export const clearText = async (framework: Framework, locator: string): Promise<void> => {
	await framework.page.focus(locator);
	await framework.page.keyboard.down('Control');
	await pressKeyboardKey(framework, 'A');
	await framework.page.keyboard.up('Control');
	await pressKeyboardKey(framework, 'Backspace');
	framework.logger.trace(`Cleared text field content | Element: ${locator}`);
};

export const check = async (framework: Framework, locator: string): Promise<void> => {
	await findLocator(framework, locator).check();
	framework.logger.trace(`Checked element | Element: ${locator}`);
};

export const pressKeyboardKey = async (framework: Framework, key: string): Promise<void> => {
	await framework.page.keyboard.press(key);
	framework.logger.trace(`Pressed keyboard key | Key: ${key}`);
};

export const waitForSelectorToBeVisible = async (framework: Framework, locator: Locator, timeout: number = 30000): Promise<void> => {
	await locator.waitFor({
		state: 'visible',
		timeout: timeout
	});
	framework.logger.trace(`Waited for selector to be visible`);
};

export const waitForSelectorToBeHidden = async (framework: Framework, locator: Locator, timeout: number = 30000): Promise<void> => {
	await locator.waitFor({
		state: 'hidden',
		timeout: timeout
	});
	framework.logger.trace(`Waited for selector to be hidden`);
};
