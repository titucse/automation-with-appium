const { expect } = require('@wdio/globals');
const { remote } = require('webdriverio');
const OwnFTtest = require('./ft-own.po');

describe('Own FT Test', () => {

    it('1. Verify Transfer to Own Account screen  navigation ', async () => {
        //Complete pre-process
        await OwnFTtest.ownFTPreprocess();
        //OTP verification
        await OwnFTtest.otpVerification();
        //Success screen navigation
        await OwnFTtest.successScreen();
    });

    it('2. Unsuccessful fund transfer due to amount exceeding current balance', async () => {
        // unsuccessful transfer
        await OwnFTtest.unsuccessfulTransfer();
    });
});