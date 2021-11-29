import addTasks from '../pages/task-page'
import { URLS } from '../data/constants'
import { CREDENTIALS } from '../data/constants'
import loginPage from '../pages/login-page'
import inbox from '../pages/inbox-page'

fixture `Add new task` 
    .page  `${URLS.LOGIN_URL}`;
    
test.skip
    ('Add a new task for Tomorrow', async t => {
        await loginPage.loginForm(CREDENTIALS.USER.EMAIL, CREDENTIALS.USER.PASSWORD)
        let randomStrings = addTasks.generateRandomString(1)
        await addTasks.addTaskFlow(randomStrings[0] , "es un test")
        await inbox.openMenuToInbox()
        let tasks = await inbox.addedTaskTitle.count
        console.log(randomStrings)
        for (let index = 0; index < tasks; index++) {
            let currentTaskTitle = await inbox.addedTaskTitle.nth(index).innerText
            if (randomStrings.indexOf(currentTaskTitle) != -1){
                randomStrings.pop(randomStrings.indexOf(currentTaskTitle))
            }
        }
        console.log(randomStrings)
        await t.expect(randomStrings.length).eql(0)

});

test
    ('Add 10 new tasks for Today', async t => {
        await loginPage.loginForm(CREDENTIALS.USER.EMAIL, CREDENTIALS.USER.PASSWORD)
        let randomStrings = addTasks.generateRandomString(10)
        for (let index = 0; index < 20; index++) {
            await addTasks.addTaskFlow(randomStrings[index] , "es un test")
        }
        await inbox.openMenuToInbox()
        let tasks = await inbox.addedTaskTitle.count
        console.log(randomStrings)
        for (let index = 0; index < tasks; index++) {
            let currentTaskTitle = await inbox.addedTaskTitle.nth(index).innerText
            if (randomStrings.indexOf(currentTaskTitle) != -1){
                randomStrings.pop(randomStrings.indexOf(currentTaskTitle))
            }
        }
        console.log(randomStrings)
        await t.expect(randomStrings.length).eql(0)

});