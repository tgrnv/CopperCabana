// Make product, user and CC data available
const data = require('./data.json');

// Set up elasticlunr for JSON searching
var elasticlunr = require('elasticlunr');
var index = elasticlunr(function() {
  this.addField('name');
  this.addField('color');
})

// Set up Horseman for page automation
var Horseman = require('node-horseman');
var horseman = new Horseman({ injectJquery: false });

// Require functions
const bootstrap       = require('./functions/bootstrap.js');
const openStore       = require('./functions/open_store.js');
const getProductUrl   = require('./functions/get_product_url.js');
const openProductPage = require('./functions/open_product_page.js');
const cartProduct     = require('./functions/cart_product.js');
const checkout        = require('./functions/checkout.js');
const cleanup         = require('./functions/cleanup.js');

bootstrap(horseman)
  .then(openStore)
  .then(getProductUrl)
  .then(openProductPage)
  .then(cartProduct)
  .then(checkout)
  .then(cleanup)
