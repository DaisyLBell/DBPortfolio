var nav = document.querySelector(".nav-button");

nav.addEventListener('click', function() {
    document.querySelector(".nav-page").style.display = "grid";
});


var navclose = document.querySelector(".nav-close");

navclose.addEventListener('click', function() {
    document.querySelector(".nav-page").style.display = "none";
});