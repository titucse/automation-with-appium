const { expect } = require('@wdio/globals');
const ChangePasswordPage = require('./change-password.po');

describe('Change Password Test', () => {


    it('1.Verify unsuccessful Change Password Test', async () => {
        //navigate to change password page
        await ChangePasswordPage.changePasswordnavigation();
        //enter wrong password
        await ChangePasswordPage.wrongpassword();
    })

    it('2. Verify successful Change Password Test', async () => {
        //change password 
        await ChangePasswordPage.changingpassword();
        //shows success message
    });
});
