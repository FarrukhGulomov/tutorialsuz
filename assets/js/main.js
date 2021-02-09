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
    var section =document.querySelector("section");
    const logoBrand=document.querySelector(".logo-brand");
    const menuTextTwo=document.querySelector(".menu_text_two");
    var Style = window.getComputedStyle(menuTop),
    Width =Style.getPropertyValue('width');
    console.log(Width);
    // var is = true;

     

    OpenBtn.addEventListener('click', function () {
        menuTop.style.zIndex = "9";
        menuTop.style.width = "270px";
        closeBtn.style.zIndex = "10";
        OpenBtn.style.right = "255px";
        OpenBtn.style.zIndex="10";
        menuText.classList.toggle("d-none");
        OpenBtn.style.backgroundColor="#A7BFE8";
        menuTextTwo.style.left="32px";
        OpenBtn.style.pointerEvents="none";
    });

   
       
    


    closeBtn.addEventListener('click', function (event) {

        event.preventDefault();

        
        closeBtn.style.zIndex = "-100";
        OpenBtn.style.display = "block";
        menuTop.style.width = "0px";
        OpenBtn.style.right = "5%";
        menuText.classList.toggle("d-none");
        menuTextTwo.style.left="-100px";
       
       
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