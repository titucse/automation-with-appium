class FaqPage {
    async navigateToFaqPage() {
        //click more
        const moreButton = await $('~অন্যান্য');
        await moreButton.click();
        //click faq
        const faqButton = await $('~সাধারণ জিজ্ঞাসা');
        await faqButton.click();
    }
    async faqButtonwrong() {
        //verify faq page
        const faq = await $('~সাধারণ জিজ্ঞাসা');
        await expect(faq).toHaveText('সাধারণ জিজ্ঞাসা');

        //click a question
        const question = await $('~"অগ্রণী Smart App" কী ?');
        //verify question visible
        await expect(question).toHaveText('"অগ্রণী Smart App" কী ?');
        //click on the question
        await question.click();
    }
    async navigateback() {
        //navigate back
        const backButton = await $('android=new UiSelector().className("android.view.View").instance(6)');
        await backButton.click();
        //click faq
        const faqButton = await $('~সাধারণ জিজ্ঞাসা');
        await faqButton.click();
    }
    async sucessfullfaq() {
        // Verify FAQ page
        const faq = await $('~সাধারণ জিজ্ঞাসা');
        const faqText = await faq.getText();
        if (faqText === 'সাধারণ জিজ্ঞাসা') {
            console.log('FAQ page text verification passed.');
        } else {
            console.log('FAQ page text verification failed. Expected "সাধারণ জিজ্ঞাসা" but got:', faqText);
        }

        // Click a question
        const question = await $('~"অগ্রণী Smart App" কী ?');
        await question.click(); // Click on the question

        // Verify question visible
        const questionText = await question.getText();
        if (questionText === '"অগ্রণী Smart App" কী ?') {
            console.log('Question text verification passed.');
        } else {
            console.log('Question text verification failed. Expected "\"অগ্রণী Smart App\" কী ?" but got:', questionText);
        }

        // Verify answer
        const answer = await $('~যে App এর ব্যবহার করে অগ্রণী ব্যাংক লিমিটেড কর্তৃক মোবাইলের মাধ্যমে গ্রাহক পর্যায়ে ইন্টারনেট ব্যাংকিং সেবা প্রদান করা হবে তাই "অগ্রণী Smart App"। এর মাধ্যমে গ্রাহক ঘরে বসে বেশকিছু দৈনন্দিন ব্যাংকিং কার্যক্রম সম্পন্ন করতে পারবেন। যেমনঃ হিসাবের স্থিতি অনুসন্ধান, এক হিসাব থেকে অন্য হিসাবে টাকা স্থানান্তর, বিল প্রদান ইত্যাদি।');
        const answerText = await answer.getText();
        if (answerText === 'যে App এর ব্যবহার করে অগ্রণী ব্যাংক লিমিটেড কর্তৃক মোবাইলের মাধ্যমে গ্রাহক পর্যায়ে ইন্টারনেট ব্যাংকিং সেবা প্রদান করা হবে তাই "অগ্রণী Smart App"। এর মাধ্যমে গ্রাহক ঘরে বসে বেশকিছু দৈনন্দিন ব্যাংকিং কার্যক্রম সম্পন্ন করতে পারবেন। যেমনঃ হিসাবের স্থিতি অনুসন্ধান, এক হিসাব থেকে অন্য হিসাবে টাকা স্থানান্তর, বিল প্রদান ইত্যাদি।') {
            console.log('Answer text verification passed.');
        } else {
            console.log('Answer text verification failed. Expected "যে App এর ব্যবহার করে অগ্রণী ব্যাংক লিমিটেড কর্তৃক মোবাইলের মাধ্যমে গ্রাহক পর্যায়ে ইন্টারনেট ব্যাংকিং সেবা প্রদান করা হবে তাই "অগ্রণী Smart App"। এর মাধ্যমে গ্রাহক ঘরে বসে বেশকিছু দৈনন্দিন ব্যাংকিং কার্যক্রম সম্পন্ন করতে পারবেন। যেমনঃ হিসাবের স্থিতি অনুসন্ধান, এক হিসাব থেকে অন্য হিসাবে টাকা স্থানান্তর, বিল প্রদান ইত্যাদি।" but got:', answerText);
        }
    }
}

module.exports = new FaqPage();