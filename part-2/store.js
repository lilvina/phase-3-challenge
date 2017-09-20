const listProductBySection = require('./commands/product-list')
const shopperOrders = require('./commands/shopper-orders')
const realShoppers = require('./commands/real-shoppers')

const command = process.argv[2]
const argument = process.argv[3]

switch(command) {
  case 'product-list':
    listProductBySection(argument)
    break;

  case 'shopper-orders':
    shopperOrders(argument)
    break;

  case 'real-shoppers':
    realShoppers()
    break;

  default:
    console.log('Invalid command, use \'product-list\', \'shopper-orders\', or \'real-shoppers\'')
}