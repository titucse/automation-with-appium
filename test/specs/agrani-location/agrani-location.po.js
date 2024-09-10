class AgraniLocationPage {
    async navigateToAgraniLocationPage() {
        //click more
        const moreButton = await $('~অন্যান্য');
        await moreButton.click();
        //click agrani location
        const agraniLocationButton = await $('android=new UiSelector().description("অগ্রণী লোকেশন")');
        await agraniLocationButton.click();
        // Locate the element
        const agraniLocation = await $('android=new UiSelector().description("অগ্রণী লোকেশন")');

        // Get the text from the element
        const agraniLocationText = await agraniLocation.getText();

        // Perform a simple assertion to check the text
        if (agraniLocationText === 'অগ্রাণী লোকেশন') {
            console.log('Text verification passed.');
        } else {
            console.log('Text verification failed. Expected "অগ্রাণী লোকেশন" but got:', agraniLocationText);
        }
    }
    async unsucesfullAgraniLocation() {
        //click wrong location
        const wrongLocation = await $('~Rajshahi Uni. Branch ATM');
        await wrongLocation.click();
    }
    async navigateback() {
        //click back button
        const backbutton = await $('android=new UiSelector().className("android.view.View").instance(6)');
        await backbutton.click();
        //click agrani location
        const agraniLocation = await $('android=new UiSelector().description("অগ্রণী লোকেশন")');
        await agraniLocation.click();
    }

    async sucessfullAgraniLocation() {
        // Click search
        const search = await $('android=new UiSelector().className("android.widget.EditText")');
        await search.click();

        // Search location
        await search.setValue('Kamalapur');

        // Click branch
        const branch = await $('~Kamalapur Branch ATM');
        await branch.click();

        // See the map
        const map = await $('~ম্যাপ দেখুন');
        await map.click();
        await driver.pause(8000);
        // Verify the map
        const mapVerify = await $('android=new UiSelector().description("Map Marker").instance(1)');
        await mapVerify.click();
        await driver.pause(2000);
        // Locate the map element to verify
        const mapVerify2 = await $('~Kamalapur Branch ATM');
        // Retrieve the text from the map element
        const mapVerify2Text = await mapVerify2.getText();

        // Perform a simple assertion to check the text
        if (mapVerify2Text === 'Kamalapur Branch ATM') {
            console.log('Map verification passed.');
        } else {
            console.log('Map verification failed. Expected "Kamalapur Branch ATM" but got:', mapVerify2Text);
        }
        const button = await $('android=new UiSelector().className("android.widget.Button")');
        await button.click();
    }
}
module.exports = new AgraniLocationPage();