const data = require('../../data/common.json');

class OwnFTtest {

    async clickTransfer() {
        await $('android=new UiSelector().description("ট্রান্সফার").instance(0)').click();
        await driver.pause(1000);
    }

    async clickOwnFT() {
        await $('~নিজস্ব অ্যাকাউন্টে ট্রান্সফার').click();
        await driver.pause(1000);
    }

    async ownFTscreenTitle() {
        const ownFTTitle = await $('~ফান্ড ট্রান্সফার নিজস্ব অ্যাকাউন্টে');
        await ownFTTitle.waitForDisplayed();
    }

    async ownFTscreenComponents() {
        const fromAccDropdown = await $('android=new UiSelector().className("android.view.View").instance(13)');
        await fromAccDropdown.waitForDisplayed();
        const nextButton = await $('android=new UiSelector().description("পরবর্তী")');
        await nextButton.waitForDisplayed();
        const backButton = await $('android=new UiSelector().className("android.view.View").instance(7)');
        await backButton.waitForDisplayed();
    }

    async disabledNextButton() {
        const nextButton = await $('android=new UiSelector().description("পরবর্তী")');
        await nextButton.waitForDisplayed();
        const isEnabled = await nextButton.isEnabled();

        if (!isEnabled) {
            console.log('The next button is disabled.');
        } else {
            console.log('The next button is enabled.');
        }
    }

    async clickBackButton() {
        const backButton = await $('android=new UiSelector().className("android.view.View").instance(7)');
        await backButton.click();
        await driver.pause(1000);
        const ftScreenVerify = await $('~নিজস্ব অ্যাকাউন্টে ট্রান্সফার');
        await ftScreenVerify.waitForDisplayed();
        const ftScreenVerify2 = await $('~বেনিফিশিয়ারি ব্যবস্থাপনা');
        await ftScreenVerify2.waitForDisplayed();
        await ftScreenVerify.click();
        await driver.pause(1000);
    }

    async fromAccLabel() {
        const fromAccLabel = await $('android=new UiSelector().description("প্রেরক অ্যাকাউন্ট")');
        await fromAccLabel.waitForDisplayed();
    }

    async fromAccBottomSheet() {
        const fromAccDropdown = await $('android=new UiSelector().className("android.view.View").instance(13)');
        await driver.pause(1000);
        await fromAccDropdown.click();
        await driver.pause(2000);
        const bottomSheetTitle = await $('android=new UiSelector().description("অ্যাকাউন্ট নির্বাচন করুন")');
        await bottomSheetTitle.waitForDisplayed();
    }

    async selectFromAccount() {
        const accountInfocValue = data.accountInfo.accountNo;
        let element = await driver.$(`//*[contains(@content-desc, "${accountInfocValue}")]`);
        console.log("element:", element);
        await element.click();
        await driver.pause(1000);
        await element.click();
        await driver.pause(2000);
    }

    async selectToAccount() {
        const toAccDropdown = await $('android=new UiSelector().className("android.view.View").instance(18)');
        await driver.pause(2000);
        await toAccDropdown.click();
        await driver.pause(5000);
    }

    async transferAmount() {
        const amount = await $('android=new UiSelector().className("android.widget.EditText")');
        await driver.pause(1000);
        await amount.click();
        await amount.setValue('10');
        await driver.pause(1000);
    }

    async clickTransferButton() {
        const transferButton = await $('android=new UiSelector().description("পরবর্তী")');
        await driver.pause(1000);
        await transferButton.click();
        await driver.pause(1000);
    }

    async otpScreenVerifcation() {
        // Check the title
        const otpScreenVerify = await $('~ওটিপি যাচাই');
        await otpScreenVerify.waitForDisplayed();
        await driver.pause(1000);
    }

    async enterOtp() {
        const otp = await $('android=new UiSelector().className("android.widget.EditText")');
        await driver.pause(1000);
        await otp.click();
        await otp.setValue('1234');
        await driver.pause(1000);
    }

    async clickConfirmButton() {
        const confirmButton = await $('android=new UiSelector().description("নিশ্চিত করুন")');
        await driver.pause(1000);
        await confirmButton.click();
        await driver.pause(1000);
    }

    async confirmYesButton() {
        const confirmYesButton = await $('android=new UiSelector().description("হ্যাঁ")');
        await driver.pause(1000);
        await confirmYesButton.click();
        await driver.pause(1000);
    }

    async confirmNoButton() {
        const confirmNoButton = await $('android=new UiSelector().description("না")');
        await driver.pause(1000);
        await confirmNoButton.click();
        await driver.pause(1000);
    }

    async doneButton() {
        const doneButton = await $('android=new UiSelector().description("ঠিক আছে")');
        await driver.pause(1000);
        await doneButton.click();
        await driver.pause(1000);
    }

    async timestamp() {
        const date = await $('android=new UiSelector().description("তারিখ")');
        await driver.pause(1000);
        await date.waitForDisplayed();
        const time = await $('android=new UiSelector().description("সময়")');
        await driver.pause(1000);
        await time.waitForDisplayed();
        const reference = await $('android=new UiSelector().description("রেফারেন্স নং")');
        await driver.pause(1000);
        await reference.waitForDisplayed();
    }

    async transferScreenTitle() {
        // Check the title
        const transferTitle = await $('~ট্রান্সফার');
        await transferTitle.waitForDisplayed();
        await driver.pause(1000);
    }

    async transactionLimit() {
        // Verifying the transaction limit list
        const transactionLimit = await $('android=new UiSelector().description("ট্রানজেকশন লিমিট দেখুন")');
        await transactionLimit.waitForDisplayed();
        await transactionLimit.click();
        await driver.pause(3000);
        const transactionTypeTitle = await $('android=new UiSelector().description("ট্রানজেকশনের ধরণ")');
        await transactionTypeTitle.waitForDisplayed();
        const transactionType = await $('android=new UiSelector().description("OWN TRANSFER")');
        await transactionType.waitForDisplayed();
        const dailyLowestTransactionTitle = await $('android=new UiSelector().description("প্রতি ট্রানজেকশনে সর্বনিম্ন পরিমান")');
        await dailyLowestTransactionTitle.waitForDisplayed();
        const dailyLowestTransaction = await $('android=new UiSelector().description("1.0")');
        await dailyLowestTransaction.waitForDisplayed();
        const dailyHighestTransactionTitle = await $('android=new UiSelector().description("প্রতি ট্রানজেকশনে সর্বোচ্চ পরিমান")');
        await dailyHighestTransactionTitle.waitForDisplayed();
        const dailyTransactionAmountTitle = await $('android=new UiSelector().description("প্রতিদিনের ট্রানজেকশনের পরিমান")');
        await dailyTransactionAmountTitle.waitForDisplayed();
        const dailyTransactionAmount = await $('android=new UiSelector().description("500000.0")');
        await dailyTransactionAmount.waitForDisplayed();
        const dailyTransactionCountTitle = await $('android=new UiSelector().description("প্রতিদিনের ট্রানজেকশন গণনা")');
        await dailyTransactionCountTitle.waitForDisplayed();
        const dailyTransactionCount = await $('android=new UiSelector().description("100 বার")');
        await dailyTransactionCount.waitForDisplayed();
        const monthlyTransactionAmountTitle = await $('android=new UiSelector().description("মাসিক ট্রানজেকশনের পরিমান")');
        await monthlyTransactionAmountTitle.waitForDisplayed();
        const monthlyTransactionAmount = await $('android=new UiSelector().description("14000000.0")');
        await monthlyTransactionAmount.waitForDisplayed();
        const monthlyTransactionCountTitle = await $('android=new UiSelector().description("মাসিক ট্রানজেকশন গণনা")');
        await monthlyTransactionCountTitle.waitForDisplayed();
        const monthlyTransactionCount = await $('android=new UiSelector().description("280 বার")');
        await monthlyTransactionCount.waitForDisplayed();
        const doneButton = await $('android=new UiSelector().description("ঠিক আছে")');
        await driver.pause(1000);
        await doneButton.waitForDisplayed();
        await doneButton.click();
    }

    async ownFTPreprocess() {
        //Click on Transfer menu
        await $('android=new UiSelector().description("ট্রান্সফার").instance(0)').click();
        await $('~নিজস্ব অ্যাকাউন্টে ট্রান্সফার').click();

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
        const toAccountNo = data.accountInfo.toAccountNo;
        let toAcc = await driver.$(`//*[contains(@content-desc, "${toAccountNo}")]`);
        await toAcc.click();

        //amount input
        const amountField = await $('android=new UiSelector().className("android.widget.EditText")');
        await amountField.click();
        const transferAmount = data.accountInfo.amount;
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
        //Click on Transfer menu
        await driver.pause(1000);
        await $('~নিজস্ব অ্যাকাউন্টে ট্রান্সফার').click();

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
        const toAccountNo = data.accountInfo.toAccountNo;
        let toAcc = await driver.$(`//*[contains(@content-desc, "${toAccountNo}")]`);
        await toAcc.click();

        //amount input
        const amountField = await $('android=new UiSelector().className("android.widget.EditText")');
        await amountField.click();
        const transferAmount = data.largeAmount.amount;
        await amountField.setValue(transferAmount.toString());
        // await driver.pause(2000);

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

module.exports = new OwnFTtest();