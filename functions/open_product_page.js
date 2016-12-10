var Promise = require('bluebird')
var chalk = require('chalk');

module.exports = (previousResolve) => {
  return new Promise((resolve, reject) => {
    var horseman = previousResolve[0];
    var productUrl = previousResolve[1];

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
