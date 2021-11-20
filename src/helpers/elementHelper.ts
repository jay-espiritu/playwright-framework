import { Framework } from '../test-setup'

export const click = async (framework: Framework, locator: string): Promise<void> => {
    await framework.page.click(locator)
}

export const doubleClick = async (framework: Framework, locator: string): Promise<void> => {
    await framework.page.dblclick(locator)
}

export const enterText = async (framework: Framework, locator: string, text: string): Promise<void> => {
    await clearText(framework, locator)
    await framework.page.type(locator, text)
}

export const clearText = async (framework: Framework, locator: string): Promise<void> => {
    await framework.page.focus(locator)
    await framework.page.keyboard.down('Control')
    await pressKeyboardKey(framework, 'A')
    await framework.page.keyboard.up('Control')
    await pressKeyboardKey(framework, 'Backspace')
}

export const pressKeyboardKey = async (framework: Framework, key: string): Promise<void> => {
    await framework.page.keyboard.press(key)
}

export const waitForSelectorToBeVisible = async (framework: Framework, locator: any, timeout: number = 30000): Promise<void> => {
    await framework.page.waitForSelector(locator, {
        state: 'visible',
        timeout: timeout,
    })
}

export const waitForSelectorToBeHidden = async (framework: Framework, locator: any, timeout: number = 30000): Promise<void> => {
    await framework.page.waitForSelector(locator, {
        state: 'hidden',
        timeout: timeout,
    })
}

export const getElementProperty = async (framework: Framework, locator: any, property: string): Promise<any> => {
    const elementHandle = await framework.page.$(locator)

    if (elementHandle == null) throw new Error(`No element found with using '${locator}'`)

    const propertyHandle = await elementHandle.getProperty(property)
    return propertyHandle.jsonValue()
}
