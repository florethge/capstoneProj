const { Selector, t } = require('testcafe');

class date{
    constructor(){ 
       this.todayButton = Selector('#filter_today')
       this.menuButton = Selector('#top_bar_inner').find('.top_bar_btn')
       

    }
    async openMenuToToday(){
        await t
        .click(this.menuButton)
        .click(this.menuButton)
        .click(this.todayButton)
    }
   
   
}
export default new date();