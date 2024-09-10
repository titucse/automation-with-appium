class CustomerSupportPage {
    async navigateToCustomerSupportPage() {
        //click on doer icon
        await driver.pause(2000);
        const doerlogo = await $('android=new UiSelector().className("android.widget.ImageView").instance(1)');
        //click on doer icon
        await doerlogo.click();
        
        ///click on customer support
        const customersupportbutton = await $('~কাস্টমার সাপোর্ট');
        await customersupportbutton.click();
}
async verifyCustomerSupport(){
    //verify customer support
    const customersupport = await $('~কাস্টমার সাপোর্ট');
    const customersupporttext = await customersupport.getText();
    if (customersupporttext === 'কাস্টমার সাপোর্ট') {
        console.log('Text verification passed.');
    }
    else {
        console.log('Text verification failed. Expected "কাস্টমার সাপোর্ট" but got:', customersupporttext);
    }
     
}
async navigateback(){
    //click back button
    const backbutton = await $('android=new UiSelector().className("android.view.View").instance(6)');
    await backbutton.click();
    //click on doer icon
    const doerlogo = await $('android=new UiSelector().className("android.widget.ImageView").instance(1)');
    await doerlogo.click();
    await driver.pause(2000);
    ///click on customer support
    const customersupportbutton = await $('~কাস্টমার সাপোর্ট');
    await customersupportbutton.click();

}
async customerSupport(){
    //verify customer support
    const customersupport = await $('~যে কোন প্রয়োজনে আমাদের হটলাইন নাম্বারে যোগাযোগ করুন অথবা ইমেইল করুনঃ');
    const customersupporttext = await customersupport.getText();
    if (customersupporttext === 'যে কোন প্রয়োজনে আমাদের হটলাইন নাম্বারে যোগাযোগ করুন অথবা ইমেইল করুনঃ') {
        console.log('Text verification passed.');
    }
    else {
        console.log('Text verification failed. Expected "যে কোন প্রয়োজনে আমাদের হটলাইন নাম্বারে যোগাযোগ করুন অথবা ইমেইল করুনঃ" but got:', customersupporttext);
    }
    //verify customer support contact
    const customersupportcontact = await $('~09606606606');
    const customersupportcontacttext = await customersupportcontact.getText();
    if (customersupportcontacttext === '09606606606') {
        console.log('Text verification passed.');
    }
    else {
        console.log('Text verification failed. Expected "09606606606" but got:', customersupportcontacttext);
    }
    //verify customer support email
    const customersupportemail = await $('~support@doer.com.bd');
    const customersupportemailtext = await customersupportemail.getText();
    if (customersupportemailtext === 'support@doer.com.bd') {
        console.log('Text verification passed.');
    }
    else {
        console.log('Text verification failed. Expected ')
    }
}}
module.exports = new CustomerSupportPage();