import { TestInfo } from '@playwright/test';
import { Framework } from '@main/test-setup';
var fs = require('fs');

export const afterEachDefault = async (framework: Framework, info: TestInfo): Promise<void> => {
	await framework.context.close();
	const videoPath = await framework.page.video()?.path();
	fs.renameSync(videoPath, `test-results/${info.title}.webm`);
	framework.logger.info(`Title: ${info.title} | Result: ${info.status}`);
};
