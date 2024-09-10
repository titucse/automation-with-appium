const { expect } = require('@wdio/globals');
const AgraniLocationPage = require('./agrani-location.po');

describe('Agrani Location Test', () => {

    it('1. Verify unsuccessful Agrani Location Test', async () => {
        //I am in Agrani location
        await AgraniLocationPage.navigateToAgraniLocationPage();
    });

    it('2. Verify successful Agrani Location Test', async () => {
        //navigate back to Agrani location
        await AgraniLocationPage.navigateback();
        //verify the successful location
        await AgraniLocationPage.sucessfullAgraniLocation();
    });
});
