import { Framework } from '../test-setup'

export const navigateTo = async (framework: Framework, url: string): Promise<void> => {
    await framework.page.goto(url)
}

export const getCurrentUrl = async (framework: Framework): Promise<string> => {
    return framework.page.url()
}

export const refreshPage = async (framework: Framework): Promise<void> => {
    await framework.page.reload()
}
