//Modal business name change
function changeModalText(business, action){
    document.querySelector('.modal__business').innerHTML = business;
    document.querySelector('.modal__action').innerHTML = action;
}

// Modal variable for all three ----- //
const modal = document.querySelector('.modal');

// Modal 1 ----- //
document.querySelector('.business__email--one').addEventListener('click', openModalOne);

function openModalOne() {
    changeModalText('Aqua Experts', 'Fill out the form below and Aqua Experts will get in touch.');
    modal.style.display = 'block';
}

// Modal 2 ----- //
document.querySelector('.business__email--two').addEventListener('click', openModalTwo);
document.querySelector('.modal__close').addEventListener('click', closeModal);

function openModalTwo() {
    changeModalText('Premium Pools & Spas of Charlotte', 'Fill out the form below and Premium Pools & Spas of Charlotte will get in touch.');
    modal.style.display = 'block';
}

// Modal 3
document.querySelector('.business__email--three').addEventListener('click', openModalThree);
document.querySelector('.modal__close').addEventListener('click', closeModal);

function openModalThree() {
    changeModalText('Carolina Pool Specialist', 'Fill out the form below and Carolina Pool Specialists will get in touch.');
    modal.style.display = 'block';
}

// Close all modals 
document.querySelector('.modal__close').addEventListener('click', closeModal);
function closeModal() {
    modal.style.display = 'none';
}


// Mobile Navigation drop down ----- //
document.querySelector('.nav__link--mobile').addEventListener('click', openMenu);
document.querySelector('.nav__close').addEventListener('click', closeMenu);

const menu = document.querySelector('.nav__menu');

// Open menu
function openMenu() {
    menu.classList.toggle('nav__menu--open');
}

// Close menu
function closeMenu() {
    menu.classList.toggle('nav__menu--open');
}

// Filter down menu ----- //
document.querySelector('.filters__mobile').addEventListener('click', openFilter);

const filters = document.querySelector('.filters__form');

function openFilter() {
    filters.classList.toggle('filters__form--open');
}


// Image Form Validation ---------- // 
function imgValidate() {
    const inputName = document.querySelector('.modal__input--name').value.trim();
    const imgName = document.querySelector('.modal__circle--one');
    const inputNum = document.querySelector('.modal__input--num').value.trim();
    const imgNum = document.querySelector('.modal__circle--two'); 
    const inputEmail = document.querySelector('.modal__input--email').value.trim();
    const imgEmail = document.querySelector('.modal__circle--three');

    //Name image circle
    if (!inputName) {
        imgName.setAttribute('src', 'resources/images/circle-form.png');
    } else {
         imgName.setAttribute('src', 'resources/images/checkmark-circle.png');
    }

    //Number imagle circle
    if (inputNum.length < 10) {
        imgNum.setAttribute('src', 'resources/images/circle-form.png');
    } else {
        imgNum.setAttribute('src', 'resources/images/checkmark-circle.png');
    }

    //Email image circle
    if (!inputEmail.includes('@')) {
        imgEmail.setAttribute('src', 'resources/images/circle-form.png');
    } else {
        imgEmail.setAttribute('src', 'resources/images/checkmark-circle.png');
    }

}

// Added required in the HTML inputs for these instead of running this script
// function formValidate() {
//     const name = document.querySelector('.modal__input--name').value.trim();
//     const number = document.querySelector('.modal__input--num').value.trim();
//     const email = document.querySelector('.modal__input--email').value.trim();

//     //Name
//     if (!name) {
//       alert('Please enter your name');
//       return false;
//     }

//     //Number 
//     if (number < 9) {
//         alert('Please enter your number');
//         return false;
//     }

//     //Email 
//     if (!email) {
//         alert('Please enter your email');
//         return false;
//     }
// }

// Code to submit to server goes here