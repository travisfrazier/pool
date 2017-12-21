function changeModalText(title, legend){
    console.log(title, legend)
    document.getElementById('title').innerHTML = title;
    document.getElementById('contact').innerHTML = legend;
}



// Get the modal
var modal = document.getElementById('myModal');

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    
    changeModalText("Aqua Experts", "Fill out the form below and Aqua Experts will get in touch.")
    modal.style.display = "block";
};

span.onclick = function() {
    modal.style.display = "none";
};

// Get the modal
var modal = document.getElementById('myModal');

var btn = document.getElementById("myBtntwo");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {

    changeModalText("Carolina Pool Pro", "Fill out the form below and Carolina Pool Pro will get in touch.")
    modal.style.display = "block";
};

span.onclick = function() {
    modal.style.display = "none";
};

// Get the modal
var modal = document.getElementById('myModal');

var btn = document.getElementById("myBtnthree");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
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

