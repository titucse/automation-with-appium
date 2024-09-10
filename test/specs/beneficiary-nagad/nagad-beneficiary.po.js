const data = require('../../data/common.json');
const { pinServer } = require('../../utils/dbUtils');

class nagadBeneficiary {

    async clickNagadBeneficiaryManagement() {
        const nagadCard = await $('android=new UiSelector().description("নগদ\nট্রান্সফার")');
        // Wait for it to be visible
        await nagadCard.waitForDisplayed();
        // click on Nagad Transfer card
        await nagadCard.click();
        // click on Beneficiary Management
        const beneficiaryManagement = await $('android=new UiSelector().description("বেনিফিশিয়ারি ব্যবস্থাপনা")');
        // Wait for it to be visible
        await beneficiaryManagement.waitForDisplayed();
        // click on Beneficiary Management
        await beneficiaryManagement.click();
        await driver.pause(2000);
    }

    async clickfloatingbutton() {
        // floating button
        const floatingButton = await $('android=new UiSelector().className("android.widget.Button")');
        const isDisplayed = await floatingButton.isDisplayed();
        const isEnabled = await floatingButton.isEnabled();

        if (isDisplayed && isEnabled) {
            await floatingButton.click();
        } else {
            console.log("Floating button is not visible or not enabled");
        }
    }

    async addNagadbeneficiary() {
        await driver.pause(2000);
        // enter nagad number
        const accountNumberField = await $('android=new UiSelector().className("android.widget.EditText")');
        // Wait for it to be visible
        await accountNumberField.waitForDisplayed();
        await accountNumberField.click();
        await accountNumberField.clearValue();
        await driver.pause(1000);
        // Type the account number                   
        await accountNumberField.addValue((data.mfsBeneficiaryInfo.nagadNumber).toString());
        await driver.pause(3000);

        const nextButton = await $('~পরবর্তী');
        // Wait for it to be visible
        await nextButton.waitForDisplayed();
        // click on NEXT
        await nextButton.click();
        await driver.pause(2000);
        // enter nagad number
        const nickName = await $('android=new UiSelector().className("android.widget.EditText")');
        // Wait for it to be visible
        await nickName.waitForDisplayed();
        await driver.pause(1000);
        await nickName.click();
        await nickName.clearValue();
        await driver.pause(1000);
        // Type the account number                   
        await nickName.addValue(data.mfsBeneficiaryInfo.nickName);
        await driver.pause(3000);

        const nickNamebutton = await $('~পরবর্তী');
        // Wait for it to be visible
        await nickNamebutton.waitForDisplayed();
        // click on NEXT
        await nickNamebutton.click();
        await driver.pause(3000);

        // Execute the query after all test       
        (async () => {
            try {
                const result = await pinServer();
                console.log('Result:', result);
            } catch (error) {
                console.error('Error executing query:', error);
            }
        })();
    }

    async addNagadbeneficiaryWithoutNumber() {
        await driver.pause(2000);
        // enter nagad number
        const accountNumberField = await $('android=new UiSelector().className("android.widget.EditText")');
        // Wait for it to be visible
        await accountNumberField.waitForDisplayed();
        await accountNumberField.click();
        await accountNumberField.clearValue();
        await driver.pause(2000);

        const nextButton = await $('~পরবর্তী');
        const isDisplayed = await nextButton.isDisplayed();
        const isEnabled = await nextButton.isEnabled();

        // Check if the button is displayed and not enabled
        if (isDisplayed && !isEnabled)
            console.log("Next button is not  enabled.");
    }
}

module.exports = new nagadBeneficiary();


