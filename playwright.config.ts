import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
	reporter: process.env.CI ? [['allure-playwright'], ['allure-playwright'], ['list'], ['junit', { outputFile: 'test-results/results.xml' }], ['json', { outputFile: 'test-results/results.json' }], ['html', { outputFolder: 'test-results/result', open: false }]] : [['list']],
	forbidOnly: !!process.env.CI,
	timeout: 30000,
	testDir: './src/tests',
	outputDir: './test-results',
	retries: process.env.CI ? 1 : 0,
	fullyParallel: true,
	use: {
		baseURL: 'https://demoqa.com',
		headless: true,
		launchOptions: {
			args: ['--disable-dev-shm-usage']
		},
		contextOptions: {
			acceptDownloads: true
		},
		viewport: { width: 1920, height: 1080 },
		video: 'retain-on-failure',
		trace: 'retain-on-failure',
		screenshot: 'only-on-failure'
	},
	projects: [
		{
			name: 'Chrome Stable',
			use: {
				browserName: 'chromium'
			}
		}
		// {
		//     name: 'Firefox',
		//     use: { browserName: 'firefox' },
		// },
		// {
		// 	name: 'WebKit',
		// 	use: { browserName: 'webkit' }
		// }
	]
};

export default config;
