const { expect } = require('chai')
const { itemsSection, orderOfTotalPerShopper, shoppersWithOrders } = require('../database.js')

describe('Database Queries', () => {
  context('itemsSection', () => {
    it('itemsSection("bulk") returns the items "Flour", "Pasta", and "Rice"', () => {
      return itemsSection('bulk')
        .then(data => {
          expect(data).to.eql([{
            "id": 16,
            "name": "Flour",
            "price": "8.74",
            "section": "bulk"
          },
          {
            "id": 33,
            "name": "Pasta",
            "price": "13.39",
            "section": "bulk"
          },
          {
            "id": 36,
            "name": "Rice",
            "price": "5.23",
            "section": "bulk"
          }])
        })
    })
  })

  context('orderOfTotalsPerShopper', () => {
    it('orderOfTotalsPerShopper(3) to return three orders and their totals', () => {
      return orderOfTotalsPerShopper(3)
        .then(data => {
          expect(data).to.eql([{
            "order_id": 1,
            "total cost": "28.31"
          },
          {
            "order_id": 2,
            "total cost": "32.06"
          },
          {
            "order_id": 6,
            "total cost": "6.36"
          }])
        })
    })
  })

  context('shoppersWithOrders', () => {
    it('shoppersWithOrders() returns a list of existing shoppers that have 1 or more orders',
      () => {
        return shoppersWithOrders()
          .then(data => {
            expect(data).to.eql([
              {
                "name": "Beyonce Knowles",
                "number of orders": "1"
              },
              {
                "name": "Rihanna Fenty",
                "number of orders": "3"
              },
              {
                "name": "Michael Jackson",
                "number of orders": "1"
              },
              {
                "name": "Janet Jackson",
                "number of orders": "1"
              },
              {
                "name": "Kanye West",
                "number of orders": "1"
              }
            ])
          })
    })
  })
})