import { ElementHelper } from '../../helpers'
import { Framework } from '../../test-setup'

const fullName = '#userName'
const email = '#userEmail'
const currentAddress = '#currentAddress'
const permanentAddress = '#permanentAddress'
const submitButton = 'text=Submit'
const textFormResultWindow = '.border.col-md-12.col-sm-12'

export class TextBoxPage {
    readonly framework: Framework

    constructor(framework: Framework) {
        this.framework = framework
    }

    fillTextBoxForm = async (formDetails: TextBoxForm): Promise<void> => {
        await ElementHelper.enterText(this.framework, fullName, formDetails.fullName)
        await ElementHelper.enterText(this.framework, email, formDetails.email)
        await ElementHelper.enterText(this.framework, currentAddress, formDetails.currentAddress)
        await ElementHelper.enterText(this.framework, permanentAddress, formDetails.permanentAddress)
        this.framework.logger.info(`Filled in text box form with following details: ${JSON.stringify(formDetails)}`)
    }

    clickTextButtonSubmit = async (): Promise<void> => {
        await ElementHelper.click(this.framework, submitButton)
        this.framework.logger.debug('Clicked submit button')
    }

    validateTextFormWindowExist = async (): Promise<void> => {
        const locator = ElementHelper.findLocator(this.framework, textFormResultWindow)
        await locator.isVisible()
        this.framework.logger.info('Validated text form window exists')
    }
}

export interface TextBoxForm {
    fullName: string
    email: string
    currentAddress: string
    permanentAddress: string
}
