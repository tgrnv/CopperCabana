var Promise = require('bluebird');
var chalk = require('chalk');
var elasticlunr = require('elasticlunr');
var index = elasticlunr(function() {
  this.addField('name');
  this.addField('color');
});
const data = require('../data.json');

module.exports = (horseman) => {
  return new Promise((resolve, reject) => {
    horseman
      .evaluate(function() {
        var products = document.querySelectorAll('article');
        var id = 0;

        // Build an array of all the products. We need the id for building the search index.
        var productMap = Array.prototype.map.call(products, function(e) {
          return {
                    'id': id++,
                    'name': e.children[0].children[1].innerText.replace(/(\r\n|\n|\r)/gm,""),
                    'color': e.children[0].children[2].innerText.replace(/(\r\n|\n|\r)/gm,""),
                    'url': e.children[0].children[0].href.replace(/(\r\n|\n|\r)/gm,"")
                 }
        });

        return productMap;
      })
      .then((productMap) => {
        for(let product of productMap) {
          index.addDoc(product);
        };

        var searchResults = index.search(data.product.name + ' ' + data.product.color, {
          fields: {
            name: { boost: 6 },
            color: { boost: 3 }
          }
        });

        var nextUrl = productMap[searchResults[0].ref].url;
        console.log(chalk.green('✅  Got the product URL: ' + nextUrl))
        resolve([horseman, nextUrl]);
      })
      .catch((e) => {
        console.log(chalk.red('❌  Error while getting the product URL: "' + e.message + '"'))
      })
  })
}
