import loginPage from '../pages/login-page'
import navbarPage from '../pages/navbar-page'
import { URLS, CREDENTIALS } from '../data/constants'
import { STANDARD_USER } from '../data/roles'

fixture `Login feature tests` 
    .page  `${URLS.LOGIN_URL}`;

test
    ('Valid user credentials during login', async t => {
        await t.useRole(STANDARD_USER)
        await navbarPage.settingsMenu()
        await t.expect(navbarPage.loggedUserEmail.innerText).eql(CREDENTIALS.USER.EMAIL)
    });

test
    .meta('type' , 'smoke')
    ('Invalid email during login', async t => {
        await loginPage.loginForm("", CREDENTIALS.USER.PASSWORD)
        await t.expect(loginPage.errorMessage.exists).ok()
    });

test
    ('Invalid password during login', async t => {
        await loginPage.loginForm(CREDENTIALS.USER.EMAIL, "")
        await t.expect(loginPage.errorMessage.exists).ok()
    });

test
    ('Empty email and password fields during login', async t => {
        await loginPage.loginForm("", "")
        await t.expect(loginPage.errorMessage.exists).ok()
    });