import { Framework } from '../test-setup/index';
 
export class ElementsPage {
	readonly framework: Framework;

	constructor(framework: Framework) {
		this.framework = framework;
	}
}