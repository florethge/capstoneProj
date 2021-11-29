const { Selector, t } = require('testcafe');
var randomstring = require("randomstring");

class addProject{
    constructor(){ 
        this.quickAddProject = Selector('button[type = "button"]').withAttribute('data-track' , 'navigation|projects_quick_add')
        this.projectName = Selector('#edit_project_modal_field_name')
        this.chooseColorMenu = Selector('button[type = "button"]').withAttribute('aria-labelledby' , 'edit_project_modal_field_color_label')
        this.projectColorLavander = Selector('.dropdown_select__options--new_style').withAttribute('data-value' , '44')
        this.addToFavorites = Selector('input[type = "checkbox"]').withAttribute('name', 'is_favorite')
        this.confirmationAddProjectButton = Selector('.ist_button_red').withAttribute('type' , 'submit')

    }

    async createProject(){
        let projectRandomString = randomstring.generate(4)
        await t
        .click(this.quickAddProject)
        .typeText(this.projectName, projectRandomString)
        .click(this.chooseColorMenu)
        .click(this.projectColorLavander)
        .click(this.addToFavorites)
        .click(this.confirmationAddProjectButton)
        .wait(5000)
        return projectRandomString
    }
}
export default new addProject();