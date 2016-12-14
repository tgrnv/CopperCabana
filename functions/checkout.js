let Promise = require('bluebird')
let chalk = require('chalk');
const data = require('../data.json');

module.exports = (horseman) => {
  return new Promise((resolve, reject) => {
    horseman
      .open('https://www.supremenewyork.com/checkout')
      .waitForNextPage()
      .evaluate(function(data) {
        document.getElementById('order_billing_name').value = data.buyer.fullName;
        document.getElementById('order_email').value = data.buyer.email;
        document.getElementById('order_tel').value = data.buyer.phone;
        document.getElementById('bo').value = data.buyer.address;
        document.getElementById('oba3').value = data.buyer.address2;
        document.getElementById('order_billing_address_3').value = data.buyer.address3;
        document.getElementById('order_billing_city').value = data.buyer.city;
        document.getElementById('order_billing_zip').value = data.buyer.zip;
        document.getElementById('cnb').value = data.creditCard.number;
        document.getElementById('vval').value = data.creditCard.cvv;
      }, data)
      .select('#order_billing_country', data.buyer.country)
      .select('#credit_card_type', data.creditCard.type)
      .select('#credit_card_month', data.creditCard.expMonth)
      .select('#credit_card_year', data.creditCard.expYear)
      .click('.terms > .icheckbox_minimal > .iCheck-helper')
      .screenshot('./screenshots/5-Form_Filled.png')
      .click('#cart-footer > #pay > .checkout')
      .then(() => {
        global.finishTime = Date.now();
        console.log(chalk.green('✅  Confirmed payment'));
      })
      .waitForNextPage()
      .screenshot('./screenshots/6-Copped.png')
      .then(() => {
        let copTime = global.finishTime - global.startTime;
        console.log(chalk.bold(chalk.green(chalk.underline('✅  We copped it in ' + copTime + 'ms! Lit!'))));
        console.log(chalk.gray('📬  You should have an order confirmation in your inbox soon.\n'));
        resolve(horseman);
      })
      .catch((e) => {
        console.log(chalk.red('❌  Error while checking out: "' + e + '"'))
      })
  })
}
