const { expect } = require('@wdio/globals');
const { remote } = require('webdriverio');
const BEFTNBeneficiaryCard = require('./beneficiary-beftn-card.po');

describe('BEFTN Card Beneficiary Test', () => {

    it('1. Verify BEFTN beneficiary management screen navigation', async () => {
        // Verify I am in intra beneficiary management screen navigation
        await BEFTNBeneficiaryCard.beneficiaryManagementnavigation();
        // Tap on floating button to add a beneficiary
        await BEFTNBeneficiaryCard.tapFloatingbutton();
        // Select beneficiary type
        await BEFTNBeneficiaryCard.selectBeneficiaryType();
        // Add a beneficiary
        await BEFTNBeneficiaryCard.addBeneficiary();
    });

    it('2. Verify that user can not add a duplicate npsb card beneficiary from beneficiary management screen ', async () => {
        // Add a beneficiary
        await BEFTNBeneficiaryCard.duplicateaddBeneficiary();
    });

});