var buttonDrop = document.getElementById("lang_js");
buttonDrop.addEventListener("click", function (e) {
    rotateFunction();
    dropFunction();
})
function rotateFunction() {
    var x = document.getElementById("arrow_js");
    x.classList.toggle("rotator_js");
}
function dropFunction() {
    var z = document.getElementById("js_drop_list");
    z.classList.toggle("js_drop_out")
}


var innam = document.getElementById("name");
innam.addEventListener("click", function (e) {
  changeInputName();
})
function changeInputName() {
  var t = document.getElementById("name");
  t.classList.toggle("js_change_input_name");
}

/*
var inmai = document.getElementById("mail");
inmai.addEventListener("click", function (e) {
  changeInputMail();
})
function changeInputMail() {
  var o = document.getElementById("mail");
  o.classList.toggle("js_change_mail_name");
}
*/

var a = document.getElementById("js_burger_btn");
var s = document.getElementById("js_menu_flow");


var burgerBtn = document.getElementById("js_burger_btn");
burgerBtn.addEventListener("click", function (e) {
    e.stopPropagation(); /*уточнить на счет этой функции*/
    magicHappens();
})
function magicHappens() {
    a.classList.toggle("js_burger_rotation");
    s.classList.toggle("js_flowing_theme");
}

document.addEventListener("click", function (e) {
    a.classList.remove("js_burger_rotation");
    s.classList.remove("js_flowing_theme");
  });


  /* слайдеры */

$(document).ready(function () {
    $(".seminar__slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1000,
      });
    });

function myFunction(x) {
    if (x.matches) { // If media query matches
      /* document.body.style.backgroundColor = "yellow"; */
      $(document).ready(function () {
        $(".comments__slider").slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false, //уточнить про стрелки перехода, проблема с их отображением
            dots: false,
            autoplay: true,
            autoplaySpeed: 1000,
          });
        });
    } if (!x.matches)/*else*/ {
    /* document.body.style.backgroundColor = "pink";*/
     $(document).ready(function () {
        $(".comments__slider").slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            autoplay: true,
            autoplaySpeed: 1000,
          });
        });
    }
  }
  
  var x = window.matchMedia("(max-width:600px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes




























  /*
  var windowWidth = $(window).width();
  if(windowWidth > 600)
  {
     function myFunction(x)
  }
  if(windowWidth < 600)
  {
   function myFunction(x)
  }
  */

  /*
$(document).ready(function () {
    var l = window.matchMedia("(max-width:600px)");
    if (matchMedia('screen and ').l) {
        $(".comments__slider").slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            autoplay: true,
            autoplaySpeed: 1000,
          });
           }
       }

       });
       */
/*
      function myFunction(x) {
        if (x.matches) { // If media query matches
          document.body.style.backgroundColor = "yellow";
        } else {
         document.body.style.backgroundColor = "pink";
        }
      }
      
      var x = window.matchMedia("(max-width:600px)")
      myFunction(x) // Call listener function at run time
      x.addListener(myFunction) // Attach listener function on state changes
*/ 