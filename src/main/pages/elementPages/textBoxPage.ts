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
        await this.framework.page.fill(fullName, formDetails.fullName)
        await this.framework.page.fill(email, formDetails.email)
        await this.framework.page.fill(currentAddress, formDetails.currentAddress)
        await this.framework.page.fill(permanentAddress, formDetails.permanentAddress)
        this.framework.logger.debug(`Filled in text box form with following details: ${JSON.stringify(formDetails)}`)
    }

    clickTextButtonSubmit = async (): Promise<void> => {
        await this.framework.page.click(submitButton)
        this.framework.logger.debug('Clicked submit button')
    }

    validateTextFormWindowExist = async (): Promise<void> => {
        await this.framework.page.isVisible(textFormResultWindow)
        this.framework.logger.info('Validated text form window exists')
    }
}

export interface TextBoxForm {
    fullName: string
    email: string
    currentAddress: string
    permanentAddress: string
}
