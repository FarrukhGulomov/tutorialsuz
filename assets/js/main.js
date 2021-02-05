const ready = function (cb) {
    // Check if the `document` is loaded completely
    document.readyState === "loading"
        ? document.addEventListener("DOMContentLoaded", function (e) {
            cb();
        })
        : cb();
};

// Usage
ready(function () {

// MENU BTN TO OPEN RIGHT DOOR  
    const menuTop = document.querySelector(".menu-top");
    const OpenBtn = document.getElementById("menu-toggle");
    const menuText = document.querySelector(".menu-text");
    const closeBtn = document.getElementById("close-btn");
    const navbarMenu = document.querySelector(".navbar-menu");
    const mainBg = document.querySelector(".main-bg");
    var is = false;




    OpenBtn.addEventListener('click', function () {

        //  menuTop.classList.toggle("d-block");


        menuTop.classList.toggle("d-block");
        menuTop.style.zIndex = "9";
        menuTop.style.width = "270px";
        menuTop.style.right = "0";
        //OpenBtn.style.display="none";
        closeBtn.style.zIndex = "10";
        OpenBtn.style.right = "200px";
        // menuTop.style.visibility="visible";

        // menuText.style.display="none";

        OpenBtn.addEventListener('mouseover', function () {
            OpenBtn.style.borderColor = "transparent";


        });

    });

    closeBtn.addEventListener('click', function (event) {

        event.preventDefault();

        //navbarMenu.style.opacity="0";
        //menuTop.style.opacity="0";
        closeBtn.style.zIndex = "-100";
        OpenBtn.style.display = "block";
        menuTop.style.width = "0px";
        OpenBtn.style.right = "5%";
        // menuTop.style.display="none";
        menuTop.classList.toggle("d-none");
        // is=true;
    });


});