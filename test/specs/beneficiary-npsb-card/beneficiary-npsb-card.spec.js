const { expect } = require('@wdio/globals');
const { remote } = require('webdriverio');
const NPSBBeneficiaryCard = require('./beneficiary-npsb-card.po');

describe('NPSB Card Beneficiary Test', () => {

    it('1. Verify npsb beneficiary management screen navigation', async () => {
        // Verify I am in intra beneficiary management screen navigation
        await NPSBBeneficiaryCard.beneficiaryManagementnavigation();
        // Tap on floating button to add a beneficiary
        await NPSBBeneficiaryCard.tapFloatingbutton();
        // Select beneficiary type
        await NPSBBeneficiaryCard.selectBeneficiaryType();
        // Add a beneficiary
        await NPSBBeneficiaryCard.addBeneficiary();
    });

    it('2. Verify that user can not add a duplicate npsb card beneficiary from beneficiary management screen ', async () => {
        // Add a beneficiary
        await NPSBBeneficiaryCard.duplicateaddBeneficiary();
    });

});