const { expect } = require('@wdio/globals');
const { remote } = require('webdriverio');
const NPSBFTAcctest = require('./ft-npsb-acc.po');


describe('NPSB FT Account Test', () => {

    it('1. Successful fund transfer to other bank account(NPSB)', async () => {
        //Complete pre-processing
        await NPSBFTAcctest.NPSBftAccPreprocess();
        //OTP verification
        await NPSBFTAcctest.otpVerification();
        //Success screen navigation
        await NPSBFTAcctest.successScreen();
    });

    it('2. Unsuccessful fund transfer due to amount exceeding current balance', async () => {
        // unsuccessful transfer
        await NPSBFTAcctest.unsuccessfulTransfer();
    });
});