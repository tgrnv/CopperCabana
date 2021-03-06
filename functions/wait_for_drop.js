var Promise = require('bluebird')
var chalk = require('chalk');
const data = require('../data.json');

module.exports = (horseman) => {
  let dropTime = Date.UTC(data.drop.year,
                          data.drop.month,
                          data.drop.day,
                          data.drop.hour,
                          data.drop.minute,
                          data.drop.second,
                          data.drop.millisecond);

  console.log(chalk.cyan('ℹ️  Set to start at ' + new Date(dropTime) + (', offset by ' + data.drop.millisecond) + 'ms'));

  return new Promise((resolve, reject) => {
    horseman
      .evaluate(function() {
        console.log('It is now ' + new Date(Date.now()));
      })
      .waitFor(function(dropTime) {
        var now = Date.now();

        if(now >= dropTime) {
          return true;
        };
      }, dropTime, true)
      .then(() => {
        global.startTime = Date.now();
        console.log(chalk.cyan('ℹ️  Drop is now live'));
        resolve(horseman);
      })
      .catch((e) => {
        console.log(chalk.red('❌  Error while waiting for the drop: "' + e + '"'))
      })
  })
}
