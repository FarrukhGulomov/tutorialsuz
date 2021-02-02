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
  OpenBtn.addEventListener('click',function(){
   
    
    menuTop.style.zIndex="3";
    menuTop.style.width="270px"; 
     
    
    
  });
 





   
});