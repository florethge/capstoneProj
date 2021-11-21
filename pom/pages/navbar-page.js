const { Selector, t } = require('testcafe');
class navbarPage{
    constructor(){
        this.settingsButton = Selector('.settings_btn')
        this.loggedUserEmail = Selector('.user_menu_email')
    }

    async settingsMenu (){
        await t
            .click(this.settingsButton)
    }
}
export default new navbarPage();