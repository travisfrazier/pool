// Modal name change for business being contactated 
function changeModalText(title, legend){
    console.log(title, legend)
    document.getElementById('title').innerHTML = title;
    document.getElementById('contact').innerHTML = legend;
}



// modal 1
var modal = document.getElementById('contactModal');

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    
    changeModalText("Aqua Experts", "Fill out the form below and Aqua Experts will get in touch.")
    modal.style.display = "block";
};

span.onclick = function() {
    modal.style.display = "none";
};

// modal 2
var modal = document.getElementById('contactModal');

var btn = document.getElementById("myBtntwo");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {

    changeModalText("Premium Pools & Spas of Charlotte", "Fill out the form below and Premium Pools & Spas of Charlotte will get in touch.")
    modal.style.display = "block";
};

span.onclick = function() {
    modal.style.display = "none";
};

// modal 3
var modal = document.getElementById('contactModal');

var btn = document.getElementById("myBtnthree");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    
    changeModalText("Carolina Pool Specialists", "Fill out the form below and Carolina Pool Specialists will get in touch.")
    modal.style.display = "block";
};

span.onclick = function() {
    modal.style.display = "none";
};


// Dropdown Menu 
$(".mobile-menu").click(function(e) {
  $(".mobile-nav-list-wrapper").slideToggle();
});

$(".mobile-nav-list-close").click(function(e) {
    $(".mobile-nav-list-wrapper").slideToggle();
});

$(".mobile-filter").click(function(e) {
  $(".filter-form").slideToggle();
});




