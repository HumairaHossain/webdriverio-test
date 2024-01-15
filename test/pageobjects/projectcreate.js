const { $ } = require('@wdio/globals')
const Page = require('./page');

class ProjectCreate extends Page {

    get generate_project () { return $("span=Projects");}

    get add_project () {return $("span=Add New Project");}

    get movement_type () {return $("span=Lab Movement");}

    get input_name () {return $('input[formcontrolname="ProjectName"]');}

    get input_address () {return $('input[formcontrolname="Address"]');}

    get input_client () {return $('input[formcontrolname="ClientName"]');}

    get create_proj () {return $("span=Save");}



    async ProjectCreate (){

        await this.generate_project.click();
        await browser.waitUntil(async () => {
            return (await this.input_name).isExisting();
        }, {timeout : 100000})

        await this.input_name.setValue('Dummy Test');
        await this.input_address.setValue('MIDAS Center, Road No 16, Dhaka, Bangladesch');
        await this.input_client.setValue('Humaira');

        await this.create_proj.click();


}
    }

export default new ProjectCreate ();