var data = require('../data.json');
var Promise = require('bluebird');
var chalk = require('chalk');

module.exports = (horseman) => {
  return new Promise((resolve, reject) => {
    horseman
      .open(data.product.categoryURL)
      .then(function() {
        console.log(chalk.green('✅  Opened ' + data.product.categoryURL + ' successfully'))
      })
      .screenshot('./screenshots/1-Category_Page.png')
      .then(() => {
        resolve(horseman);
      })
      .catch((e) => {
        console.log(chalk.red('❌  Error while opening URL: "' + e.message + '"'))
      })
  })
}
