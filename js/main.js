
/*menu cambio de color*/
$(window).scroll(function() {
  if ($("#menu").offset().top > 100) {
      $("#menu").addClass("bg-color");
      $("nav ul li a").addClass("color-letras");
  } else {
      $("#menu").removeClass("bg-color");
      $("nav ul li a").removeClass("color-letras");
  }
});

/* funcion onmouseover */
document.getElementById("demo").addEventListener("mouseover", mouseOver);
document.getElementById("demo").addEventListener("mouseout", mouseOut);
function mouseOver(){
  document.getElementById("nav ul li a").style.margin-bottom = "orange";
};





