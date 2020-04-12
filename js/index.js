function rotateFunction() {
var x = document.getElementById("ishallrotate");
  x.style.transition = "transform 1s";
  x.style.transformOrigin = "25% 70%";
  if (x.style.transform === "rotate(0deg)") {
  x.style.transform = "rotate(180deg)";
  } else {x.style.transform = "rotate(0deg)" }
}