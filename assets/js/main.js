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
    const section =document.querySelectorAll("section");
    const logoBrand=document.querySelector(".logo-brand");
    var Style = window.getComputedStyle(menuTop),
    Width =Style.getPropertyValue('width');
    console.log(Width);
    // var is = true;

     

    OpenBtn.addEventListener('click', function () {
        menuTop.style.zIndex = "9";
        menuTop.style.width = "270px";
        closeBtn.style.zIndex = "10";
        OpenBtn.style.right = "200px";
        menuTop.style.boxShadow="0px 0px 4px 2px rgba(0, 0, 0, .7)";
       logoBrand.style.transform="scale(0.9)";
    });

   

   


    closeBtn.addEventListener('click', function (event) {

        event.preventDefault();

        
        closeBtn.style.zIndex = "-100";
        OpenBtn.style.display = "block";
        menuTop.style.width = "0px";
        menuTop.style.boxShadow="none";
        OpenBtn.style.right = "5%";
      
       
        
       
       
    });
    


if(is){
   
OpenBtn.addEventListener("click",function(){
    closeBtn.style.zIndex = "-100";
    menuTop.style.width = "0px";
    OpenBtn.style.right = "5%";

});
is=false;
}




});