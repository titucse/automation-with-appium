const { expect } = require('@wdio/globals');
const CustomerProfilePage = require('./customer-profile.po');

describe('Customer Profile Test', () => {

    it('1. Verify unsuccessfull Customer Profile Test', async () => {
        //I am in customer profile
        await CustomerProfilePage.navigateToCustomerProfilePage();
    });
    it('2. Verify sucessfull Customer Profile Test', async () => {
        //Navigate back to customer profile
        await CustomerProfilePage.navigateback();
        //sucessfull customer profile test
        await CustomerProfilePage.sucessfullCustomerProfile();
    });

});
