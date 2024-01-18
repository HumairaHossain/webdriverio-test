const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')
const projectcreate = require('../pageobjects/projectcreate')
const uploadfilepage = require('../pageobjects/uploadfile.page')

describe('My Login application', () => {
    /*it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('saiful.bhuiya@selisegroup.com', 'Moveit2023')
        //await expect(SecurePage.flashAlert).toBeExisting()
        //await expect(SecurePage.flashAlert).toHaveTextContaining(
           // 'You logged into a secure area!')
    })*/

    it('Image File Upload', async () => {
        await uploadfilepage.uploadFileHelper()    
        await browser.pause(10000);
    })    
})