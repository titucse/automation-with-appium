class InterestRatePage {
    async navigatetointrestrate() {
        //click more
        const moreButton = await $('~অন্যান্য');
        await moreButton.click();
        //click interest rate
        const interestRateButton = await $('~মুনাফার হার (%)');
        await interestRateButton.click();
        //wait
        await driver.pause(2000);
    }
    async unsucessfullintrestrate() {
        //click wrong interest rate


    }
    async navigateback() {
        //click back button
        const backButton = await $('android=new UiSelector().className("android.view.View").instance(6)');
        await backButton.click();
        //click interest rate
        const interestRateButton = await $('~মুনাফার হার (%)');
        await interestRateButton.click();
        //wait
        await driver.pause(2000);

    }
    async sucessfullintrestrate() {
        //click generel interest rate
        const generalInterestRate = await $('android=new UiSelector().description("General")');
        await generalInterestRate.click();
        await driver.pause(2000);
        await generalInterestRate.click();
        //click Fixed Deposit Reciept
        const fixedDepositReciept = await $('~Fixed Deposit Receipt (FDR)');
        await fixedDepositReciept.click();
        await driver.pause(2000);
        await fixedDepositReciept.click();
        //click Pension
        const pension = await $('~Pension');
        await pension.click();
        await driver.pause(2000);
        await pension.click();
        //click special deposit
        const specialDeposit = await $('~Special Deposit');
        await specialDeposit.click();
        await driver.pause(2000);
        await specialDeposit.click();
    }
}

module.exports = new InterestRatePage();