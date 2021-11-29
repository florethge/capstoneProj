import addTasks from '../pages/task-page'
import { URLS } from '../data/constants'
import inbox from '../pages/inbox-page'
import { STANDARD_USER } from '../data/roles'

fixture `Add new task` 
    .page  `${URLS.LOGIN_URL}`;

test
    .meta('type', 'smoke')
    ('Add a new task for Tomorrow', async t => {
        await t.useRole(STANDARD_USER)
        let randomStrings = addTasks.generateRandomString(1)
        await addTasks.addTaskFlow(randomStrings[0] , "es un test")
        await inbox.openMenuToInbox()
        let tasks = await inbox.addedTaskTitle.count
        //console.log(randomStrings)
        for (let index = 0; index < tasks; index++) {
            let currentTaskTitle = await inbox.addedTaskTitle.nth(index).innerText
            if (randomStrings.indexOf(currentTaskTitle) != -1){
                randomStrings.pop(randomStrings.indexOf(currentTaskTitle))
            }
        }
        //console.log(randomStrings)
        await t.expect(randomStrings.length).eql(0)

})
.after( async t => {
    await inbox.selectAndDeleteAllTasks()
});

test
    ('Add 10 new tasks for Today', async t => {
        await t.useRole(STANDARD_USER)
        let randomStrings = addTasks.generateRandomString(10)
        await inbox.openMenuToInbox()
        for (let index = 0; index < 10; index++) {
            await addTasks.addMultipleTaskFlow(randomStrings[index] , "es un test")
        }
        await t.wait(5000)
        let tasks = await inbox.addedTaskTitle.count
        //console.log(randomStrings)
        let count = 0
        for (let index = 0; index < tasks; index++) {
            let currentTaskTitle = await inbox.addedTaskTitle.nth(index).innerText
            //console.log(currentTaskTitle)
            if (randomStrings.includes(currentTaskTitle)){
                count ++
            }
        }
        await t.expect(count).eql(10)

})
.after( async t => {
    await inbox.selectAndDeleteAllTasks()
});