const modal = document.querySelector('.modal');
const buttonCart = document.querySelector('.button__cart');
const buttonClosed = document.querySelector('.button-closed');
const cancelButton = document.getElementById('cancelButton');
const rows = modal.querySelectorAll('.cart-string');
const total = modal.querySelector('.fullprice');





const toggleModal = function() {
    modal.classList.toggle('open');
}

const removeOfModal = function(event) {
    if (event.target.classList === modal.classList) {
        modal.classList.remove('open')
    }
}

const getFullPrice = () => {
    let fullprice = 0;
    const rows = modal.querySelectorAll('.cart-string');
    rows.forEach(rows => {
        let newPrice = 0;
        let priceBlock = rows.querySelector('.price-dish')
        let price = +priceBlock.textContent
        fullprice += price;
    })
    
    total.textContent = fullprice

}

getFullPrice()

buttonCart.addEventListener('click', toggleModal);
buttonClosed.addEventListener('click', toggleModal);
cancelButton.addEventListener('click', toggleModal);
modal.addEventListener('click', removeOfModal);

rows.forEach(rows => {
    let newPrice = 0;
    let priceBlock = rows.querySelector('.price-dish')
    let price = +priceBlock.textContent
    let countBlock = rows.querySelector('.count')
    let count = countBlock.textContent
    const btnminus = rows.querySelector('.minus')
    const btnplus = rows.querySelector('.plus')

    const getNewPrice = (count, price) => {
        newPrice = count * price
        priceBlock.textContent = newPrice
        getFullPrice()
    } 

    btnminus.addEventListener('click', () => {
        if (count > 0) {
            count--
            countBlock.textContent = count
            getNewPrice(count, price)
        }
    })
    btnplus.addEventListener('click', () => {
        count++
        countBlock.textContent = count
        getNewPrice(count, price)
    })

})
