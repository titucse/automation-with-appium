class AgraniMapPage {
    async navigateagraniMap() {
        //click more
        const moreButton = await $('~অন্যান্য');
        await moreButton.click();
        //click agrani map
        const agraniMapButton = await $('android=new UiSelector().description("অগ্রণী ম্যাপ")');
        await agraniMapButton.click();
        //wait
        await driver.pause(3000);

    }
    async unsucesfullAgraniMap() {
        //click wrong location
        const wrongLocation = await $('android=new UiSelector().description("Map Marker").instance(1)');
        await wrongLocation.click();
        //verify wrong location
        const wrongLocationVerify = await $('android=new UiSelector().className("android.view.View").instance(5)');
        await expect(agraniLocation).toHaveText('Sher e bangla Agriculture University Branch, Dhaka');
        //close the location
        const closeLocation = await $('android=new UiSelector().className("android.widget.Button")');
    }
    async navigateback() {
        //click back button
        const backbutton = await $('android=new UiSelector().className("android.view.View").instance(6)');
        await backbutton.click();
        //click agrani map
        const agraniMapButton = await $('android=new UiSelector().description("অগ্রণী ম্যাপ")');
        await agraniMapButton.click();
        //wait
        await driver.pause(3000);
    }
    async sucessfullAgraniMap() {
        await driver.pause(2000);
        //click correct location
        const searchLocation = await $('android=new UiSelector().className("android.widget.ImageView").instance(3)');
        await searchLocation.click();
        await driver.pause(2000)
        await searchLocation.addValue('Shyamoli');
        await searchLocation.isDisplayed();

        await driver.pause(5000);

        // Locate the element
        const locationVerify = await $('android=new UiSelector().description("Shyamoli Branch GRG ATM")');
        await locationVerify.click();
        // // Get the text from the element
        // const locationText = await locationVerify.getText();

        // // Perform a simple assertion to check the text
        // if (locationText === 'Shyamoli Branch GRG ATM') {
        //     console.log('Text verification passed.');
        // } else {
        //     console.log('Text verification failed. Expected "Shyamoli Branch GRG ATM" but got:', locationText);
        // }
        //close the location
        const closeLocation = await $('android=new UiSelector().className("android.widget.Button")');
    }
}

module.exports = new AgraniMapPage();