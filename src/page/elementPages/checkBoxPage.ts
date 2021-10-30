import { Framework } from '../../test-setup/index'
import { expect } from '../basePages'

const expandButton = "[aria-label='Expand all']"
const collapseButton = "[aria-label='Collapse all']"
const dropdownListDiv = '.check-box-tree-wrapper'
const checkBoxPageHeader = ".playgound-header"

export class CheckBoxPage {
    readonly framework: Framework

    constructor(framework: Framework) {
        this.framework = framework
    }

    selectCheckboxOption = async (optionNames: string[]): Promise<void> => {
        for (let index = 0; index < optionNames.length; index++) {
            await this.framework.page.click(`text=${optionNames[index]}`)
        }
    }

    expandDropdownList = async (): Promise<void> => {
        await this.framework.page.click(expandButton)
        await this.framework.page.click(checkBoxPageHeader)
    }

    collapseDropdownList = async (): Promise<void> => {
        await this.framework.page.click(collapseButton)
                await this.framework.page.click(checkBoxPageHeader)
    }

    validateCheckboxScreenshot = async (screenshotName: string): Promise<void> => {
        const element = await this.framework.page.$(dropdownListDiv)
        const elementImage = await element?.screenshot()
        expect(elementImage).toMatchSnapshot(`${screenshotName}.png`)
    }
}
