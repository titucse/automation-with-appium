const { expect } = require('@wdio/globals');
const { remote } = require('webdriverio');
const IntraBeneficiary = require('./beneficiary-intra.po');

describe('Intra Beneficiary Test', () => {

    it('1. Verify intra beneficiary management screen navigation', async () => {
        // Verify I am in intra beneficiary management screen navigation
        await IntraBeneficiary.beneficiaryManagementnavigation();
        // Tap on floating button to add a beneficiary
        await IntraBeneficiary.tapFloatingbutton();
        // Select beneficiary type
        await IntraBeneficiary.selectBeneficiaryType();
        // Add a beneficiary
        await IntraBeneficiary.addBeneficiary();
    });

    it('2. Verify that user can not add a duplicate intra beneficiary from beneficiary management screen ', async () => {
        // Tap on floating button to add a beneficiary
        await IntraBeneficiary.AgaintapFloatingbutton();
        // Select beneficiary type
        await IntraBeneficiary.duplicateselectBeneficiaryType();
        // Add a beneficiary
        await IntraBeneficiary.duplicateaddBeneficiary();
    });
});
