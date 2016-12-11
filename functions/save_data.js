const fs = require('fs');

module.exports = (answers) => {
  let determineCategoryURL = (answers) => {
    switch(answers.productCategory) {
      case 'Jacket':
        return "http://www.supremenewyork.com/shop/all/jackets";
        break;
      case 'Shirt':
        return "http://www.supremenewyork.com/shop/all/shirts";
        break;
      case 'Top/Sweater':
        return "http://www.supremenewyork.com/shop/all/tops_sweaters";
        break;
      case 'Sweatshirt':
        return "http://www.supremenewyork.com/shop/all/sweatshirts";
        break;
      case 'Pant':
        return "http://www.supremenewyork.com/shop/all/pants";
        break;
      case 'Hat':
        return "http://www.supremenewyork.com/shop/all/hats";
        break;
      case 'Bag':
        return "http://www.supremenewyork.com/shop/all/bags";
        break;
      case 'Accessories':
        return "http://www.supremenewyork.com/shop/all/accessories";
        break;
      case 'Skate':
        return "http://www.supremenewyork.com/shop/all/skate";
        break;
    }
  };

  var data = {
    "drop": {
      "date": answers.dropDate,
      "time": "03:10am",
      "zone": "LDN"
    },
    "product": {
      "name": answers.productName,
      "color": answers.productColor,
      "size": answers.size,
      "categoryURL": determineCategoryURL(answers)
    },
    "buyer": {
      "fullName": answers.buyerName,
      "email": answers.buyerMail,
      "phone": answers.buyerPhone,
      "address": answers.buyerAddress,
      "address2": answers.buyerAddress2,
      "address3": answers.buyerAddress3,
      "city": answers.buyerCity,
      "zip": answers.buyerZip,
      "country": answers.buyerCountry
    },
    "creditCard": {
      "type": answers.ccType,
      "number": answers.ccNumber,
      "expMonth": answers.ccExpMonth,
      "expYear": answers.ccExpYear,
      "cvv": answers.ccCvv
    }
  }

  fs.writeFileSync('user_data.json', JSON.stringify(data, null, 2));
}
