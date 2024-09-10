const { expect } = require('@wdio/globals');
const { remote } = require('webdriverio');
const NagadTransfer = require('./nagad-transfer.po');

describe('Nagad Transfer Test', () => {

    it('1. Successful Nagad Transfer Test', async () => {
        //Nagad Transfer 
        await NagadTransfer.nagadTransfer();
        //OTP verification 
        await NagadTransfer.otpVerification();
        //Success screen
        await NagadTransfer.successScreen();
    });

    it('2. Unsuccessful Nagad Transfer Test', async () => {
        // unsuccessful Nagad Transfer
        await NagadTransfer.unsuccessfulNagadTransfer();
    });
});

