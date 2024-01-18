const { $ } = require('@wdio/globals')
const Page = require('./page');

class CreateAdmin extends Page {

    get administrator () { return $("span=Administrator");}
    get adduser () { return $("span=Add User");}

    get salutation () { return $("span=MRS");}

    get email () { return $ ('input[formcontrolname="Email"]');}
    get fn () { return $ ('input[formcontrolname="FirstName"]');}
    get ln () { return $ ('input[formcontrolname="LastName"]');}
    get done () { return $("span=Done");}


    async CreateAdmin (){

        await this.administrator.click();
        await this.adduser.click();
        await this.salutation.click();
        await browser.waitUntil(async () => {
            return (await this.email).isExisting();
        }, {timeout : 100000})

        await this.email.setValue('humaira.hossain@selisegroup.com');
        await this.fn.setValue('Humaira');
        await this.ln.setValue('Hossain');

        await this.done.click();

    }


}

export default new CreateAdmin();


