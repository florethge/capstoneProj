const { Selector, t } = require('testcafe');

class menuFavorites{
    constructor(){
        this.favoriteProject = Selector('button[type = "button"]').withAttribute('data-track' , 'navigation|favorites_panel').parent().parent().find('li').withAttribute('data-type', 'project_list_item')
    }

}
export default new menuFavorites();