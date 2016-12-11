var Promise = require('bluebird')
var chalk = require('chalk');
const data = require('../data.json');

module.exports = (horseman) => {
  var dropTime = data.drop.date + " " + data.drop.time + " " + data.drop.zone;

  return new Promise((resolve, reject) => {
    horseman
      .waitFor(function(dropTime) {
        var time = document.getElementsByTagName('time')[0].innerText;

        if(time === dropTime) {
          return true;
        };
      }, dropTime, true)
      .then(() => {
        console.log(chalk.cyan('ℹ️  Drop is now live'));
        resolve(horseman);
      })
      .catch((e) => {
        console.log(chalk.red('❌  Error while waiting for the drop: "' + e + '"'))
      })
  })
}