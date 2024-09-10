const { expect } = require('@wdio/globals');
const NewsEventsPage = require('./news-events.po');

describe('News Events Test', () => {
    it('1. Verify unsuccessful News Events Test', async () => {
        //I am in News Events page
        await NewsEventsPage.navigatreToNewsEventsPage();
    });

    it('2. Verify successful News Events Test', async () => {
        //navigate back to News Events page
        await NewsEventsPage.navigateback();
        //Verify the successful news events
        await NewsEventsPage.verifynews();
    })
})