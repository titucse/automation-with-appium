const { expect } = require('@wdio/globals');
const { remote } = require('webdriverio');
const BEFTNBeneficiaryAcc = require('./beneficiary-beftn-acc.po');

describe('BEFTN Account Beneficiary Test', () => {

    it('1. Verify beftn beneficiary management screen navigation', async () => {
        // Verify I am in intra beneficiary management screen navigation
        await BEFTNBeneficiaryAcc.beneficiaryManagementnavigation();
        // Tap on floating button to add a beneficiary
        await BEFTNBeneficiaryAcc.tapFloatingbutton();
        // Select beneficiary type
        await BEFTNBeneficiaryAcc.selectBeneficiaryType();
        // Add a beneficiary
        await BEFTNBeneficiaryAcc.addBeneficiary();
    });

    it('2. Verify that user can not add a duplicate beftn acc beneficiary from beneficiary management screen ', async () => {
        // Add a beneficiary
        await BEFTNBeneficiaryAcc.duplicateaddBeneficiary();
    });

});