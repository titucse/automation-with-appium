const { expect } = require('@wdio/globals');
const FaqPage = require('./faq.po');

describe('FAQ Test', () => {
    it('1. Verify unsuccessful FAQ Test', async () => {
        //I am in FAQ page
        await FaqPage.navigateToFaqPage();
    });
    it('2. Verify unsuccessful FAQ Test', async () => {
        //navigate back to FAQ page
        await FaqPage.navigateback();
        //successful FAQ test
        await FaqPage.sucessfullfaq();
    });

});
