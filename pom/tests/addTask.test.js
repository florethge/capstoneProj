import addTasks from '../pages/task-page'
import { URLS } from '../data/constants'
import inbox from '../pages/inbox-page'
import { STANDARD_USER } from '../data/roles'
import date from '../pages/date-page';

fixture `Add new task` 
    .page  `${URLS.LOGIN_URL}`;

test
    .meta('type', 'smoke')
    ('As a user, i should be able to add a new task to be scheduled for Tomorrow', async t => {
        await t.useRole(STANDARD_USER)
        let randomStrings = addTasks.generateRandomString(1)
        await inbox.openMenuToInbox()
        await addTasks.addTaskFlow(randomStrings[0] , "es un test")

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
        //console.log(randomStrings)
        await t.expect(randomStrings.length).eql(1)

})
.after( async t => {
    await inbox.selectAndDeleteAllTasks()
});

test
    ('As a user, i should be able to add a new task and schedule it for today', async t => {
        await t.useRole(STANDARD_USER)
        let randomStrings = addTasks.generateRandomString(1)
        await inbox.openMenuToInbox()
        await addTasks.addMultipleTaskFlow(randomStrings[0] , "es un test")
        await t.wait(5000)
        await date.openMenuToToday()
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
        await t.expect(count).eql(1)

});

test
    ('As a user, i should be able to add 10 new tasks and schedule them for today', async t => {
        await t.useRole(STANDARD_USER)
        let randomStrings = addTasks.generateRandomString(10)
        await inbox.openMenuToInbox()
        for (let index = 0; index < 10; index++) {
            await addTasks.addMultipleTaskFlow(randomStrings[index] , "es un test")
        }
        await t.wait(7000)
        await date.openMenuToToday()
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