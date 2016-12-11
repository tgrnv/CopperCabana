let Promise = require('bluebird')
let chalk = require('chalk');

module.exports = (previousResolve) => {
  return new Promise((resolve, reject) => {
    let horseman = previousResolve[0];
    let productUrl = previousResolve[1];

    horseman
      .open(productUrl)
      .screenshot('./screenshots/2-Product_Page.png')
      .then(() => {
        console.log(chalk.green('✅  Opened ' + productUrl + ' successfully'))
        resolve(horseman);
      })
      .catch((e) => {
        console.log(chalk.red('❌  Error while opening the product page: "' + e.message + '"'))
      })
  })

}
