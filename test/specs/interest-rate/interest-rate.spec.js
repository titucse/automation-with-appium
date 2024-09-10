const { expect } = require('@wdio/globals');
const InterestRatePage = require('./interest-rate.po');

describe('Interest Rate Test', () => {
    it('1. Verify unsuccessfull Interest Rate Test', async () => {
        //I am in interest rate
        await InterestRatePage.navigatetointrestrate();
    });
    
    it('2. Verify successfull Interest Rate Test', async () => {
        //Navigate back to interest rate
        await InterestRatePage.navigateback();
        //sucessfull interest rate
        await InterestRatePage.sucessfullintrestrate();
    });
});
