import { Framework } from '../test-setup/index'

export class WidgetsPage {
    readonly framework: Framework

    constructor(framework: Framework) {
        this.framework = framework
    }
}
