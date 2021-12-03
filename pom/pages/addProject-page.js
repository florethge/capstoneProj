const { Selector, t } = require('testcafe');
var randomstring = require("randomstring");

class addProject{
    constructor(){ 
        this.quickAddProject = Selector('button[type = "button"]').withAttribute('data-track' , 'navigation|projects_quick_add')
        this.projectName = Selector('#edit_project_modal_field_name')
        this.chooseColorMenu = Selector('button[type = "button"]').withAttribute('aria-labelledby' , 'edit_project_modal_field_color_label')
        this.projectColorLavander = Selector('li[role = "option"]').withAttribute('data-value' , '44')
        this.addToFavorites = Selector('input[type = "checkbox"]').withAttribute('name', 'is_favorite')
        this.confirmationAddProjectButton = Selector('.ist_button_red').withAttribute('type' , 'submit')

    }

    async createProject(){
        let projectRandomString = randomstring.generate(4)
        await t
        .click(this.quickAddProject)
        .typeText(this.projectName, projectRandomString)
        .click(this.chooseColorMenu)
        let selectedProjectColor = await this.projectColorLavander.find('.color_dropdown_select__color').getStyleProperty('background-color')
        await t 
        .click(this.projectColorLavander)
        .click(this.addToFavorites)
        .click(this.confirmationAddProjectButton)
        .wait(5000)

        return [projectRandomString, selectedProjectColor]
    }


}
export default new addProject();