class ExchangeRatePage {
    async navigateToExchangeRatePage() {
        //click more
        const moreButton = await $('~অন্যান্য');
        await moreButton.click();
        //click exchange rate
        const exchangeRateButton = await $('~এক্সচেঞ্জ রেট');
        await exchangeRateButton.click();
    }
    async exchangeRateButton() {
        try {
            await driver.execute('mobile: scroll', {
                strategy: 'accessibility id',
                selector: 'THB\nThai Baht\nক্রয় মূল্য\nবিক্রয় মূল্য\n : \n : \n3.30\n3.50'
            });
            console.log('Scrolled using mobile: scroll');
        } catch (error) {
            console.error('Error scrolling using mobile: scroll:', error);
        }
    }

    async verifyexchanfeRate() {
        //verify it is exchange rate page
        const exchangeRate = await $('~এক্সচেঞ্জ রেট');
        const exchangerateText = await exchangeRate.getText();
        if (exchangerateText === 'এক্সচেঞ্জ রেট') {
            console.log('Exchange rate page text verification passed.');
        } else {
            console.log('Exchange rate page text verification failed. Expected "সাধারণ জিজ্ঞাসা" but got:', exchangerateText);
        }
    }
    async navigateback() {
        //navigate back
        const backButton = await $('android=new UiSelector().className("android.view.View").instance(6)');
        await backButton.click();
        //navigate  to exhange rate
        const exchangeRateButton = await $('~এক্সচেঞ্জ রেট');
        await exchangeRateButton.click();
    }

}
module.exports = new ExchangeRatePage();