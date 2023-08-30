import { TestInfo } from '@playwright/test';

export const getTestId = (testInfo: TestInfo): string => {
	const firstWord = testInfo.title.split(' ')[0];
	return firstWord.replace(':', '').replace(' ', '');
};
