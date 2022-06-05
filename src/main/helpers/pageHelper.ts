import { Framework } from 'src/main/test-setup';

export const navigateTo = async (framework: Framework, url: string) => {
	await framework.page.goto(url);
};

export const getCurrentUrl = async (framework: Framework): Promise<string> => {
	return framework.page.url();
};

export const refreshPage = async (framework: Framework) => {
	await framework.page.reload();
};
