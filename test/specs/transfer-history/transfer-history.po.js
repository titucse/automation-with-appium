const data = require('../../data/common.json');

class transferHistoryPage {

    async navigateToTransferHistoryPage() {
        //click history
        const moreButton = await $('~হিস্টোরি');
        await moreButton.waitForDisplayed();
        await moreButton.click();
        //click last 25 transactions
        const transferHistory = await $('~ট্রান্সফার হিস্টোরি');
        await transferHistory.click();
        await driver.pause(1000);
    }

    async accountSelection() {
          // account select
          const fromAccDropdown = await $('//*[contains(@content-desc, "অ্যাকাউন্ট নির্বাচন করুন")]');
          await fromAccDropdown.waitForDisplayed();
          await fromAccDropdown.click();
          await driver.pause(1000);
          const fromAccountNo = data.accountInfo.fromAccountNo;
          let fromAcc = await driver.$(`//*[contains(@content-desc, "${fromAccountNo}")]`);
          await fromAcc.click();
    }
}

module.exports = new transferHistoryPage();
