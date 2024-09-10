const { expect } = require('@wdio/globals');
const { remote } = require('webdriverio');
const NPSBFTCardtest = require('./ft-npsb-card.po');


describe('NPSB FT Card Test', () => {

    it('1. Successful fund transfer to other bank card(NPSB) ', async () => {
        //Complete pre-processing
        await NPSBFTCardtest.NPSBftCardPreprocess();
        //OTP verification
        await NPSBFTCardtest.otpVerification();
        //Success screen navigation
        await NPSBFTCardtest.successScreen();
    });

    it('2. Unsuccessful fund transfer due to amount exceeding current balance', async () => {
        // unsuccessful transfer
        await NPSBFTCardtest.unsuccessfulTransfer();
    });

});