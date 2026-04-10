let toggle = document.querySelector("#settings-toggle");
let sidebar = document.querySelector("#settings-sidebar");
let closes = document.querySelector("#closes-x");
let reset = document.querySelector("#reset-settings");
document.body;
let Alex = document.querySelector("#Alex");
let Tajawal = document.querySelector("#tajawal");
let cairo = document.querySelector("#cairo");

// اختر الزرار
let toggleButton = document.getElementById("theme-toggle-button");
let html = document.documentElement; // عنصر <html>

// الكل
let allOne = document.querySelector("#all-one");

// container-imges
let allContainer = document.querySelector("#portfolio-grid");

// مواقع الويب

let webSite = document.querySelector("#website");

let itemOne = document.querySelector(".item-one");
let itemTwo = document.querySelector(".item-two");
let itemThree = document.querySelector(".item-three");
let itemFour = document.querySelector(".item-four");
let itemFive = document.querySelector(".item-five");
let itemSix = document.querySelector(".item-six");
let itemSiven = document.querySelector(".item-siven");
let itemEight = document.querySelector(".item-eight");
let itemNine = document.querySelector(".item-nine");

let Application = document.querySelector("#Application");

toggle.addEventListener("click", function () {
  sidebar.classList.remove("translate-x-full");
});

closes.addEventListener("click", function () {
  sidebar.classList.add("translate-x-full");
});

reset.addEventListener("click", function () {
  sidebar.classList.add("translate-x-full");
});

Alex.addEventListener("click", function () {
  document.body.classList.remove("font-tajawal");
  document.body.classList.remove("font-cairo");
  document.body.classList.add("font-alexandria");
});

Tajawal.addEventListener("click", function () {
  document.body.classList.remove("font-alexandria");
  document.body.classList.remove("font-cairo");
  document.body.classList.add("font-tajawal");
});

cairo.addEventListener("click", function () {
  document.body.classList.remove("font-alexandria");
  document.body.classList.remove("font-tajawal");
  document.body.classList.add("font-cairo");
});

toggleButton.addEventListener("click", () => {
  html.classList.toggle("dark");
  let isDark = html.classList.contains("dark");
  toggleButton.setAttribute("aria-pressed", isDark);
});

// allOne.addEventListener("click",function(){
//     allContainer.classList.remove("overflow-hidden")
// })
