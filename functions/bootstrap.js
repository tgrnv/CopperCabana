let Promise = require('bluebird');
let chalk = require('chalk');
const data = require('../data.json');

module.exports = (horseman) => {
  return new Promise((resolve, reject) => {
    horseman
      .on('urlChanged', (targetUrl) => {
        console.log(chalk.cyan('ℹ️  URL changed to ' + targetUrl));
      })
      .on('consoleMessage', (msg) => {
        console.log('Phantom browser threw a console message: ' + msg);
      })
      .on('error', (msg) => {
        console.log('There was an error: ' + msg);
      })
      .on('timeout', (msg) => {
        console.log('Something timed out: ' + msg);
      })
      .then(() => {
        console.log(chalk.green('✅  Bootstrapped the bot successfully'))
      })
      .open('http://supremenewyork.com/shop/all')
      .screenshot('./screenshots/0-Test.png')
      .then(() => {
        console.log(chalk.green('✅  The Supreme site is working correctly'));
        console.log(chalk.cyan('ℹ️  Waiting for the drop to start'));
        resolve(horseman);
      })
      .catch((e) => {
        console.log(chalk.red('❌  Error while bootstrapping the bot: "' + e.message + '"'))
      })
  })
}
