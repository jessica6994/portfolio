var jumboflash = document.querySelector(".jctitle");
var jumbotext = document.querySelector(".jctitle");
var isBlue = false;

setInterval(function(){
  if (isBlue){
    jumboflash.style.background = "rgba(204, 161, 4)"; //yellow back
    jumbotext.style.color = "#29304a"; //navy text
  }else{
    jumboflash.style.background = "rgba(41, 48, 74)";
    jumbotext.style.color = "#cca104"; //blue back
  }
  isBlue = !isBlue;
}, 1000);
