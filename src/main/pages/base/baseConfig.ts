import { ElementHelper, PageHelper } from '@main/helpers';
import { Framework } from '@main/test-setup';
import { Screenshot } from '@utils/screenshot';

export class BaseConfig {
	protected elementHelper: ElementHelper = new ElementHelper(this.framework);
	protected pageHelper: PageHelper = new PageHelper(this.framework);
	protected screenshot: Screenshot = new Screenshot(this.framework);
	constructor(protected framework: Framework) {}
}
