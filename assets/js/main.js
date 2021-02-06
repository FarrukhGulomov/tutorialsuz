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
    const mainBg = document.querySelector(".main-bg");
    const navbarMenu = document.querySelector(".navbar-menu");
    const Style = window.getComputedStyle(menuTop),
    Display =Style.getPropertyValue('display');
   
   // console.log(Display);
    var is = false;




    OpenBtn.addEventListener('click', function () {

      //    menuTop.classList.toggle("d-flex");
      
      // menuTop.style.display="block";
      
       
        
        menuTop.style.zIndex = "9";
        menuTop.style.width = "270px";
        closeBtn.style.zIndex = "10";
        OpenBtn.style.right = "200px";
       



        

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
       
        
       
        // is=true;
    });
    

});