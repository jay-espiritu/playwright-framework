import { Framework } from '@main/test-setup';
import { Locator } from '@playwright/test';

export class ElementHelper {
	readonly framework: Framework;

	constructor(framework: Framework) {
		this.framework = framework;
	}

	findLocator = (locator: string): Locator => {
		return this.framework.page.locator(locator);
	};

	click = async (locator: string): Promise<void> => {
		await this.findLocator(locator).click();
		this.framework.logger.trace(`Clicked element | Element: ${locator}`);
	};

	doubleClick = async (locator: string): Promise<void> => {
		await this.findLocator(locator).dblclick();
		this.framework.logger.trace(`Double clicked element | Element: ${locator}`);
	};

	enterText = async (locator: string, text: string): Promise<void> => {
		await this.clearText(locator);
		await this.findLocator(locator).fill(text);
		this.framework.logger.trace(`Filled in text field | Element: ${locator}`);
	};

	clearText = async (locator: string): Promise<void> => {
		await this.framework.page.focus(locator);
		await this.framework.page.keyboard.down('Control');
		await this.pressKeyboardKey('A');
		await this.framework.page.keyboard.up('Control');
		await this.pressKeyboardKey('Backspace');
		this.framework.logger.trace(`Cleared text field content | Element: ${locator}`);
	};

	check = async (locator: string): Promise<void> => {
		await this.findLocator(locator).check();
		this.framework.logger.trace(`Checked element | Element: ${locator}`);
	};

	pressKeyboardKey = async (key: string): Promise<void> => {
		await this.framework.page.keyboard.press(key);
		this.framework.logger.trace(`Pressed keyboard key | Key: ${key}`);
	};

	waitForSelectorToBeVisible = async (locator: Locator, timeout = 30000): Promise<void> => {
		await locator.waitFor({
			state: 'visible',
			timeout: timeout
		});
		this.framework.logger.trace(`Waited for selector to be visible`);
	};

	waitForSelectorToBeHidden = async (locator: Locator, timeout = 30000): Promise<void> => {
		await locator.waitFor({
			state: 'hidden',
			timeout: timeout
		});
		this.framework.logger.trace(`Waited for selector to be hidden`);
	};
}
