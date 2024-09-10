class SeeAccountBalancePage {
    async balanceCheck() {
        const balanceCheck = await $('android=new UiSelector().description("ব্যালেন্স দেখুন").instance(0)');
        await balanceCheck.waitForDisplayed();
        await balanceCheck.click();
    }          
}

module.exports = new SeeAccountBalancePage();