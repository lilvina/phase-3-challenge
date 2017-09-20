const { itemsSection } = require('../database.js')
const print = require('node-print')

const listProductBySection = (section) => {
  if(!section) {
    console.warn('Please select a section')
  }
  itemsSection(section)
    .then(items => {
      print.pt(items)
      process.exit()
    })
    .catch(error => {
      console.log('Section not found')
      process.exit(1)
    })
}

module.exports = listProductBySection