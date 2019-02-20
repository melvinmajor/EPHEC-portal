/**
 * Made by Melvin Campos Casares
 * Created : Late 2017
 * Modified and imported to EPHEC-Portal : Late 2018
 */

/*
 * JS part specific to sidenav
 * It's an off-canvas menu w/ opacity
 */
function blurOn() {
  const x = document.getElementsByClassName("portal");
  let i;
  for (i = 0; i < x.length; i++) {
    x[i].style.transition = ".5s";
    x[i].style.webkitFilter = "blur(5px)";
    x[i].style.filter = "blur(5px)"; /* For IE8 and earlier */
  }
}
function blurOff() {
  const x = document.getElementsByClassName("portal");
  let i;
  for (i = 0; i < x.length; i++) {
    x[i].style.webkitFilter = "blur(0px)";
    x[i].style.filter = "blur(0px)"; /* For IE8 and earlier */
  }
}
function footerFixedOn() {
  const x = document.getElementsByTagName("footer");
  let i;
  for (i = 0; i < x.length; i++) {
    x[i].style.position = "fixed";
    x[i].style.bottom = "0";
    x[i].style.left = "0";
    x[i].style.right = "0";
    x[i].style.transition = ".5s";
    x[i].style.webkitFilter = "blur(5px)";
    x[i].style.filter = "blur(5px)"; /* For IE8 and earlier */
  }
}
function footerFixedOff() {
  const x = document.getElementsByTagName("footer");
  let i;
  for (i = 0; i < x.length; i++) {
    x[i].style.position = "fixed";
    x[i].style.bottom = "0";
    x[i].style.left = "0";
    x[i].style.right = "0";
    x[i].style.webkitFilter = "blur(0px)";
    x[i].style.filter = "blur(0px)"; /* For IE8 and earlier */
  }
}
function openNav() {
  document.getElementById("sidenav").style.width = "180px";
  //document.getElementById("main").style.marginLeft = "180px";
  blurOn();
  footerFixedOn();
}
function closeNav() {
  document.getElementById("sidenav").style.width = "0";
  //document.getElementById("main").style.marginLeft = "0";
  blurOff();
  footerFixedOff();
}