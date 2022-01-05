import { PlaywrightTestConfig, devices } from '@playwright/test'

const config: PlaywrightTestConfig = {
    reporter: [['allure-playwright'], ['allure-playwright'], ['list'], ['junit', { outputFile: 'test-results/results.xml' }], ['json', { outputFile: 'test-results/results.json' }], ['html', { outputFolder: 'test-results/result' }]],
    forbidOnly: !!process.env.CI,
    timeout: 30000,
    testDir: './src/tests',
    outputDir: './test-results',
    retries: 1,
    use: {
        baseURL: 'https://demoqa.com',
        launchOptions: {
            args: ['--disable-dev-shm-usage'],
        },
        contextOptions: {
            acceptDownloads: true,
        },
        headless: true,
        viewport: { width: 1920, height: 1080 },
        video: 'on-first-retry',
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
    },
    projects: [
        // {
        //     name: 'Chrome Stable',
        //     use: {
        //         browserName: 'chromium',
        //     },
        // },
        {
            name: 'Firefox',
            use: { browserName: 'firefox' },
        },
        // {
        // 	name: 'WebKit',
        // 	use: { browserName: 'webkit' }
        // }
    ],
}

export default config
