const {Selector, t} = require("testcafe");

class loginPage {

    constructor (){
        this.emailInput = Selector('#email')
        this.password = Selector('#password')
        this.loginButton = Selector('#login_form').find('button')
        this.errorMessage = Selector('.error_msg')
    }

    async loginForm (email, password) {
        if (email != ""){
            await t.typeText(this.emailInput, email)
        }
        if (password != ""){
            await t.typeText(this.password, password)
        }
        await t.click(this.loginButton)

    }
}


export default new loginPage(); 