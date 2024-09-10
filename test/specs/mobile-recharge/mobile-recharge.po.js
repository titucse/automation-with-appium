const data = require('../../data/common.json');
class MobileRecharge {

    async mobileRechargePreprocess() {
        // mobile recharge navigation
        const mobilerecharge = await $('android=new UiSelector().description("মোবাইল\nরিচার্জ")');
        await mobilerecharge.waitForDisplayed();
        await mobilerecharge.click();
        const recharge = await $('android=new UiSelector().description("রিচার্জ")');
        await recharge.waitForDisplayed();
        await recharge.click();

        // from account selection
        const fromAccDropdown = await $('android=new UiSelector().className("android.view.View").instance(13)');
        await fromAccDropdown.click();
        await driver.pause(1000);
        const fromAccountNo = data.accountInfo.fromAccountNo;
        let fromAcc = await driver.$(`//*[contains(@content-desc, "${fromAccountNo}")]`);
        await fromAcc.click();

        // recharge beneficiary selection
        const toMobileNumber = await $('android=new UiSelector().className("android.widget.EditText")');
        await toMobileNumber.waitForDisplayed()
        await toMobileNumber.click();
        const mobileNumber = data.mobileRecharge.toMobileNo;
        await toMobileNumber.setValue(mobileNumber.toString());

        // operator selection
        const operatorDropdown = await driver.$(`//*[contains(@content-desc, "মোবাইল অপারেটর নির্বাচন করুন")]`);

        if (operatorDropdown.length > 0) {
            console.log("Operator selection dropdown found");

            // Operator Selection
            await driver.pause(2000);
            await operatorDropdown[0].click();
            await driver.pause(1000);
            const operatorSelect = await $('android=new UiSelector().className("android.widget.ImageView").instance(5)');
            await operatorSelect.click();

            // Operator Type Selection
            const operatorType = await $('android=new UiSelector().description("মোবাইল অপারেটরের ধরন নির্বাচন করুন")');
            await operatorType.click();
            await driver.pause(1000);
            const operatorTypeSelect = data.mobileRecharge.operatorType;
            let opType = await driver.$(`//*[contains(@content-desc, "${operatorTypeSelect}")]`);
            await opType.click();
            await driver.pause(1000);
        } else {
            console.log("Operator selection dropdown not found, skipping operator selection steps");
        }

        // amount input
        const amount = await $('android=new UiSelector().className("android.widget.EditText").instance(1)');
        await amount.waitForExist()
        await amount.click();
        const rechargeAmount = data.mobileRecharge.rechargeAmount;
        await amount.setValue(rechargeAmount.toString());

        //next button click
        const transferButton = await $('android=new UiSelector().description("পরবর্তী")');
        await transferButton.waitForDisplayed()
        await transferButton.click();
    }

    async otpVerification() {
        const otpScreenVerify = await $('~ওটিপি যাচাই');
        await otpScreenVerify.waitForDisplayed();
        const otpField = await $('android=new UiSelector().className("android.widget.EditText")');
        await otpField.click();
        const otp = data.otpValue.otp
        await otpField.setValue(otp.toString())
        const confirmButton = await $('android=new UiSelector().description("নিশ্চিত করুন")');
        await confirmButton.waitForDisplayed()
        await confirmButton.click();
        const confirmYesButton = await $('android=new UiSelector().description("হ্যাঁ")');
        await confirmYesButton.click();
    }

    async successScreen() {
        const doneButton = await $('android=new UiSelector().description("ঠিক আছে")');
        await doneButton.waitForDisplayed()
        await doneButton.click();
        const transferTitle = await $('android=new UiSelector().description("ব্যালেন্স দেখুন").instance(0)');
        await transferTitle.waitForExist();
    }

    async unsuccessfulRecharge() {
        // mobile recharge navigation
        const mobilerecharge = await $('android=new UiSelector().description("মোবাইল\nরিচার্জ")');
        await mobilerecharge.waitForDisplayed();
        await mobilerecharge.click();
        const recharge = await $('android=new UiSelector().description("রিচার্জ")');
        await recharge.waitForDisplayed();
        await recharge.click();

        // from account selection
        const fromAccDropdown = await $('android=new UiSelector().className("android.view.View").instance(13)');
        await fromAccDropdown.click();
        await driver.pause(1000);
        const fromAccountNo = data.accountInfo.fromAccountNo;
        let fromAcc = await driver.$(`//*[contains(@content-desc, "${fromAccountNo}")]`);
        await fromAcc.click();

        // recharge beneficiary selection
        const toMobileNumber = await $('android=new UiSelector().className("android.widget.EditText")');
        await toMobileNumber.waitForDisplayed()
        await toMobileNumber.click();
        const mobileNumber = data.mobileRecharge.toMobileNo;
        await toMobileNumber.setValue(mobileNumber.toString());

        // operator selection
        const operatorDropdown = await driver.$(`//*[contains(@content-desc, "মোবাইল অপারেটর নির্বাচন করুন")]`);

        if (operatorDropdown.length > 0) {
            console.log("Operator selection dropdown found");

            // Operator Selection
            await driver.pause(2000);
            await operatorDropdown[0].click();
            await driver.pause(1000);
            const operatorSelect = await $('android=new UiSelector().className("android.widget.ImageView").instance(5)');
            await operatorSelect.click();

            // Operator Type Selection
            const operatorType = await $('android=new UiSelector().description("মোবাইল অপারেটরের ধরন নির্বাচন করুন")');
            await operatorType.click();
            await driver.pause(1000);
            const operatorTypeSelect = data.mobileRecharge.operatorType;
            let opType = await driver.$(`//*[contains(@content-desc, "${operatorTypeSelect}")]`);
            await opType.click();
            await driver.pause(1000);
        }
        else {
            console.log("Operator selection dropdown not found, skipping operator selection steps");
        }

        //amount input
        const amount = await $('android=new UiSelector().className("android.widget.EditText").instance(1)');
        await amount.waitForExist()
        await amount.click();
        const topupAmount = data.largeAmount.rechargeAmount;
        await amount.setValue(topupAmount.toString());
        
        //error toast message
        let errorToast = await driver.$('//*[contains(@content-desc, "সর্বোচ্চ রিচার্জের পরিমাণ ১০০০ টাকার কম বা সমান হতে হবে")]');
        await errorToast.waitForDisplayed();
        const nextButton = await $('android=new UiSelector().description("পরবর্তী")');
        await nextButton.waitForDisplayed();

        const isEnabled = await nextButton.isEnabled();

        if (!isEnabled) {
            console.log('The next button is disabled.');
        } else {
            console.log('The next button is enabled.');
        }
        await driver.pause(2000);
    }
}

module.exports = new MobileRecharge();
