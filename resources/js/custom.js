//Modal business name change
function changeModalText(title, legend){
    console.log(title, legend)
    document.querySelector('.modal__title').innerHTML = title;
    document.querySelector('.modal__contact').innerHTML = legend;
}
// modal 1
const modal = document.querySelector('.modal');
var btn = document.querySelector('.business__email--one');
const close = document.querySelector('.modal__close');

btn.onclick = function() {
    
    changeModalText("Aqua Experts", "Fill out the form below and Aqua Experts will get in touch.")
    modal.style.display = "block";
};

close.onclick = function() {
    modal.style.display = "none";
};

// modal 2
var btn = document.querySelector('.business__email--two');

btn.onclick = function() {

    changeModalText("Premium Pools & Spas of Charlotte", "Fill out the form below and Premium Pools & Spas of Charlotte will get in touch.")
    modal.style.display = "block";
};

close.onclick = function() {
    modal.style.display = "none";
};

// modal 3
var btn = document.querySelector('.business__email--three');

btn.onclick = function() { 
    changeModalText("Carolina Pool Specialists", "Fill out the form below and Carolina Pool Specialists will get in touch.")
    modal.style.display = "block";
};

close.onclick = function() {
    modal.style.display = "none";
};

// filter service drop down
$(".filters__mobile").click(function(e) {
  $(".filters__form").slideToggle();
});

// nav is visible always 
// initial state should be closed = height 0 and transition 

// open class only has a height property 

// onclick js toggles the open class on the menu 

//Select menu
const menu = document.querySelector('.nav__menu');
//Default state of menu
menu.style.right = '-9999px';

document.querySelector('.nav__link').addEventListener('click', openMenu);
document.querySelector('.nav__close').addEventListener('click', closeMenu);

// Open menu
function openMenu() {
    menu.style.right = '0%';
}

// Close menu
function closeMenu() {
    menu.style.right = '-9999px';
}