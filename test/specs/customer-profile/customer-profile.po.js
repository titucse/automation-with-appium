class CustomerProfilePage {
    async navigateToCustomerProfilePage() {
        //click more
        const moreButton = await $('~অন্যান্য');
        await moreButton.click();
        //click customer profile
        const customerProfileButton = await $('~গ্রাহক প্রোফাইল');
        await customerProfileButton.click();
        //wait 
        await driver.pause(3000);
    }
    async unsucesfullCustomerProfile() {
        //wrong customer profile
        const wrongCustomerProfile = await $('android=new UiSelector().description("Nazia Hossain Rodela").instance(0)');
        //verify wrong customer profile
        await expect(wrongCustomerProfile).toHaveText('Nazia Hossain Rodela');
    }
    async navigateback() {
        //click back button
        const backbutton = await $('android=new UiSelector().className("android.view.View").instance(6)');
        await backbutton.click();
        //click customer profile
        const customerProfileButton = await $('~গ্রাহক প্রোফাইল');
        await customerProfileButton.click();
        //wait 
        await driver.pause(3000);
    }
    async sucessfullCustomerProfile() {
        // profile
        const profile = await $('~প্রোফাইল');
        const isProfileDisplayed = await profile.isDisplayed();
        if (isProfileDisplayed) {
            console.log('Profile is displayed.');
        } else {
            console.log('Profile is not displayed.');
        }

        // account number visible
        const accountNumber = await $('~অ্যাকাউন্ট নম্বর');
        const isAccountNumberDisplayed = await accountNumber.isDisplayed();
        if (isAccountNumberDisplayed) {
            console.log('Account Number is displayed.');
        } else {
            console.log('Account Number is not displayed.');
        }

        // account title to be visible
        const accountTitle = await $('~অ্যাকাউন্ট টাইটেল');
        const isAccountTitleDisplayed = await accountTitle.isDisplayed();
        if (isAccountTitleDisplayed) {
            console.log('Account Title is displayed.');
        } else {
            console.log('Account Title is not displayed.');
        }

        // branch
        const branch = await $('~শাখা');
        const isBranchDisplayed = await branch.isDisplayed();
        if (isBranchDisplayed) {
            console.log('Branch is displayed.');
        } else {
            console.log('Branch is not displayed.');
        }
    }
}

module.exports = new CustomerProfilePage();
