const { orderTotalsPerShopper } = require('../database.js')
const print = require('node-print')

const shopperOrders = (id) => {
  if(!id) {
    console.warn('Please input an ID')
  }
  orderTotalsPerShopper(id)
    .then(totals => {
      print.pt(totals)
      process.exit()
    })
    .catch(error => {
      console.log('ID not found')
      process.exit(1)
    })

}

module.exports = shopperOrders