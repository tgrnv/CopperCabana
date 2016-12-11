var Promise = require('bluebird')
var chalk = require('chalk');
const data = require('../data.json');

module.exports = (horseman) => {
  return new Promise((resolve, reject) => {
    horseman
      .evaluate(function(sizeToCop) {
        var dropdown = document.getElementById('size');
        var availableSizes = dropdown.options;
        var sizeInStock = false;

        // Select the appropriate size
        for(var size, j = 0; size = availableSizes[j]; j++) {
          if(size.label === sizeToCop) {
            dropdown.selectedIndex = j;
            sizeInStock = true;
            break;
          };
        };

        return sizeInStock;
      }, data.product.size)
      .then(function(sizeInStock) {
        if(sizeInStock === false) {
          // TODO: Find a proper way to abort the cop if sizes are not available.
          console.log('Sorry G, both preferred and backup sizes are sold out. Better luck next time!');
          return horseman.close();
        }
      })
      .screenshot('./screenshots/3-Selected_Size.png')
      .click('#add-remove-buttons > .button')
      .waitFor(function() {
        var cart = document.getElementById('cart');
        if(cart.getAttribute('class') !== 'hidden') {
          var cartVisible = true;
          return cartVisible
        }
      }, true)
      .screenshot('./screenshots/4-Product_In_Cart.png')
      .then(() => {
        console.log(chalk.green('✅  Put the product in your cart and going to checkout'))
        resolve(horseman);
      })
      .catch((e) => {
        console.log(chalk.red('❌  Error while carting the product: "' + e.message + '"'))
      })
  })
}
