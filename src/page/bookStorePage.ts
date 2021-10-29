import { Framework } from '../test-setup/index';
 
export class BookStorePage {
	readonly framework: Framework;

	constructor(framework: Framework) {
		this.framework = framework;
	}
}