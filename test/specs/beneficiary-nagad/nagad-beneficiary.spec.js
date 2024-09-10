const { expect } = require('@wdio/globals');
const nagadBeneficiary = require('./nagad-beneficiary.po');

describe('Nagad Beneficiary Test', () => {

    it('1. Successfully add nagad beneficiary test', async () => {
        //Click on beneficiary management menu
        await nagadBeneficiary.clickNagadBeneficiaryManagement();
        //Click on floating button
        await nagadBeneficiary.clickfloatingbutton();
        //Add Nagad Beneficiary
        await nagadBeneficiary.addNagadbeneficiary();
    });

    it('2. Unsuccessful add nagad beneficiary test for without giving nagad number', async () => {
        //Click on floating button
        await nagadBeneficiary.clickfloatingbutton();
        //Add Nagad Beneficiary
        await nagadBeneficiary.addNagadbeneficiaryWithoutNumber();
    });
});

