const modal = document.querySelector('.modal');
const buttonCart = document.querySelector('.button__cart');
const buttonClosed = document.querySelector('.button-closed');
const cancelButton = document.getElementById('cancelButton');
const missButton = document.getElementById('bodypart');


buttonCart.addEventListener('click', toggleModal);
buttonClosed.addEventListener('click', toggleModal);
cancelButton.addEventListener('click', toggleModal);
missButton.addEventListener('click', removeModal);

function toggleModal() {
    modal.classList.toggle('open');
}

if (missButton === 'bodypart') {
    function removeModal() {
        console.log(missButton);
    }
}

// console.log(modal);
// console.log(buttonCart);
// console.log(buttonClosed);
//  console.log(cancelButton);\

