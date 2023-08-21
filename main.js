total = 0
function mainButtonClick(target){
    const cardName = target.childNodes[3].childNodes[3].innerText
    const li = document.createElement('li')
    li.innerText = cardName;
    const selectedMainItemContainer = document.getElementById('selected-main-Item')
    selectedMainItemContainer.appendChild(li)
    const mainPrice = target.childNodes[3].childNodes[5].childNodes[0].innerText
    total = parseFloat(total) + parseFloat(mainPrice)
    const dataBody = document.getElementById('main-total-price').innerText = total
    
var discountPercentage = 20

var mainDiscountedPrice = (total * (discountPercentage / 100))
const tofixedDiscountedPrice = mainDiscountedPrice.toFixed(2)
document.getElementById('main-discount').innerText = tofixedDiscountedPrice

const mainTotalAmount = total - tofixedDiscountedPrice

document.getElementById('main-total-amount').innerText = mainTotalAmount


const purchaseButton = document.getElementById('last-make-purchase')
    if (total > 0) {
        purchaseButton.removeAttribute('disabled')
    } else {
        purchaseButton.setAttribute('disabled', true)
    }




}