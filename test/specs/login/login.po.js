// login.po.js
class LoginPage {
    async openLoginScreen() {
        await driver.pause(1000);
        const startButton = await $('~শুরু করুন');
        await startButton.click();
        await driver.pause(2000);

    }

    async enterUserName(username) {
        const userName = await $('android=new UiSelector().className("android.widget.EditText").instance(0)');
        await userName.click();
        await driver.pause(1000);
        await userName.clearValue();
        await userName.addValue(username);
    }

    async enterPassword(password) {
        const passwordField = await $('android=new UiSelector().className("android.widget.EditText").instance(1)');
        await passwordField.click();
        await driver.pause(1000);
        await passwordField.clearValue();
        await passwordField.addValue(password);
    }   

    async clickLoginButton() {
        // select checkbox
        await $('//android.widget.CheckBox').click();
        await driver.pause(1000);

        await $('//android.widget.Button[@text="লগইন"]').click();
        await driver.pause(3000);

        // Check the title
        const accountTitle = await $('~AMIYA AHMED');
        await accountTitle.waitForDisplayed();
        await driver.pause(1000);
        return accountTitle.isDisplayed();
    }

    async login(username, password) {
        await this.openLoginScreen();
        await this.enterUserName(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
        await driver.pause(2000);    
    }   
}
module.exports = new LoginPage();