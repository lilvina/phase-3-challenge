const { shoppersWithOrders } = require('../database.js')
const print = require('node-print')

const realShoppers = () => {
  shoppersWithOrders()
    .then(data => {
      print.pt(data)
      process.exit()
    })

}

module.exports = realShoppers