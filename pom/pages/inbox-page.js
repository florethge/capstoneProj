const { Selector, t } = require('testcafe');
var randomstring = require("randomstring");


class inbox{
    constructor(){ 
        this.addedTaskTitle = Selector('.task_list_item__content').find('.task_content')
        this.menuButton = Selector('#top_bar_inner').find('.top_bar_btn')
        this.inboxButton = Selector('.filter').withAttribute('data-track', 'navigation|inbox')
        this.taskContainer = Selector('.task_list_item')
        this.deleteTaskButton = Selector('.menu_item').withAttribute('data-action-hint' , 'task-overflow-menu-delete')
        this.confirmationDeleteButton = Selector('.ist_button_red').withAttribute('type' , 'submit')
        this.quickAddProject = Selector('button[type = "button"]').withAttribute('data-track' , 'navigation|projects_quick_add')
       
    }
    async openMenuToInbox(){
        await t
        .click(this.menuButton)
        .click(this.menuButton)
        .click(this.inboxButton)
    }
    async selectAndDeleteAllTasks(){
        let allTasks = await this.taskContainer.count
        for (let index = 0; index < allTasks; index++) {
            await t
            .rightClick(this.taskContainer.nth(0))
            .click(this.deleteTaskButton)
            .click(this.confirmationDeleteButton)
        }
        await t.wait(5000)
    }
   
}
export default new inbox();