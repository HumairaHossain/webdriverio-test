const { $ } = require('@wdio/globals')
const Page = require('./page');

class DownloadCSV extends Page {

    get device_menu () { return $("span=Devices"); }
    get download_csv () {return $("span=Download CSV");}


    async DownloadCSV (){
        await this.device_menu.click();
        await this.download_csv.click();

    }


}

export default new DownloadCSV();
