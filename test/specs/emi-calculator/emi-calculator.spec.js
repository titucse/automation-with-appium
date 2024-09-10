const { expect } = require('@wdio/globals');
const EmiCalculatorPage = require('./emi-calculator.po');

describe('EMI Calculator Test', () => {

    it('1. Verify unsuccessful EMI Calculator Test', async () => {
        //I am in EMI Calculator page
        await EmiCalculatorPage.navigateemiCalculator();
        //unsuccesful EMI calculation
        await EmiCalculatorPage.disabledbutton();
    });
    it('2. Verify successful EMI Calculator Test', async () => {
        //navigate to EMI Calculator page
        await EmiCalculatorPage.navigateemiCalculatorback()
        //successful EMI calculation
        await EmiCalculatorPage.calculateEmimonth();
        //verify the calculated amount
        await EmiCalculatorPage.calculatedamount();
    })

});
