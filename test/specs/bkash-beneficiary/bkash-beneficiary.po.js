
class bKashBeneficiaryPage {
    async beneficiaryManagementnavigation() {
        // go to transfer menu
        const clicktransfermenu = await $('~ট্রান্সফার');
        // click on transfer menu
        await clicktransfermenu.click();
        // wait for 3 seconds
        await driver.pause(3000);
        // go to beneficiary management
        const beneficiaryManagement = await $('//android.widget.ImageView[@content-desc="বেনিফিশিয়ারি ব্যবস্থাপনা"]');
        // click on beneficiary management
        await beneficiaryManagement.click();
        // wait for 3 seconds
        await driver.pause(1000);
        // floating button
        const floatingButton = await $('android=new UiSelector().className("android.widget.Button")');
        const isDisplayed = await floatingButton.isDisplayed();
        const isEnabled = await floatingButton.isEnabled();

        if (isDisplayed && isEnabled) {
            await floatingButton.click();
        } else {
            console.log("Floating button is not visible or not enabled");
        }
    }
    async clickBeneficiaryManagement() {
        await $('~Beneficiary Management').click();
        await driver.pause(1000);
    }
}

module.exports = new bKashBeneficiaryPage();