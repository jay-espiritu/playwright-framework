import { TestInfo } from '@playwright/test';
import { Framework } from '@main/test-setup';
import fs from 'fs';
import { BaseConfig } from '@main/pages/base/baseConfig';

export class TearDown extends BaseConfig {
	testInfo: TestInfo;
	constructor(framework: Framework, testInfo: TestInfo) {
		super(framework);
		this.testInfo = testInfo;
	}

	afterEachDefault = async (): Promise<void> => {
		// const info = this.testInfo;
		// await this.framework.context.close();
		// const videoPath = (await this.framework.page.video()?.path()) ?? '';
		// const oldResultPath = videoPath.split('/').slice(0, -1).join('/');
		// const newResultPath = videoPath.split('/').slice(0, -2).join('/') + `/${info.title}`;
		// fs.renameSync(oldResultPath, newResultPath);
		// this.framework.logger.info(`Title: ${info.title} | Result: ${info.status}`);
	};
}
