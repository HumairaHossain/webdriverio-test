const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')
const searchuser = require('../pageobjects/searchuser.page')

describe('My Login application', () => {
    /*it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('saiful.bhuiya@selisegroup.com', 'Moveit2023')
    })*/ 
    
    it('Search user from teams table', async () => {
        await searchuser.SearchUser();
        await browser.pause(10000);

    })

})