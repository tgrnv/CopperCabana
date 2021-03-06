let Promise = require('bluebird')
let chalk = require('chalk');

module.exports = (horseman) => {
  return new Promise((resolve, reject) => {
    horseman
      .do(() => {
        console.log(chalk.green(chalk.bold('👌  That\'s it for today. See you next week!\n')))
        console.log(chalk.gray('❕  Please cop it to rock it, G.'))
        return horseman.close();
      })
  })
}
