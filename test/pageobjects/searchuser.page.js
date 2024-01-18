const { $ } = require('@wdio/globals')
const Page = require('./page');

class SearchUser extends Page {

    get teams_menu (){return $("span=Teams");}
    get search_bar (){ return $ ('input[formcontrolname="searchText"]');}


    async SearchUser (){
        await this.teams_menu.click();
        await browser.waitUntil(async () => {
            return (await this.search_bar).isExisting();
        }, {timeout : 100000})

        await this.search_bar.setValue('test');

    }

}
export default new SearchUser();