var slide1 = document.getElementById("slide-1");
var slide2 = document.getElementById("slide-2");
var slide3 = document.getElementById("slide-3");
var header = document.getElementById("header");

slide1.style.display = "block";
slide2.style.display = "none";
slide3.style.display = "none";
header.classList.add("slide-1");

setInterval(function() {
  slide1.style.display = "block";
  slide2.style.display = "none";
  slide3.style.display = "none";
  header.classList.add("slide-1");
  header.classList.remove("slide-2");
  header.classList.remove("slide-3");
}, 5000);

setInterval(function() {
  slide1.style.display = "none";
  slide2.style.display = "block";
  slide3.style.display = "none";
  header.classList.remove("slide-1");
  header.classList.add("slide-2");
  header.classList.remove("slide-3");
}, 10000);

setInterval(function() {
  slide1.style.display = "none";
  slide2.style.display = "none";
  slide3.style.display = "block";
  header.classList.remove("slide-1");
  header.classList.remove("slide-2");
  header.classList.add("slide-3");
}, 15000);
