const { expect } = require('@wdio/globals');
const AgraniMapPage = require('./agrani-map.po');

describe('Agrani Map Test', () => {

    it('1. Verify unsuccessful Agrani Map Test', async () => {
        //I am in Agrani map
        await AgraniMapPage.navigateagraniMap();
    });

    it('2. Verify successful Agrani Map Test', async () => {
        //verify the successful map
        await AgraniMapPage.sucessfullAgraniMap();
    });
});
