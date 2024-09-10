const { expect } = require('@wdio/globals');
const { remote } = require('webdriverio');
const AdvanceLoanPage = require('./advance-loan-calculator.po');


describe('Advance Loan Calculator Test', () => {
    it('1. Verify unsuccessful Advance Loan Calculator Test', async () => {
        // I am in Advance Loan Calculator page
        await AdvanceLoanPage.navigateToAdvanceLoanPage();
        // wrong calculation
        await AdvanceLoanPage.wrongcalculateAdvanceLoan();
    });

    it('2. Verify successful Advance Loan Calculator Test', async () => {
        // I am in Advance Loan Calculator page
        await AdvanceLoanPage.navigateback()
        // successful calculation
        await AdvanceLoanPage.calculateadvanceLoan();
        //  assert calculated amount
        await AdvanceLoanPage.calculation();
    });
});
