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

function colorAllGroup() {
  var checkbox = document.getElementById("all_checkbox");

  if (checkbox.checked) {
    document.querySelector("div.cat-1").style.backgroundColor = "var(--df-main)";
    document.querySelector(".all_toggle").style.fontWeight = "bold";
    document.querySelector(".all_toggle").style.fontStyle = "italic";
  }
  else {
    document.querySelector("div.cat-1").style.backgroundColor = "rgba(255, 255, 255, .7)";
    document.querySelector(".all_toggle").style.fontWeight = "normal";
    document.querySelector(".all_toggle").style.fontStyle = "normal";
  }
}

function colorRecipesGroup() {
  var checkbox = document.getElementById("recipes_checkbox");

  if (checkbox.checked) {
    document.querySelector("div.cat-2").style.backgroundColor = "var(--df-main)";
    document.querySelector(".recipes_toggle").style.fontWeight = "bold";
    document.querySelector(".recipes_toggle").style.fontStyle = "italic";
  }
  else {
    document.querySelector("div.cat-2").style.backgroundColor = "rgba(255, 255, 255, .25)";
    document.querySelector(".recipes_toggle").style.fontWeight = "normal";
    document.querySelector(".recipes_toggle").style.fontStyle = "normal";
  }
}

function colorFitnessGroup() {
  var checkbox = document.getElementById("fitness_checkbox");

  if (checkbox.checked) {
    document.querySelector("div.cat-3").style.backgroundColor = "var(--df-main)";
    document.querySelector(".fitness_toggle").style.fontWeight = "bold";
    document.querySelector(".fitness_toggle").style.fontStyle = "italic";
  }
  else {
    document.querySelector("div.cat-3").style.backgroundColor = "rgba(255, 255, 255, .7)";
    document.querySelector(".fitness_toggle").style.fontWeight = "normal";
    document.querySelector(".fitness_toggle").style.fontStyle = "normal";
  }
}

function colorNutritionGroup() {
  var checkbox = document.getElementById("nutrition_checkbox");

  if (checkbox.checked) {
    document.querySelector("div.cat-4").style.backgroundColor = "var(--df-main)";
    document.querySelector(".nutrition_toggle").style.fontWeight = "bold";
    document.querySelector(".nutrition_toggle").style.fontStyle = "italic";
  }
  else {
    document.querySelector("div.cat-4").style.backgroundColor = "rgba(255, 255, 255, .25)";
    document.querySelector(".nutrition_toggle").style.fontWeight = "normal";
    document.querySelector(".nutrition_toggle").style.fontStyle = "normal";
  }
}

function colorMotivationGroup() {
  var checkbox = document.getElementById("motivation_checkbox");

  if (checkbox.checked) {
    document.querySelector("div.cat-5").style.backgroundColor = "var(--df-main)";
    document.querySelector(".motivation_toggle").style.fontWeight = "bold";
    document.querySelector(".motivation_toggle").style.fontStyle = "italic";
  }
  else {
    document.querySelector("div.cat-5").style.backgroundColor = "rgba(255, 255, 255, .7)";
    document.querySelector(".motivation_toggle").style.fontWeight = "normal";
    document.querySelector(".motivation_toggle").style.fontStyle = "normal";
  }
}

function colorOtherGroup() {
  var checkbox = document.getElementById("other_checkbox");

  if (checkbox.checked) {
    document.querySelector("div.cat-6").style.backgroundColor = "var(--df-main)";
    document.querySelector(".other_toggle").style.fontWeight = "bold";
    document.querySelector(".other_toggle").style.fontStyle = "italic";
  }
  else {
    document.querySelector("div.cat-6").style.backgroundColor = "rgba(255, 255, 255, .25)";
    document.querySelector(".other_toggle").style.fontWeight = "normal";
    document.querySelector(".other_toggle").style.fontStyle = "normal";
  }
}