const { expect } = require('@wdio/globals');
const { remote } = require('webdriverio');
const NPSBBeneficiaryAcc = require('./beneficiary-npsb-acc.po');

describe('NPSB Account Beneficiary Test', () => {

    it('1. Verify npsb beneficiary management screen navigation', async () => {
        // Verify I am in intra beneficiary management screen navigation
        await NPSBBeneficiaryAcc.beneficiaryManagementnavigation();
        // Tap on floating button to add a beneficiary
        await NPSBBeneficiaryAcc.tapFloatingbutton();
        // Select beneficiary type
        await NPSBBeneficiaryAcc.selectBeneficiaryType();
        // Add a beneficiary
        await NPSBBeneficiaryAcc.addBeneficiary();
    });

    it('2. Verify that user can not add a duplicate npsb beneficiary from beneficiary management screen ', async () => {
        // Add a beneficiary
        await NPSBBeneficiaryAcc.duplicateaddBeneficiary();
    });

});