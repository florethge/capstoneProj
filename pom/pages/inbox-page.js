const { Selector, t } = require('testcafe');
class inbox{
    constructor(){ 
        this.addedTaskTitle = Selector('.task_list_item__content').find('.task_content')
        this.menuButton = Selector('#top_bar_inner').find('.top_bar_btn')
        this.inboxButton = Selector('.filter').withAttribute('data-track', 'navigation|inbox')
    }
    async openMenuToInbox(){
        await t
        .click(this.menuButton)
        .click(this.menuButton)
        .click(this.inboxButton)


    }
}
export default new inbox();