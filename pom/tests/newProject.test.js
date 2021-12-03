import { URLS } from '../data/constants'
import { STANDARD_USER } from '../data/roles'
import menuFavorites from '../pages/menuFavorites-page'
import addProject from '../pages/addProject-page'

fixture `Add a new project` 
    .page  `${URLS.LOGIN_URL}`;

test
    ('As a user, i should be able to add a new project and add it to favorites', async t => {
        await t.useRole(STANDARD_USER)
        let colorAndNameOfProject = await addProject.createProject()
        let nameOfAddedProject = colorAndNameOfProject[0]
        let colorOfAddedProject = colorAndNameOfProject[1]
        let projects = await menuFavorites.favoriteProject.count
        let count = 0
        for (let index = 0; index < projects; index++) {
            if (await menuFavorites.favoriteProject.nth(index).innerText == nameOfAddedProject){
                count ++
                var selectedColor = await menuFavorites.findColor(menuFavorites.favoriteProject.nth(index))
                //console.log(selectedColor)
                //console.log(nameOfAddedProject)
                //console.log(await menuFavorites.favoriteProject.nth(index).innerText)
            }
        }
        await t.expect(count).eql(1)
        await t.expect(selectedColor).eql(colorOfAddedProject)

});