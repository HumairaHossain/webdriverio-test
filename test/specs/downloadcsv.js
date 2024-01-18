const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')
const downloadcsv = require('../pageobjects/downloadcsv.page')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('saiful.bhuiya@selisegroup.com', 'Moveit2023')
    }) 
    
    it('Download CSV from Device table', async () => {
        await downloadcsv.DownloadCSV();
        await browser.pause(10000);

    })

})