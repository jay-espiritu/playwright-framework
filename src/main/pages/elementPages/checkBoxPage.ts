import { Framework } from '../../test-setup'
import { expect } from '../basePages'

const expandButton = "[aria-label='Expand all']"
const collapseButton = "[aria-label='Collapse all']"
const dropdownListDiv = '.check-box-tree-wrapper'
const checkBoxPageHeader = '.playgound-header'

export class CheckBoxPage {
    readonly framework: Framework

    constructor(framework: Framework) {
        this.framework = framework
    }

    selectCheckboxOption = async (optionNames: string[]): Promise<void> => {
        for (let index = 0; index < optionNames.length; index++) {
            await this.framework.page.click(`text=${optionNames[index]}`)
        }
        this.framework.logger.debug(`Selected the following checkbox options: ${optionNames}`)
    }

    expandDropdownList = async (): Promise<void> => {
        await this.framework.page.click(expandButton)
        await this.framework.page.click(checkBoxPageHeader)
        this.framework.logger.debug('Expanded dropdown list')
    }

    collapseDropdownList = async (): Promise<void> => {
        await this.framework.page.click(collapseButton)
        await this.framework.page.click(checkBoxPageHeader)
    }

    validateCheckboxScreenshot = async (screenshotName: string): Promise<void> => {
        const element = await this.framework.page.$(dropdownListDiv)
        const elementImage = await element?.screenshot()
        expect.soft(elementImage).toMatchSnapshot(`${screenshotName}.png`)
        this.framework.logger.info('Successfully validated checkbox screeshot')
    }
}
