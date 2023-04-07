import { TestInfo } from '@playwright/test';
import { Framework } from '@main/test-setup';
import fs from 'fs';

export class TearDown {
	readonly framework: Framework;
	readonly testInfo: TestInfo;
	constructor(framework: Framework, testInfo: TestInfo) {
		this.framework = framework;
		this.testInfo = testInfo;
	}

	afterEachDefault = async (): Promise<void> => {
		const info = this.testInfo;
		await this.framework.context.close();
		const videoPath = (await this.framework.page.video()?.path()) ?? '';
		fs.renameSync(videoPath, `test-results/${info.title}.webm`);
		this.framework.logger.info(`Title: ${info.title} | Result: ${info.status}`);
	};
}
