var Promise = require('bluebird')
var chalk = require('chalk');
const data = require('../data.json');

module.exports = (horseman) => {
  return new Promise((resolve, reject) => {
    horseman
      .open('https://www.supremenewyork.com/checkout')
      .waitForNextPage()
      .evaluate(function(ccNumber) {
        var ccField = document.getElementById('cnb');
        ccField.value = ccNumber;
      }, data.creditCard.number)
      .type('#order_billing_name', data.buyer.fullName)
      .type('#order_email', data.buyer.email)
      .type('#order_tel', data.buyer.phone)
      .type('#bo', data.buyer.address)
      .type('#oba3', data.buyer.address2)
      .type('#order_billing_address_3', data.buyer.address3)
      .type('#order_billing_city', data.buyer.city)
      .type('#order_billing_zip', data.buyer.zip)
      .select('#order_billing_country', data.buyer.country)
      .select('#credit_card_type', data.creditCard.type)
      .select('#credit_card_month', data.creditCard.expMonth)
      .select('#credit_card_year', data.creditCard.expYear)
      .type('#vval', data.creditCard.cvv)
      .click('.terms > .icheckbox_minimal > .iCheck-helper')
      .screenshot('./screenshots/5-Form_Filled.png')
      .click('.checkout')
      .then(() => {
        console.log(chalk.green('✅  Confirmed payment'));
      })
      .waitForNextPage()
      .screenshot('./screenshots/6-Copped.png')
      .then(() => {
        console.log(chalk.bold(chalk.green(chalk.underline('✅  We copped it! Take a deep breath and enjoy not taking an L!'))));
        console.log(chalk.gray('📬  You should have an order confirmation in your inbox soon.\n'));
        resolve(horseman);
      })
      .catch((e) => {
        console.log(chalk.red('❌  Error while checking out: "' + e + '"'))
      })
  })
}
