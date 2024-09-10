const { expect } = require('@wdio/globals');
const ExchangeRatePage = require('./exchange-rate.po');

describe('Exchange Rate Test', () => {

    it('1. Verify unsuccessful Exchange Rate Test', async () => {
        //negative test
        await ExchangeRatePage.navigateToExchangeRatePage();

    });
    
    it('2. Verify successful Exchange Rate Test', async () => {
        //I am in Exchange Rate page
        await ExchangeRatePage.navigateback();
        //assert exchange rate
        await ExchangeRatePage.exchangeRateButton();
        //assert exchange rate
        await ExchangeRatePage.verifyexchanfeRate();
    });

});
