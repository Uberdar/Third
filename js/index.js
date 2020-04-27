function rotateFunction(){
  var x = document.getElementById("rotateid");
  x.classList.toggle("rotatorjq");
}
function dropFunction(){  
var z  = document.getElementById("illdrop");
z.classList.toggle("show");
}
$(document).ready(function(){
  $('.slider').slick({
      infinite: true,
slidesToShow: 1,
slidesToScroll: 1,
arrows:false,
dots:true,
autoplay:true,
autoplaySpeed:1000,
  });
});
$(document).ready(function(){
  $('.sliderofblockthree').slick({
      infinite: true,
slidesToShow: 1,
slidesToScroll: 1,
arrows:false,
dots:true,
autoplay:true,
autoplaySpeed:1000,
  });
});

$(document).ready(function(){
  $('.sliderblockfour').slick({
      infinite: true,
slidesToShow: 1,
slidesToScroll: 1,
arrows:false,
dots:true,
autoplay:true,
autoplaySpeed:1000,
  });
});
$(document).ready(function(){
  $('.insidesliderblockthree').css("display","flex");
  $('.insidesliderblockthree').css("align-items","center");
  $('.insidesliderblockthreeptag').css("font-weight","bold");
  $('.insidesliderblockthreeptag').css("font-size","18px");
});

