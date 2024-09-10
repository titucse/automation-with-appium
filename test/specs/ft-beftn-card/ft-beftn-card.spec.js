const { expect } = require('@wdio/globals');
const { remote } = require('webdriverio');
const BEFTNFTCardtest = require('./ft-beftn-card.po');


describe('BEFTN FT Card Test', () => {

    it('1. Successful fund transfer to other bank card(BEFTN)', async () => {
        //Complete pre-processing
        await BEFTNFTCardtest.BEFTNftCardPreprocess();
        //OTP verification
        await BEFTNFTCardtest.otpVerification();
        //Success screen navigation
        await BEFTNFTCardtest.successScreen();
    });

    it('2. Unsuccessful fund transfer due to amount exceeding current balance', async () => {
        // unsuccessful transfer
        await BEFTNFTCardtest.unsuccessfulTransfer();
    });
});