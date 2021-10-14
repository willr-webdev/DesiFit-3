// function openMobileNav() {
//   document.querySelector(".fa-bars").style.display = "none";
//   document.querySelector(".open-nav").style.display = "flex";
// }

// function closeMobileNav() {
//   document.querySelector(".open-nav").style.display = "none";
//   document.querySelector(".fa-bars").style.display = "flex";
// }

function dimMain() {
  var checkbox = document.getElementById('nav_checkbox');

  if (checkbox.checked) {
    document.querySelector(".main-wrapper").style.opacity = "0";
  } else {
    document.querySelector(".main-wrapper").style.opacity = "1";
  }
}