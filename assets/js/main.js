const ready = function (cb) {
  // Check if the `document` is loaded completely
  document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", function (e) {
        cb();
      })
    : cb();
};

// Usage
ready(function() {
  
// MENU BTN TO OPEN RIGHT DOOR  
  const menuTop = document.querySelector(".menu-top");
  const OpenBtn = document.getElementById("menu-toggle");
  const menuText =document.querySelector(".menu-text");
  const closeBtn =document.getElementById("close-btn");
  const navbarMenu =document.querySelector(".navbar-menu");
  OpenBtn.addEventListener('click',function(){
   
    
    menuTop.style.zIndex="3";
    menuTop.style.width="270px"; 
    OpenBtn.style.display="none";
    closeBtn.style.zIndex="10";
    
  });
  closeBtn.addEventListener('click',function(event){

  event.preventDefault();

    navbarMenu.style.opacity="0";
    menuTop.style.opacity="0";
    closeBtn.style.zIndex="-100";
    
  });

 





   
});