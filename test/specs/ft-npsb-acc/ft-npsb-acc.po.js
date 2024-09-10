const data = require('../../data/common.json');
class NPSBFTAcctest {


    async NPSBftAccPreprocess() {
        //Click on Transfer menu
        await $('android=new UiSelector().description("ট্রান্সফার").instance(0)').click();
        await $('~অন্য ব্যাংকের অ্যাকাউন্টে ট্রান্সফার (NPSB)').click();

        //from account select
        const fromAccDropdown = await $('android=new UiSelector().className("android.view.View").instance(13)');
        await fromAccDropdown.waitForDisplayed();
        await fromAccDropdown.click();
        await driver.pause(1000);
        const fromAccountNo = data.accountInfo.fromAccountNo;
        let fromAcc = await driver.$(`//*[contains(@content-desc, "${fromAccountNo}")]`);
        await fromAcc.click();

        //to account select
        const toAccDropdown = await $('android=new UiSelector().className("android.view.View").instance(18)');
        await toAccDropdown.click();
        await driver.pause(1000);
        const searchBeneficiary = await $('android=new UiSelector().className("android.widget.EditText")');
        await searchBeneficiary.waitForDisplayed();
        await searchBeneficiary.click();
        const beneficiaryName = data.NPSBAccountBeneficiaryInfo.searchByName;
        await searchBeneficiary.setValue(beneficiaryName, toString());
        const beneficiaryAccNo = data.NPSBAccountBeneficiaryInfo.beneficiaryAccountNo;
        let beneficiary = await driver.$(`//*[contains(@content-desc, "${beneficiaryAccNo}")]`);
        await beneficiary.click();

        //amount input
        const amountField = await $('android=new UiSelector().className("android.widget.EditText")');
        await amountField.click();
        const transferAmount = data.NPSBAccountBeneficiaryInfo.amount;
        await amountField.setValue(transferAmount.toString());
        await driver.pause(1000);

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
        await doneButton.click();
        const transferTitle = await $('~ট্রান্সফার');
        await transferTitle.waitForDisplayed();
    }

    async unsuccessfulTransfer() {
        await $('~অন্য ব্যাংকের অ্যাকাউন্টে ট্রান্সফার (NPSB)').click();

        //from account select
        const fromAccDropdown = await $('android=new UiSelector().className("android.view.View").instance(13)');
        await fromAccDropdown.waitForDisplayed();
        await fromAccDropdown.click();
        await driver.pause(1000);
        const fromAccountNo = data.accountInfo.fromAccountNo;
        let fromAcc = await driver.$(`//*[contains(@content-desc, "${fromAccountNo}")]`);
        await fromAcc.click();

        //to account select
        const toAccDropdown = await $('android=new UiSelector().className("android.view.View").instance(18)');
        await toAccDropdown.click();
        await driver.pause(1000);
        const searchBeneficiary = await $('android=new UiSelector().className("android.widget.EditText")');
        await searchBeneficiary.waitForDisplayed();
        await searchBeneficiary.click();
        const beneficiaryName = data.NPSBAccountBeneficiaryInfo.searchByName;
        await searchBeneficiary.setValue(beneficiaryName, toString());
        const beneficiaryAccNo = data.NPSBAccountBeneficiaryInfo.beneficiaryAccountNo;
        let beneficiary = await driver.$(`//*[contains(@content-desc, "${beneficiaryAccNo}")]`);
        await beneficiary.click();

        //amount input
        const amountField = await $('android=new UiSelector().className("android.widget.EditText")');
        await amountField.click();
        const transferAmount = data.largeAmount.amount;
        await amountField.setValue(transferAmount.toString());

        //error toast message
        let errorToast = await driver.$('//*[contains(@content-desc, "ট্রান্সফার এমাউন্ট বর্তমান ব্যালেন্স কে অতিক্রম করেছে ")]');
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

module.exports = new NPSBFTAcctest();