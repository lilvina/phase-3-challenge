const { itemsInSection } = require('../database.js')
const print = require('node-print')

const productListBySection = (section) => {
  if(!section) {
    console.warn('Please select a section')
  }
  itemsInSection(section)
    .then(items => {
      print.pt(items)
      process.exit()
    })
    .catch(error => {
      console.log('Section not found')
      process.exit(1)
    })

}

module.exports = productListBySection