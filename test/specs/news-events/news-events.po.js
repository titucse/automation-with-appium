class NewsEventsPage {
    async navigatreToNewsEventsPage() {
        //click more
        await driver.pause(2000);
        const moreButton = await $('~অন্যান্য');
        await moreButton.click();
        //click news events
        const newsEventsButton = await $('~নিউজ এন্ড ইভেন্টস');
        await newsEventsButton.click();
        //wait
        await driver.pause(2000);
    }

    async verifynews() {
        //verify news events page
        const newsEvents = await $('~নিউজ এন্ড ইভেন্টস');
        const newsEventsText = await newsEvents.getText();
        if (newsEventsText === 'নিউজ এন্ড ইভেন্টস') {
            console.log('Text verification passed.');
        }
        else {
            console.log('Text verification failed. Expected "নিউজ এন্ড ইভেন্টস" but got:', newsEventsText)
        }
    }
    async navigateback() {
        //click back button
        const backbutton = await $('android=new UiSelector().className("android.view.View").instance(6)');
        //click news events
        const newsEventsButton = await $('~নিউজ এন্ড ইভেন্টস');
        await newsEventsButton.click();
        //wait for load
        await driver.pause(2000);
    }
    async sucessfullNewsEvents() {
        //   //scroll news
        //     await driver.executeScript("mobile: scroll", { direction: "down" });
        //     //scroll up
        //     await driver.executeScript("mobile: scroll", { direction: "up" });
        //click news
        // const news = await $('android=new UiSelector().text(" 04-Feb-2021 | Grand Opening of Bangla Version of Agrani Bank Limited Website")');
        // await news.click();

    }
}

module.exports = new NewsEventsPage();