const modal = document.querySelector('.modal')
const cartButton = document.querySelector('#cart-button')
const x = document.querySelector('.close')
const addToCartButtons = document.querySelectorAll('.item button')
const cartContents = document.querySelector('.cart-contents')
const cartAmount = document.querySelector('#cart-item-count')
const cartTotal = document.querySelector('.total')
const clear = document.querySelector('.modal-content button')
let cartCounter = 0

cartButton.addEventListener('click', function() {
  modal.style.display = 'block'
})

x.addEventListener('click', function() {
  modal.style.display = 'none'
})

clear.addEventListener('click', function(event) {
  cartContents.innerHTML = ''
  cartCounter = 0
  cartAmount.innerText = `(${cartCounter})`
  cartTotal.innerText = '$0.00'
})

addToCartButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    const newListItem = document.createElement('li')
    newListItem.className = 'item flex flex-row-between'

    const item = event.target.previousElementSibling.previousElementSibling.innerText
    const itemSpan = document.createElement('span')
    itemSpan.innerText = item
    itemSpan.className = 'item-name'
    newListItem.appendChild(itemSpan)

    const price = event.target.previousElementSibling.innerText
    const priceSpan = document.createElement('span')
    priceSpan.innerText = price
    priceSpan.className = 'item-price'
    newListItem.appendChild(priceSpan)

    cartContents.appendChild(newListItem)

    cartCounter++
    cartAmount.innerText = `(${cartCounter})`

    const priceNumber = price.replace(/\$/g, '')
    const totalNumber = cartTotal.innerText.replace(/\$/g, '')
    const newTotal = parseFloat(priceNumber) + parseFloat(totalNumber)
    cartTotal.innerText = `$${newTotal}`
  })
})