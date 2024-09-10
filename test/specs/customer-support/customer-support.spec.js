const { expect } = require('@wdio/globals');
const CustomerSupportPage = require('./customer-support.po');

describe('Customer Support Test', () => {
      
    it('1. Verify unsuccessful Customer Support Test', async () => {
    //need to navigate to customer support page
    await CustomerSupportPage.navigateToCustomerSupportPage();
    });
    it('2. Verify successful Customer Support Test', async () => {
    //need to navigate to customer support page
    await CustomerSupportPage.navigateback();
    //sucessfull test
    await CustomerSupportPage.customerSupport();
    //verify customer support
    await CustomerSupportPage.verifyCustomerSupport();
    });
});
