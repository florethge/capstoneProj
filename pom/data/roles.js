import { Role } from 'testcafe'
import loginPage from '../pages/login-page'
import { URLS , CREDENTIALS } from '../data/constants'

export const STANDARD_USER = Role(URLS.LOGIN_URL, async() => {
    await loginPage.loginForm(CREDENTIALS.USER.EMAIL, CREDENTIALS.USER.PASSWORD)
}, {preserveUrl: true})