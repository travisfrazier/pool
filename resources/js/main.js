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
document.querySelector('.nav__link').addEventListener('click', openMenu);
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