const { expect } = require('@wdio/globals');
const SeeAccountBalancePage = require('./see-account-balance.po');

describe('See Account Balance Test', () => {   
    
    it('1. Successful See Account Balance Test', async () => {
        SeeAccountBalancePage.balanceCheck();
    });    
});
