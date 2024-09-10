const { expect } = require('@wdio/globals');
const { remote } = require('webdriverio');
const IntraFTtest = require('./ft-intra.po');


describe('Intra FT Test', () => {

    it('1. Verify Transfer to Own Account screen navigation ', async () => {
        //Complete pre-processing
        await IntraFTtest.intraFTPreprocess();
        //OTP verification
        await IntraFTtest.otpVerification();
        //Success screen navigation
        await IntraFTtest.successScreen();
    });

    it('2. Unsuccessful fund transfer due to amount exceeding current balance', async () => {
        // unsuccessful transfer
        await IntraFTtest.unsuccessfulTransfer();
    });
});