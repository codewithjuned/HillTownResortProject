document.addEventListener("DOMContentLoaded", function () {
    var menu = document.querySelector("#objects");
    var menuIcon = document.querySelector("#icon");

    menuIcon.addEventListener("click", function () {
        menu.classList.toggle("show-menu");
    });
});