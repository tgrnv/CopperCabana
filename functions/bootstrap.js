var Promise = require('bluebird');
var chalk = require('chalk');

module.exports = (horseman) => {
  return new Promise((resolve, reject) => {
    horseman
      .on('urlChanged', function(targetUrl) {
        console.log(chalk.cyan('ℹ️  URL changed to ' + targetUrl));
      })
      .on('consoleMessage', function(msg) {
        console.log('Phantom browser threw a console message: ' + msg);
      })
      .on('error', function(msg) {
        console.log('There was an error: ' + msg);
      })
      .on('timeout', function(msg) {
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
