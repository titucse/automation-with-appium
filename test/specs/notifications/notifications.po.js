class NotificationsPage {
    async NotificationsPage(){
        //click more
        const moreButton = await $('~অন্যান্য');
        await moreButton.click();
        //click notifications
        const notificationsButton = await $('~নোটিফিকেশন');
        await notificationsButton.click();
    
    }
    async notify(){
        //verify notification
        const notification = await $('~Notice\nYour credit card(****86) is activated.\n09 Oct 2023\n10:00 AM')
        await notification.isDisplayed();
    }
    async navigateback(){
        //navigate back
        const backButton = await $('android=new UiSelector().className("android.view.View").instance(6)');
        await backButton.click();
        //navigate to notifications
        const notificationsButton = await $('~নোটিফিকেশন');
        await notificationsButton.click();
    }    
}

module.exports = new NotificationsPage();