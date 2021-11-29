import { URLS } from '../data/constants'
import { STANDARD_USER } from '../data/roles'
import menuFavorites from '../pages/menuFavorites-page'
import addProject from '../pages/addProject-page'

fixture `Add new project` 
    .page  `${URLS.LOGIN_URL}`;

test
    ('Add a new project and add to favorites', async t => {
        await t.useRole(STANDARD_USER)
        let nameOfAddedProject = await addProject.createProject()
        let projects = await menuFavorites.favoriteProject.count
        let count = 0
        for (let index = 0; index < projects; index++) {
            if (await menuFavorites.favoriteProject.nth(index).innerText == nameOfAddedProject){
                count ++
                //console.log(nameOfAddedProject)
                //console.log(await menuFavorites.favoriteProject.nth(index).innerText)
            }
        }
        await t.expect(count).eql(1)

});