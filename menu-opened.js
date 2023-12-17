//function menuOpen() {
//    
//    var menuOpened = document.getElementById("menu-closed"); 
//    menuOpened.classList.toggle("menu-opened");
//    console.log("working");
//    menuOpened.style.display = "block;"
//    
//    var menuHeader = document.getElementById("menuHeader-closed");
//    var menuBody = document.getElementById("menuBody-closed");
//    
//    menuHeader.classList.toggle("menu-header");
//    menuBody.classList.toggle("menu-body");
//}



var openMenu = document.querySelector("nav");


openMenu.addEventListener("click", function() {


    var menu = document.querySelector(".menu-opened");
    menu.style.display = "flex";
    openMenu.style.zIndex="-5";
    var menuNav = document.querySelector(".menu-nav");
    menuNav.style.zIndex="100";
    
    var logoDown = document.querySelector(".nav-below");
    logoDown.style.zIndex="-5";

    
});


var closeMenu = document.querySelector(".menu-nav");

closeMenu.addEventListener("click", function() {


    var menu = document.querySelector(".menu-opened");
    menu.style.display = "none";
    openMenu.style.zIndex = "100";
    
        var logoDown = document.querySelector(".nav-below");
    logoDown.style.zIndex="99";
    
});