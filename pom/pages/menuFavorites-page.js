const { Selector, t } = require('testcafe');

class menuFavorites{
    constructor(){
        this.favoriteProject = Selector('button[type = "button"]').withAttribute('data-track' , 'navigation|favorites_panel').parent().parent().find('li').withAttribute('data-type', 'project_list_item')
    }

    async findColor (element){
        return await element.find('svg.project_icon').getStyleProperty('color')
    }
}
export default new menuFavorites();