module.exports =
[
  {
    type: 'input',
    name: 'dropDate',
    message: 'What\'s the date of the drop? (DD/MM/YYYY)',
    validate: (input) => {
      var date_regex = /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/ ;
      if(!(date_regex.test(input))) {
        return 'Please enter a valid date in the format DD/MM/YYYY';
      }
      
      return true;
    }
  },
  {
    type: 'list',
    name: 'productCategory',
    message: 'What kind of product would you like to cop?',
    choices: ['Jacket', 'Shirt', 'Top/Sweater', 'Sweatshirt', 'Pant', 'Hat', 'Bag', 'Accessories', 'Skate']
  },
  {
    type: 'input',
    name: 'productName',
    message: 'Name of the product you\'d like to cop?'
  },
  {
    type: 'input',
    name: 'productColor',
    message: 'In which color?'
  },
  {
    type: 'list',
    name: 'size',
    message: 'Your size?',
    choices: ['Small', 'Medium', 'Large', 'XLarge']
  },
  {
    type: 'input',
    name: 'buyerName',
    message: 'Full Name'
  },
  {
    type: 'input',
    name: 'buyerMail',
    message: 'E-Mail'
  },
  {
    type: 'input',
    name: 'buyerPhone',
    message: 'Phone'
  },
  {
    type: 'input',
    name: 'buyerAddress1',
    message: 'Address'
  },
  {
    type: 'input',
    name: 'buyerAddress2',
    message: 'Address 2'
  },
  {
    type: 'input',
    name: 'buyerAddress3',
    message: 'Address 3'
  },
  {
    type: 'input',
    name: 'buyerCity',
    message: 'City'
  },
  {
    type: 'input',
    name: 'buyerZip',
    message: 'ZIP'
  },
  {
    type: 'input',
    name: 'buyerCountry',
    message: 'Country'
  },
  {
    type: 'list',
    name: 'ccType',
    message: 'Credit Card Type',
    choices: ['Visa', 'American Express', 'Mastercard', 'Solo']
  },
  {
    type: 'input',
    name: 'ccNumber',
    message: 'Credit Card Number'
  },
  {
    type: 'input',
    name: 'ccExpMonth',
    message: 'Expiry Month'
  },
  {
    type: 'input',
    name: 'ccExpYear',
    message: 'Expiry Year'
  },
  {
    type: 'input',
    name: 'ccCvv',
    message: 'CVV'
  },
]
