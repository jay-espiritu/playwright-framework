import { TestInfo } from '@playwright/test'

export const getTestId = (testInfo: TestInfo): string => {
    const fullName = testInfo.title
    if (fullName === undefined) throw Error(`Test title does not exist`)

    const firstWord = fullName.split(' ')[0]
    return firstWord.replace(':', '').replace(' ', '')
}
