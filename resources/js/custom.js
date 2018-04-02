// Modal business name change
function changeModalText(title, legend){
    console.log(title, legend)
    document.querySelector('.modal__title').innerHTML = title;
    document.querySelector('.modal__contact').innerHTML = legend;
}
// modal 1
var modal = document.querySelector('.modal');
var btn = document.querySelector('.business__email--one');
var close = document.querySelector('.modal__close');

btn.onclick = function() {
    
    changeModalText("Aqua Experts", "Fill out the form below and Aqua Experts will get in touch.")
    modal.style.display = "block";
};

close.onclick = function() {
    modal.style.display = "none";
};

// modal 2
var modal = document.querySelector('.modal');
var btn = document.querySelector('.business__email--two');
var close = document.querySelector('.modal__close');

btn.onclick = function() {

    changeModalText("Premium Pools & Spas of Charlotte", "Fill out the form below and Premium Pools & Spas of Charlotte will get in touch.")
    modal.style.display = "block";
};

close.onclick = function() {
    modal.style.display = "none";
};

// modal 3
var modal = document.querySelector('.modal');
var btn = document.querySelector('.business__email--three');
var close = document.querySelector('.modal');

btn.onclick = function() { 
    changeModalText("Carolina Pool Specialists", "Fill out the form below and Carolina Pool Specialists will get in touch.")
    modal.style.display = "block";
};

close.onclick = function() {
    modal.style.display = "none";
};


// Mobile drop down nav open
$(".nav__link").click(function(e) {
  $(".nav__menu").slideToggle();
});

// close
$(".nav__close").click(function(e) {
    $(".nav__menu").slideToggle();
});

// filter service drop down
$(".filters__mobile").click(function(e) {
  $(".filters__form").slideToggle();
});