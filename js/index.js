var buttonDrop = document.getElementById("langjs");
buttonDrop.addEventListener("click", function (e) {
    rotateFunction();
    dropFunction();
})

function rotateFunction() {
    var x = document.getElementById("arrowjs");
    x.classList.toggle("rotatorjs");
}
function dropFunction() {
    var z = document.getElementById("dropjs");
    z.classList.toggle("popupjs")
}
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
  $(document).ready(function () {
    $(".chto__slider").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 2,
      arrows: false,
      dots: true,
      autoplay: false,
      autoplaySpeed: 1000,
    });
  });