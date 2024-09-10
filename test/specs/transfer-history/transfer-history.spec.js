const { expect } = require('@wdio/globals');
const transferHistoryPage = require('./transfer-history.po');

describe('Transfer History Test', () => {

    it('1. Verify successful transfer history test', async () => {
        //navigation to last 25 transactions page
        await transferHistoryPage.navigateToTransferHistoryPage();
        //account selection
        await transferHistoryPage.accountSelection();
    });
});
