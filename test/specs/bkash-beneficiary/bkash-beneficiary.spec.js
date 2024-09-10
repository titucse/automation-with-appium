const { expect } = require('@wdio/globals');
const { remote } = require('webdriverio');
const bKashBeneficiaryPage = require('./bkash-beneficiary.po');

describe('bKash Beneficiary Test', () => {

    it('1. Verify intra beneficiary management screen navigation', async () => {
        // Verify I am in intra beneficiary management screen navigation
        await bKashBeneficiaryPage.beneficiaryManagementnavigation()
    });
});
