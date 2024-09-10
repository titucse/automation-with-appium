const data = require('../../data/common.json');
class EmiCalculatorPage {
    async navigateemiCalculator() {
        //click more
        const moreButton = await $('~অন্যান্য');
        await moreButton.click();
        //click loan calculator
        const loanCalculatorButton = await $('~লোন ক্যালকুলেটর');
        await loanCalculatorButton.click();
        //click emi calculator
        const emiCalculatorButton = await $('~EMI ক্যালকুলেটর');
        await emiCalculatorButton.click();


    }
    async calculateEmimonth() {
        const amount = data.emi.emiAmount
        const rate = data.emi.emiTenure
        const duration = data.emi.time
        //click loan amount
        const loanAmount = await $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.EditText[1]')
        await loanAmount.click()
        await loanAmount.setValue(amount);
        //click interest rate
        const interestRate = await $('android=new UiSelector().className("android.widget.EditText").instance(1)');
        await interestRate.click()
        await interestRate.setValue(rate);
        //enter time
        const time = await $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.EditText[3]')
        await time.click();
        await time.setValue(duration);
        //click calculate
        const calculateButton = await $('~ক্যালকুলেট');
        await calculateButton.click();

    }
    async calculatedamount() {
        //calculted ammount
        const emi = await $('~ কিস্তি / মাস');
        await emi.isDisplayed()
    }

    async navigateemiCalculatorback() {
        //click back
        const backButton = await $('android=new UiSelector().className("android.view.View").instance(7)');
        await backButton.click();
        //click back
        const backButton2 = await $('android=new UiSelector().className("android.view.View").instance(6)');
        await backButton2.click();
        //click loan calculator
        const loanCalculatorButton = await $('~লোন ক্যালকুলেটর');
        await loanCalculatorButton.click();
        //click emi calculator
        const emiCalculatorButton = await $('~EMI ক্যালকুলেটর');
        await emiCalculatorButton.click();
    }

    async disabledbutton() {
        const amount = data.emi.emiAmount
        const rate = data.emi.emiTenure

        //click loan amount
        const loanAmount = await $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.EditText[1]')
        await loanAmount.click()
        await loanAmount.setValue(amount);
        //click interest rate
        const interestRate = await $('android=new UiSelector().className("android.widget.EditText").instance(1)');
        await interestRate.click()
        await interestRate.setValue(rate);
        //button is disabled
        const calculateButton = await $('~ক্যালকুলেট');
        const isEnabled = await calculateButton.isEnabled();
        expect(isEnabled).toBe(false);
    }
}

module.exports = new EmiCalculatorPage();