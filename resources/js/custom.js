//Modal business name change
function changeModalText(title, legend){
    console.log(title, legend)
    document.querySelector('.modal__title').innerHTML = title;
    document.querySelector('.modal__contact').innerHTML = legend;
}
// modal 1
const modal = document.querySelector('.modal');
const btnOne = document.querySelector('.business__email--one');
const close = document.querySelector('.modal__close');

btnOne.onclick = function() {
    
    changeModalText("Aqua Experts", "Fill out the form below and Aqua Experts will get in touch.")
    modal.style.display = "block";
};

close.onclick = function() {
    modal.style.display = "none";
};

// modal 2
const btnTwo = document.querySelector('.business__email--two');

btnTwo.onclick = function() {

    changeModalText("Premium Pools & Spas of Charlotte", "Fill out the form below and Premium Pools & Spas of Charlotte will get in touch.")
    modal.style.display = "block";
};

close.onclick = function() {
    modal.style.display = "none";
};

// modal 3
const btnThree = document.querySelector('.business__email--three');

btnThree.onclick = function() { 
    changeModalText("Carolina Pool Specialists", "Fill out the form below and Carolina Pool Specialists will get in touch.")
    modal.style.display = "block";
};

close.onclick = function() {
    modal.style.display = "none";
};


// ----- drop down mobile navigation ----- //
document.querySelector('.nav__link').addEventListener('click', openMenu);
document.querySelector('.nav__close').addEventListener('click', closeMenu);

// select mobile nav menu
const menu = document.querySelector('.nav__menu');
// Open menu
function openMenu() {
    menu.classList.toggle('nav__menu--open');
}

// Close menu
function closeMenu() {
    menu.classList.toggle('nav__menu--open');
}

// ----- drop down filter menu ----- //
document.querySelector('.filters__mobile').addEventListener('click', openFilter);

// select filter 
const filters = document.querySelector('.filters__form');

// toggle filter form 
function openFilter() {
    filters.classList.toggle('filters__form--open');
}
