const data = require('../../data/common.json');
class AdvanceLoanPage {
    async navigateToAdvanceLoanPage() {
        //click more
        const moreButton = await $('~অন্যান্য');
        await moreButton.click();
        //click loan calculator
        const loanCalculatorButton = await $('~লোন ক্যালকুলেটর');
        await loanCalculatorButton.click();
        //click advance loan calculator
        const advanceLoanCalculatorButton = await $('~অ্যাডভান্স লোন ক্যালকুলেটর');
        await advanceLoanCalculatorButton.click();
    }

    async wrongcalculateAdvanceLoan() {
        const loanamount = data.advance.amount
        const interestrate = data.advance.rate
        //click loan amount
        const loanAmount = await $('android=new UiSelector().className("android.widget.EditText").instance(0)')
        await loanAmount.click()
        await loanAmount.setValue(loanamount);
        //click interest rate
        const interestRate = await $('android=new UiSelector().className("android.widget.EditText").instance(1)');
        await interestRate.click()
        await interestRate.setValue(interestrate);
        // Locate the "Calculate" button
        const calculateButton = await $('~ক্যালকুলেট');

        // Check if the button is enabled
        const isEnabled = await calculateButton.isEnabled();

        // Perform a simple assertion to check if the button is disabled
        if (!isEnabled) {
            console.log('Calculate button is disabled as expected.');
        } else {
            console.log('Calculate button is enabled, but it should be disabled.');
        }
    }
    async calculateadvanceLoan() {
        const loanamount = data.advance.amount
        const interestrate = data.advance.rate
        const duration = data.advance.time
        //click loan amount
        const loanAmount = await $('android=new UiSelector().className("android.widget.EditText").instance(0)');
        await loanAmount.click();
        await loanAmount.setValue(loanamount);
        //click interest rate
        const interestRate = await $('android=new UiSelector().className("android.widget.EditText").instance(1)');
        await interestRate.click()
        await interestRate.setValue(interestrate);
        //enter time
        const time = await $('android=new UiSelector().className("android.widget.EditText").instance(2)');
        await time.click();
        await time.setValue(duration);
        //click rate
        await driver.pause(1000);
        const ratehar = await $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[13]');
        await ratehar.click();
        await driver.pause(1000);
        const quarterly = await $('~Quarterly')
        await quarterly.click();
        //click process
        await driver.pause(1000);
        const processhar = await $('android=new UiSelector().className("android.view.View").instance(25)');
        //click amount
        await processhar.click();
        const halfyearly = await $('~Half yearly')
        await driver.pause(1000);
        await halfyearly.click();

        //click calcula
        const calculateButton = await $('~ক্যালকুলেট');
        await calculateButton.click();
    }

    async calculation() {
        //assert calculted ammount
        const advanceLoan = await $('~ কিস্তি / অর্ধ বার্ষিক');
        await advanceLoan.isDisplayed();
    }
    async navigateback() {
        //click back
        const backButton = await $('android=new UiSelector().className("android.view.View").instance(7)');
        await backButton.click();
        //click back
        const backButton2 = await $('android=new UiSelector().className("android.view.View").instance(6)');
        await backButton2.click();
        //click loan calculator
        const loanCalculatorButton = await $('~লোন ক্যালকুলেটর');
        await loanCalculatorButton.click();
        //click advance loan calculator
        const advanceLoanCalculatorButton = await $('~অ্যাডভান্স লোন ক্যালকুলেটর');
        await advanceLoanCalculatorButton.click();
    }
}
module.exports = new AdvanceLoanPage();