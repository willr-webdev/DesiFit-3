// function openMobileNav() {
//   document.querySelector(".fa-bars").style.display = "none";
//   document.querySelector(".open-nav").style.display = "flex";
// }

// function closeMobileNav() {
//   document.querySelector(".open-nav").style.display = "none";
//   document.querySelector(".fa-bars").style.display = "flex";
// }

// function dimMain() {
//   var checkbox = document.getElementById('recipes_checkbox');

//   if (checkbox.checked) {
//     document.querySelector(".main-wrapper").style.opacity = "0";
//   } else {
//     document.querySelector(".main-wrapper").style.opacity = "1";
//   }
// }

function colorBlogGroup() {
  var checkbox = document.getElementById("recipes_checkbox");

  if (checkbox.checked) {
    document.querySelector("div.cat-2").style.backgroundColor = "var(--df-main)";
    document.querySelector(".recipes_toggle").style.fontWeight = "bold";
    document.querySelector(".recipes_toggle").style.fontStyle = "italic";
  }
  else {
    document.querySelector("div.cat-2").style.backgroundColor = "rgba(255, 255, 255, .65)";
    document.querySelector(".recipes_toggle").style.fontWeight = "normal";
    document.querySelector(".recipes_toggle").style.fontStyle = "normal";
  }
}