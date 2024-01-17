const { $ } = require('@wdio/globals')
const Page = require('./page');
import path from 'path';
import { fileURLToPath } from 'url';

class uploadFile extends Page {
    get generate_project () { return $("span=Projects");}

    get add_project () {return $("span=Add New Project");}

    get image_up () {return $("span= Upload or Drag and Drop Files Here (PDF only)");}

    async uploadFile(url, upload_file_element) {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        const filePath = path.join(__dirname, url);

        await browser.execute(async (e) => {
            e.style.display = 'block';
            e.classList.remove("display-none");
          }, upload_file_element);   

        await upload_file_element.waitForExist();
        console.log(filePath);
        await upload_file_element.waitForClickable({timeout: 20000});
        await upload_file_element.setValue(filePath);
    }
    
    async uploadFileHelper () {
        await this.generate_project.click();
        await this.add_project.click();
        await this.uploadFile("..image/data/1600px_COLOURBOX37304116.jpg", await this.image_up);
    }

    async uploadFile2(url, locator) {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(moveit.hub.png);
        const filePath = path.join(files, 'D:\webdriverio\webdriverio-test\test\image\data');
    
    
        const upload_file_element = await locator;
        await upload_file_element.scrollIntoView({ block: 'end' });
        await browser.execute(async (e) => {
          e.style.display = 'block';
        }, upload_file_element);
    
        await upload_file_element.waitForDisplayed();
        await upload_file_element.setValue(filePath);
      }    
}
export default new fileUpload();