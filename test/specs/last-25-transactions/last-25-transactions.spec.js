const { expect } = require('@wdio/globals');
const last25TransactionsPage = require('./last-25-transactions.po');

describe('Last 25 Transaction Test', () => {

    it('1. Verify successful last 25 transaction test', async () => {
        //navigation to last 25 transactions page
        await last25TransactionsPage.navigateToLast25TransactionsPage();
        //account selection
        await last25TransactionsPage.accountSelection();
    });
});
