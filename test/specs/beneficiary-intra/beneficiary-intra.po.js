const data = require('../../data/common.json');
const { pinServer } = require('../../utils/dbUtils');

class IntraBeneficiary {
    async beneficiaryManagementnavigation() {
        // go to transfer menu
        const clicktransfermenu = await $('~ট্রান্সফার');
        // click on transfer menu
        await clicktransfermenu.click();
        // wait for 3 seconds
        await driver.pause(3000);
        // go to beneficiary management
        const beneficiaryManagement = await $('//android.widget.ImageView[@content-desc="বেনিফিশিয়ারি ব্যবস্থাপনা"]');
        // click on beneficiary management
        await beneficiaryManagement.click();
        // wait for 3 seconds
        await driver.pause(3000);
        // check if the page is loaded
        const title = await $('//android.widget.ImageView[@content-desc="বেনিফিশিয়ারি ব্যবস্থাপনা ব্যাংক অ্যাকাউন্ট/কার্ড বেনিফিশিয়ারি"]');
        // verify that the page title is displayed
        await title.isDisplayed();
    }

    async beneficiarymanagementcontains() {
        // check floating button contains
        const addbeneficiaryfloatingbutton = await $('//android.widget.ImageView[@content-desc="বেনিফিশিয়ারি যোগ করুন"]');
        // check if the floating button is displayed
        await addbeneficiaryfloatingbutton.isDisplayed();
        // wait for 3 seconds
        await driver.pause(3000);
        // check search beneficiary contains
        const searchbeneficiary = await $('//android.widget.EditText[@content-desc="বেনিফিশিয়ারি অনুসন্ধান করুন"]');
        // check if the search beneficiary is displayed
        await searchbeneficiary.isDisplayed();
        // wait for 3 seconds
        await driver.pause(3000);
    }

    async beneficiaryTitleandSubtitle() {
        // check if the page title is showing
        const title = await $('বেনিফিশিয়ারি ব্যবস্থাপনা\nব্যাংক অ্যাকাউন্ট/কার্ড বেনিফিশিয়ারি');
        // wait for 3 seconds
        await driver.pause(3000);
        // check if the page title and subtitle is displayed
        await title.isDisplayed();
    }

    async beneficiarylabel() {
        // Verify beneficiary management label "Search Beneficiary"
        const searchbeneficiarylabel = await $('বেনিফিশিয়ারি অনুসন্ধান');
        // check if the search beneficiary label is displayed
        await searchbeneficiarylabel.isDisplayed();
    }

    async placeholderText() {
        // Verify placeholder text "Search Beneficiary"
        const placeholder = await $('android.widget.EditText');
        // check if the placeholder text is displayed
        await placeholder.isDisplayed();
    }

    async beneficiarynotfound() {
        // wait for 3 seconds
        await driver.pause(3000);
        // check if the beneficiary not found alert is displayed
        const title = await $('//android.widget.TextView[@content-desc="বেনিফিশিয়ারি পাওয়া যায়নি"]');
        // wait for 3 seconds
        await driver.pause(3000);
        // verify that the beneficiary not found alert is displayed
        await title.isDisplayed();
    }

    async clickfloatingbutton() {
        // wait for 3 seconds
        await driver.pause(3000);
        // check on the floating button
        const floatingbutton = await $('//android.widget.Button');
        // verify floating button is displayed
        await floatingbutton.isDisplayed();
        // click on the floating button
        await floatingbutton.click();
        // wait for 3 seconds
        await driver.pause(3000);
    }

    async tapFloatingbutton() {
        const floatingButton = await $('android=new UiSelector().className("android.widget.Button")');
        const isDisplayed = await floatingButton.isDisplayed();
        const isEnabled = await floatingButton.isEnabled();

        if (isDisplayed && isEnabled) {
            await floatingButton.click();
        } else {
            console.log("Floating button is not visible or not enabled");
        }
    }

    async selectBeneficiaryType() {
        await driver.pause(1000);
        // verify that beneficiary add screen is showing
        const title = await $('~অ্যাকাউন্ট/কার্ড বেনিফিশিয়ারি\nবেনিফিশিয়ারি অ্যাড');
        // verify that the screen title is displayed
        await title.isDisplayed();
        await driver.pause(1000);
        // Tap beneficiary type input field
        // const beneficiaryType = await $('android=new UiSelector().className("android.view.View").instance(10)');
        const beneficiaryType = await $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[3]');
        // click on beneficiary type input field
        await beneficiaryType.click();
        // wait for 3 seconds
        await driver.pause(3000);
        // Open beneficiary type bottom sheet
        const beneficiaryTypeBottomSheet = await $('~বেনিফিশিয়ারি ধরণ নির্বাচন করুন');
        // verify that the beneficiary type title is displayed
        await beneficiaryTypeBottomSheet.isDisplayed();
        // Select other bank account beneficiary type
        const otherBankAccount = await $('~অগ্রণী ব্যাংক অ্যাকাউন্ট');
        // click on other bank account beneficiary type
        await otherBankAccount.click();
        // wait for 3 seconds
        await driver.pause(3000);
    }

    async addBeneficiary() {
        // Beneficiary add screen is showing
        const beneficiaryAddScreen = await $('~অ্যাকাউন্ট/কার্ড বেনিফিশিয়ারি\nবেনিফিশিয়ারি অ্যাড');
        // verify that the screen title is displayed
        await beneficiaryAddScreen.isDisplayed();
        // Account number input field is visible
        const intraaccountNumber = await $('android=new UiSelector().className("android.widget.EditText")');
        // verify that the account number input field is displayed
        await intraaccountNumber.isDisplayed();
        // Tap account number input field
        await intraaccountNumber.click();
        const accountNumber = data.intraBeneficiary.accountNo;
        // Enter account number
        await intraaccountNumber.setValue(accountNumber.toString());
        // wait for 3 seconds
        await driver.pause(3000);
        // verify next button is visible
        const nextButton = await $('~পরবর্তী');
        // verify next button is enabled
        await nextButton.isEnabled();
        // click on next button
        await nextButton.click();
        // wait for 3 seconds
        await driver.pause(1000);
        // add beneficiary button is visible
        const addBeneficiaryButton = await $('~বেনিফিশিয়ারি অ্যাড');
        // verify add beneficiary button is enabled
        await addBeneficiaryButton.isEnabled();
        // click on add beneficiary button
        await addBeneficiaryButton.click();
        // go to beneficiary management screen
        const title = await $('~বেনিফিশিয়ারি ব্যবস্থাপনা\nব্যাংক অ্যাকাউন্ট/কার্ড বেনিফিশিয়ারি');
        // verify that the page title is displayed
        await title.isDisplayed();
        // wait for 3 seconds
        await driver.pause(2000);

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

    async AgaintapFloatingbutton() {
        // wait for 3 seconds
        await driver.pause(3000);
        const floatingButton = await $('android=new UiSelector().className("android.widget.Button")');
        const isDisplayed = await floatingButton.isDisplayed();
        const isEnabled = await floatingButton.isEnabled();

        if (isDisplayed && isEnabled) {
            await floatingButton.click();
        } else {
            console.log("Floating button is not visible or not enabled");
        }
    }

    async duplicateselectBeneficiaryType() {
        await driver.pause(1000);
        // verify that beneficiary add screen is showing
        const title = await $('~অ্যাকাউন্ট/কার্ড বেনিফিশিয়ারি\nবেনিফিশিয়ারি অ্যাড');
        // verify that the screen title is displayed
        await title.isDisplayed();
        await driver.pause(1000);
        // Tap beneficiary type input field
        const beneficiaryType = await $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[3]');
        // click on beneficiary type input field
        await beneficiaryType.click();
        // wait for 3 seconds
        await driver.pause(3000);
        // Open beneficiary type bottom sheet
        const beneficiaryTypeBottomSheet = await $('~বেনিফিশিয়ারি ধরণ নির্বাচন করুন');
        // verify that the beneficiary type title is displayed
        await beneficiaryTypeBottomSheet.isDisplayed();
        // Select other bank account beneficiary type
        const otherBankAccount = await $('~অগ্রণী ব্যাংক অ্যাকাউন্ট');
        // click on other bank account beneficiary type
        await otherBankAccount.click();
        // wait for 3 seconds
        await driver.pause(3000);
    }

    async duplicateaddBeneficiary() {
        // Beneficiary add screen is showing
        const beneficiaryAddScreen = await $('~অ্যাকাউন্ট/কার্ড বেনিফিশিয়ারি\nবেনিফিশিয়ারি অ্যাড');
        // verify that the screen title is displayed
        await beneficiaryAddScreen.isDisplayed();
        // Account number input field is visible
        const intraaccountNumber = await $('android=new UiSelector().className("android.widget.EditText")');
        // verify that the account number input field is displayed
        await intraaccountNumber.isDisplayed();
        // Tap account number input field
        await intraaccountNumber.click();
        const accountNumber = data.intraBeneficiary.duplicateaccountNo;
        // Enter account number
        await intraaccountNumber.setValue(accountNumber.toString());
        // wait for 3 seconds
        await driver.pause(3000);
        // verify next button is visible
        const nextButton = await $('~পরবর্তী');
        // verify next button is enabled
        await nextButton.isEnabled();
        // click on next button
        await nextButton.click();
        // wait for 3 seconds
        await driver.pause(3000);
        // alert message is showing
        const alertmessage = await $('~এই বেনিফিশিয়ারি ইতিমধ্যে বিদ্যমান');
        // verify alert message is displayed
        await alertmessage.isDisplayed();       
        // cancel button is visible
        const cancelButton = await $('~বাতিল');
        // tap on cancel button
        await cancelButton.click();
        // wait for 1 seconds
        await driver.pause(1000);
        // yes button is visible
        const yesButton = await $('~হ্যাঁ');
        // tap on yes button
        await yesButton.click();
    }
}

module.exports = new IntraBeneficiary();