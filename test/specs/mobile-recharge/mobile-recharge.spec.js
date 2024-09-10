const { expect } = require('@wdio/globals');
const { remote } = require('webdriverio');
const MobileRecharge = require('./mobile-recharge.po');

describe('Mobile Recharge Test', () => {

    it('1. Successful Mobile Recharge Test', async () => {
        //Mobile recharge pre-process
        await MobileRecharge.mobileRechargePreprocess();
        //OTP verification 
        await MobileRecharge.otpVerification();
        //Success screen
        await MobileRecharge.successScreen();
    });

    it('2. Unsuccessful Mobile Recharge Test', async () => {
        // unsuccessful mobile recharge
        await MobileRecharge.unsuccessfulRecharge();
    });
});


