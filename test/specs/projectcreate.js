const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')
const projectcreate = require('../pageobjects/projectcreate')


describe('My Login application', () => {
    /*it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('saiful.bhuiya@selisegroup.com', 'Moveit2023')
        //await expect(SecurePage.flashAlert).toBeExisting()
        //await expect(SecurePage.flashAlert).toHaveTextContaining(
           // 'You logged into a secure area!')
    })*/

    it ('Project Creation', async() => {
        await projectcreate.ProjectCreate()
        await expect (await projectcreate.create_proj).toHaveText("Project Created Successfully")
        await projectcreate.create_proj.click();
    })

})