const { expect } = require('@wdio/globals');
const { remote } = require('webdriverio');
const BEFTNFTAcctest = require('./ft-beftn-acc.po');


describe('BEFTN FT Account Test', () => {

    it('1. Successful fund transfer to other bank account(BEFTN)', async () => {
        //Complete pre-processing
        await BEFTNFTAcctest.BEFTNftAccPreprocess();
        //OTP verification
        await BEFTNFTAcctest.otpVerification();
        //Success screen navigation
        await BEFTNFTAcctest.successScreen();
    });

    it('2. Unsuccessful fund transfer due to amount exceeding current balance', async () => {
        // unsuccessful transfer
        await BEFTNFTAcctest.unsuccessfulTransfer();
    });
});