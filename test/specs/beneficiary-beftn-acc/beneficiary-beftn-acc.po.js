const data = require('../../data/common.json');
const { pinServer } = require('../../utils/dbUtils');

class BEFTNBeneficiaryAcc {

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
        await driver.pause(1000);
        // check if the page is loaded
        const title = await $('~বেনিফিশিয়ারি ব্যবস্থাপনা\nব্যাংক অ্যাকাউন্ট/কার্ড বেনিফিশিয়ারি');
        // verify that the page title is displayed
        await title.isDisplayed();
    }

    async tapFloatingbutton() {
        await driver.pause(1000);
        const floatingButton = await $('android=new UiSelector().className("android.widget.Button")');
        const isDisplayed = await floatingButton.isDisplayed();
        const isEnabled = await floatingButton.isEnabled();

        if (isDisplayed && isEnabled) {
            await floatingButton.click();
        } else {
            console.log("Floating button is not visible or not enabled");
        }
        await driver.pause(1000);
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
        const otherBankAccount = await $('~অন্য ব্যাংক অ্যাকাউন্ট');
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
        const accountNumber = await $('android=new UiSelector().className("android.widget.EditText").instance(0)');
        // verify that the account number input field is displayed
        await accountNumber.isDisplayed();
        // Tap account number input field
        await accountNumber.click();
        const accountNo = data.beftnBeneficiaryacc.accountno;
        // Enter account number
        await accountNumber.setValue(accountNo.toString());
        // wait for 3 seconds
        await driver.pause(1000);
        // Nick name input field is visible
        const NickName = await $('android=new UiSelector().className("android.widget.EditText").instance(1)');
        // verify that the nick name input field is displayed
        await NickName.isDisplayed();
        // Tap nick name input field
        await NickName.click();
        const accountname = data.beftnBeneficiaryacc.nickname;
        // Enter nick name
        await NickName.setValue(accountname.toString());
        // wait for 3 seconds
        await driver.pause(1000);
        // Account holder name input field is visible
        const accountHolderName = await $('android=new UiSelector().className("android.widget.EditText").instance(2)');
        // verify that the account holder name input field is displayed
        await accountHolderName.isDisplayed();
        // Tap account holder name input field
        await accountHolderName.click();
        const accountholdername = data.beftnBeneficiaryacc.accholdername;
        // Enter account holder name
        await accountHolderName.setValue(accountholdername.toString());
        // wait for 3 seconds
        await driver.pause(1000);
        // Mobile Number input field is visible
        const mobileNumber = await $('android=new UiSelector().className("android.widget.EditText").instance(3)');
        // verify that the mobile number input field is displayed
        await mobileNumber.isDisplayed();
        // Tap mobile number input field
        await mobileNumber.click();
        const mobileNo = data.beftnBeneficiaryacc.mobileno;
        // Enter mobile number
        await mobileNumber.setValue(mobileNo.toString());
        // wait for 3 seconds
        await driver.pause(1000);
        // bank name input field is visible
        const bankName = await $('android=new UiSelector().className("android.view.View").instance(26)');
        // click on bank name
        await bankName.click();
        // wait for 3 seconds
        await driver.pause(1000);
        // click search input field
        const searchbankInput = await $('android=new UiSelector().className("android.widget.EditText").instance(0)');
        // click on bank name
        await searchbankInput.click();
        //  search BRAC bank
        await searchbankInput.setValue('BRAC BANK LTD.');
        // showing brac bank
        await searchbankInput.isDisplayed();
        // verify that the bank name input field is displayed   
        const SelectbankName = await $('~BRAC BANK LTD.');
        // click on bank name
        await SelectbankName.click();
        // wait for 3 seconds
        await driver.pause(1000);
        // District name input field is visible
        const districtName = await $('android=new UiSelector().className("android.view.View").instance(31)');
        // click on district name
        await districtName.click();
        // verify that the bank name input field is displayed   
        const SelectdistrictName = await $('android=new UiSelector().description("BAGERHAT")');
        // click on bank name
        await SelectdistrictName.click();
        // wait for 3 seconds
        await driver.pause(1000);
        // Branch name input field is visible
        const branchName = await $('android=new UiSelector().className("android.view.View").instance(35)');
        // click on branch name
        await branchName.click();

        // wait for 3 seconds
        await driver.pause(1000);
        // verify that the bank name input field is displayed   
        const SelectbranchName = await $('~BAGERHAT SME');
        // click on bank name
        await SelectbranchName.click();
        // add beneficiary button is visible
        const addBeneficiaryButton = await $('android=new UiSelector().description("বেনিফিশিয়ারি অ্যাড")');
        await addBeneficiaryButton.waitForDisplayed();

        // click on add beneficiary button
        await addBeneficiaryButton.click();
    }

    async duplicateaddBeneficiary() {
        await this.tapFloatingbutton();
        await this.selectBeneficiaryType();
        await this.addBeneficiary();

        // alert message is visible
        const alertmessage = await $('~এই বেনিফিশিয়ারি ইতিমধ্যে বিদ্যমান');
        // verify alert message is displayed
        await alertmessage.isDisplayed();
        // ok button is visible
        const okButton = await $('~ঠিক আছে');
        // tap on ok button
        await okButton.click();
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
}

module.exports = new BEFTNBeneficiaryAcc();