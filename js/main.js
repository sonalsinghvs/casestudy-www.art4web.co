var navButton = document.querySelector(".bar-4");
var closeButton = document.querySelector(".side-menu");

var menu = document.querySelector(".side-menu");
var body = document.querySelector("body");

navButton.addEventListener("click", function() {console.log("clicky!!!");
menu.style.display ="block";
body.style.overflow ="hidden";
 });

closeButton.addEventListener("click", function() {
    console.log("close it!");
    menu.style.display = "none";
    body.style.overflow = "auto";
});