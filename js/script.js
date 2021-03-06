var searchButton = document.querySelector('.button-search');
var popup = document.querySelector('.pop-up');
var popupWrapper = document.querySelector('.pop-up-wrapper');
var indexForm = document.querySelector('.hotel-search');

var liForm = document.querySelector('.hotel-search-item');
var inputArrival = indexForm.querySelector('[name=arrival-date]');
var inputLeaving = indexForm.querySelector('[name=date-of-leaving]');
var adultAmount = indexForm.querySelector('[name=amount-of-adult]');
var childrenAmount = indexForm.querySelector('[name=amount-of-children]');
var adultStorage = localStorage.getItem('adult');
var childrenStorage = localStorage.getItem('children');

var buttonPlus = document.querySelectorAll('button.plus');
var buttonMinus = document.querySelectorAll('button.minus');

popup.classList.add('hotel-search-hide');

searchButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.toggle('hotel-search-hide');
    popup.classList.toggle('hotel-search-show');
    inputArrival.focus();

    if (adultStorage && childrenStorage) {
        adultAmount.value = adultStorage;
        childrenAmount.value = childrenStorage;
    };
});



indexForm.addEventListener('submit', function (evt) {
    if (!inputArrival.value || !inputLeaving.value) {
        evt.preventDefault();
        popup.classList.add('modal-error');
        setTimeout(function () {
            popup.classList.remove('modal-error');
        }, 1000);
    } else {
        localStorage.setItem('adult', adultAmount.value);
        localStorage.setItem('children', childrenAmount.value);
    };
});

for (let plus of buttonPlus) {
    plus.onclick = function () {
        this.nextElementSibling.stepUp();
    };
};

for (let minus of buttonMinus) {
    minus.onclick = function () {
        this.previousElementSibling.stepDown();
    };
};


