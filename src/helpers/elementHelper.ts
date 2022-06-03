import { Framework } from '../test-setup'

export const findLocator = (framework: Framework, locator: string) => {
    return framework.page.locator(locator)
}

export const click = async (framework: Framework, locator: string) => {
    await findLocator(framework, locator).click()
}

export const doubleClick = async (framework: Framework, locator: string) => {
    await findLocator(framework, locator).dblclick()
}

export const enterText = async (framework: Framework, locator: string, text: string) => {
    await clearText(framework, locator)
    await findLocator(framework, locator).fill(text)
}

export const clearText = async (framework: Framework, locator: string) => {
    await framework.page.focus(locator)
    await framework.page.keyboard.down('Control')
    await pressKeyboardKey(framework, 'A')
    await framework.page.keyboard.up('Control')
    await pressKeyboardKey(framework, 'Backspace')
}

export const pressKeyboardKey = async (framework: Framework, key: string) => {
    await framework.page.keyboard.press(key)
}

export const waitForSelectorToBeVisible = async (framework: Framework, locator: any, timeout: number = 30000) => {
    await framework.page.waitForSelector(locator, {
        state: 'visible',
        timeout: timeout,
    })
}

export const waitForSelectorToBeHidden = async (framework: Framework, locator: any, timeout: number = 30000) => {
    await framework.page.waitForSelector(locator, {
        state: 'hidden',
        timeout: timeout,
    })
}
