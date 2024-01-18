const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')
const createadmin = require('../pageobjects/createadmin')

describe('My Login application', () => {
    /*it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('saiful.bhuiya@selisegroup.com', 'Moveit2023')
    })*/ 
    
    it('Admin Creation', async () => {
        await createadmin.CreateAdmin();
        await browser.pause(10000);

    })

})