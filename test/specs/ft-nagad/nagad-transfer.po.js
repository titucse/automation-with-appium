const data = require('../../data/common.json');
class NagadTransfer {

    async nagadTransfer() {
            // Nagad Transfer navigation
            await $('android=new UiSelector().description("নগদ\nট্রান্সফার")').click();
            await driver.pause(1000);

            //Transfer
            await $('android=new UiSelector().description("নগদ ট্রান্সফার").instance(1)').click();
            await driver.pause(1000);

            //fromAccLabel
            const fromAccLabel = await $('android=new UiSelector().description("প্রেরক অ্যাকাউন্ট")');
            await fromAccLabel.waitForDisplayed();

            //selectFromAccount
            const fromAccDropdown = await $('android=new UiSelector().className("android.view.View").instance(11)');
            await fromAccDropdown.waitForDisplayed();
            await fromAccDropdown.click();
            await driver.pause(1000);
            const fromAccNo = data.accountInfo.fromAccountNo;
            let fromAcc = await driver.$(`//*[contains(@content-desc, "${fromAccNo}")]`);
            await fromAcc.click();

            //selectToAccount
            const toAccountDropdown = await $('android=new UiSelector().className("android.view.View").instance(17)');
            await toAccountDropdown.click();
            const toAccBeneficiary = data.nagadTransfer.toAccBeneficiary;
            let toAcc = await driver.$(`//*[contains(@content-desc, "${toAccBeneficiary}")]`);
            await toAcc.click();

            //Enter Amount    
            const amountField = await $('android=new UiSelector().className("android.widget.EditText").instance(0)');
            await amountField .waitForExist();
            await amountField .click();
            const nagadAmount = data.nagadTransfer.amount;
            await amountField.setValue(nagadAmount.toString());
            await driver.pause(1000);

            //clickNextButton
            const nextButton = await $('android=new UiSelector().description("পরবর্তী")');
            await nextButton.waitForDisplayed()
            await nextButton.click();
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
            const transferTitle = await $('~নগদ\nট্রান্সফার');
            await transferTitle.waitForDisplayed();
        }


        //unsuccessfulNagadTransfer

        async unsuccessfulNagadTransfer() {
            // Nagad Transfer navigation
            await $('android=new UiSelector().description("নগদ\nট্রান্সফার")').click();
            await driver.pause(1000);

            //Transfer
            await $('android=new UiSelector().description("নগদ ট্রান্সফার").instance(1)').click();
            await driver.pause(1000);

            //fromAccLabel
            const fromAccLabel = await $('android=new UiSelector().description("প্রেরক অ্যাকাউন্ট")');
            await fromAccLabel.waitForDisplayed();

            //selectFromAccount
            const fromAccDropdown = await $('android=new UiSelector().className("android.view.View").instance(11)');
            await fromAccDropdown.waitForDisplayed();
            await fromAccDropdown.click();
            await driver.pause(1000);
            const fromAccNo = data.accountInfo.fromAccountNo;
            let fromAcc = await driver.$(`//*[contains(@content-desc, "${fromAccNo}")]`);
            await fromAcc.click();

            //selectToAccount
            const toAccountDropdown = await $('android=new UiSelector().className("android.view.View").instance(17)');
            await toAccountDropdown.click();
            const toAccBeneficiary = data.nagadTransfer.toAccBeneficiary;
            let toAcc = await driver.$(`//*[contains(@content-desc, "${toAccBeneficiary}")]`);
            await toAcc.click();

            //Enter Amount    
            const amountField = await $('android=new UiSelector().className("android.widget.EditText").instance(0)');
            await amountField .waitForExist();
            await amountField .click();
            const nagadAmount = data.largeAmount.amount;
            await amountField.setValue(nagadAmount.toString());

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

    module.exports = new NagadTransfer();
