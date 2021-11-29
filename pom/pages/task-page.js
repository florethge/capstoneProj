const { Selector, t } = require('testcafe');
var randomstring = require("randomstring");

class addTasks{
    constructor(){ 
        this.addTaskButton = Selector('.plus_add_button')
        this.taskTitle = Selector('.public-DraftEditor-content')
        this.taskDescription = Selector('.task_editor__description_field')
        this.programTaskButton = Selector('.item_due_selector')
        this.tomorrowButton = Selector('.scheduler-suggestions-item').withAttribute('data-action-hint', 'scheduler-suggestion-tomorrow')
        this.submitTaskButton = Selector('button').withAttribute('type', 'submit')
        this.todayButton = Selector('button').withAttribute('data-track', 'scheduler|date_shortcut_today')
        
    }

    async addTaskFlow(title, description){
        await t
        .click(this.addTaskButton)
        .typeText(this.taskTitle, title)
        .typeText(this.taskDescription, description)
        .click(this.programTaskButton)
        .click(this.tomorrowButton)
        .click(this.submitTaskButton)
        .wait(5000)
    }

    async addMultipleTaskFlow(title, description){
        if (await this.addTaskButton.exists){
            await t.click(this.addTaskButton)
        }
        await t
        .typeText(this.taskTitle, title)
        .typeText(this.taskDescription, description)
        .click(this.programTaskButton)
        .click(this.todayButton)
        .click(this.submitTaskButton)
    }

    generateRandomString(numberStrings) {
        let randomStrings = Array(numberStrings)
        for (let index = 0; index < numberStrings; index++) {
            randomStrings[index] = randomstring.generate(4);
        }
        return randomStrings
    }
}
export default new addTasks();