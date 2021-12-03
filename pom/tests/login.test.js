import loginPage from '../pages/login-page'
import navbarPage from '../pages/navbar-page'
import { URLS, CREDENTIALS } from '../data/constants'
import { STANDARD_USER } from '../data/roles'

fixture `Login feature tests` 
    .page  `${URLS.LOGIN_URL}`;

test
    ('As a user, i should be able to log in using valid credentials', async t => {
        await t.useRole(STANDARD_USER)
        await navbarPage.settingsMenu()
        await t.expect(navbarPage.loggedUserEmail.innerText).eql(CREDENTIALS.USER.EMAIL)
    });

test
    .meta('type' , 'smoke')
    ('As a user, i shouldn´t be able to log in using an invalid email during login', async t => {
        await loginPage.loginForm("", CREDENTIALS.USER.PASSWORD)
        await t.expect(loginPage.errorMessage.exists).ok()
    });

test
    ('As a user, i shouldn´t be able to login using an invalid password during login', async t => {
        await loginPage.loginForm(CREDENTIALS.USER.EMAIL, "")
        await t.expect(loginPage.errorMessage.exists).ok()
    });

test
    ('As a user, i shouldn´t be able to login without providing a valid email and password during login', async t => {
        await loginPage.loginForm("", "")
        await t.expect(loginPage.errorMessage.exists).ok()
    });