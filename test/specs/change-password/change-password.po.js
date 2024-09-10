const data = require('../../data/common.json'); 
class ChangePasswordPage {
    async changePasswordnavigation() {  
        // Logout after tests
        await driver.pause(2000);
        const doerlogo = await $('android=new UiSelector().className("android.widget.ImageView").instance(1)');
        //click on doer icon
        await doerlogo.click();
        await driver.pause(2000);
        const changepassbutton =  await $('android=new UiSelector().description("পাসওয়ার্ড পরিবর্তন")');
        //click on change password 
        await changepassbutton.click();
        await driver.pause(2000);
      }
      async changingpassword(){
        //read the value from the common.json file
        const oldpass = data.changepassword.oldPassword
        const oldpassword = await $('android=new UiSelector().className("android.widget.EditText")');
        await oldpassword.click();
        await driver.pause(1000);
        await oldpassword.clearValue();
        await oldpassword.setValue(oldpass);

         //click on 'বাতিল button'
         const backbutton = await $('android=new UiSelector().description("বাতিল")');
         await backbutton.waitForDisplayed();
         await backbutton.click();
         //confirm cancel
         const yesButton = await $('android=new UiSelector().description("হ্যাঁ")');
         await yesButton.waitForDisplayed();
         await yesButton.click();
         await driver.pause(1000);       
      }
    async wrongpassword(){
        // read the value from the common.json file
        const wrongpass = data.changepassword.wrongpassword;
        //click old password input field
        const oldpassword = await $('android=new UiSelector().className("android.widget.EditText")');
        await oldpassword.click();
        // Enter the wrong old password text
        await oldpassword.setValue(wrongpass);
        //click new password input field
        const newpassword = await $('android=new UiSelector().className("android.widget.EditText").instance(1)');
        await newpassword.click();
        // Enter the new password text
        await newpassword.setValue(wrongpass);
        //click confirm password input field
        const confirmpassword = await $('android=new UiSelector().className("android.widget.EditText").instance(2)');
        await confirmpassword.click();
        // Enter the confirm password text
        await confirmpassword.setValue(wrongpass);
        //click on save button
        const savebutton = await $('~সেভ করুন');
        await savebutton.click();
        //shows error message
        const errormessage = await $('android=new UiSelector().className("android.view.View").instance(7)');
        //verify error message
        expect(errormessage).toHaveText('পুরানো পাসওয়ার্ড মিলছে না')
        }           
    }  

module.exports = new ChangePasswordPage();