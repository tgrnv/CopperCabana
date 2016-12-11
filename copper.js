// Make product, user and CC data available
const data = require('./data.json');

// Set up elasticlunr for JSON searching
let elasticlunr = require('elasticlunr');
let index = elasticlunr(function() {
  this.addField('name');
  this.addField('color');
})

// Set up Horseman for page automation
let Horseman = require('node-horseman');
let horseman = new Horseman({
  injectJquery: false,
  loadImages: false,
  diskCache: true,
  timeout: 900000 // Setting the timeout like this is not beautiful.
                  // We need it to prevent wairForDrop from timing out.
                  // Need to find a way to set it only for this function.
});

const inquirer = require('inquirer');

const saveData        = require('./functions/save_data.js');
const bootstrap       = require('./functions/bootstrap.js');
const waitForDrop     = require('./functions/wait_for_drop.js');
const openStore       = require('./functions/open_store.js');
const getProductUrl   = require('./functions/get_product_url.js');
const openProductPage = require('./functions/open_product_page.js');
const cartProduct     = require('./functions/cart_product.js');
const checkout        = require('./functions/checkout.js');
const cleanup         = require('./functions/cleanup.js');

const questions       = require('./functions/user_input.js');

console.log(`
       ****
     ********
    **  ******
     *   ******     ******
         ******   *********         Welcome to
          ****  *****   ***
          ***  ***     **           oooooooo8   ooooooo  oooooooooo oooooooooo ooooooooooo oooooooooo
    *************       *         o888     88 o888   888o 888    888 888    888 888    88   888    888
  ******************              888         888     888 888oooo88  888oooo88  888ooo8     888oooo88
 *****   H*****H*******           888o     oo 888o   o888 888        888        888    oo   888  88o
 ***     H-___-H  *********         888oooo88    88ooo88  o888o      o888o      o888ooo8888 o888o  88o8
  ***    H     H      *******
   **    H-___-H        *****       oooooooo8     o      oooooooooo      o      oooo   oooo     o
     *   H     H         ****     o888     88    888      888    888    888      8888o  88     888
         H     H         ***      888           8  88     888oooo88    8  88     88 888o88    8  88
         H-___-H         **       888o     oo  8oooo88    888    888  8oooo88    88   8888   8oooo88
         H     H         *          888oooo88 o88o  o888o o888ooo888 o88o  o888o o88o    88 o88o  o888o
         H-___-H
`);

inquirer.prompt(questions).then((answers) => {
  saveData(answers);
  console.log(answers);

  bootstrap(horseman)
    .then(waitForDrop)
    .then(openStore)
    .then(getProductUrl)
    .then(openProductPage)
    .then(cartProduct)
    .then(checkout)
    .then(cleanup)
})
