let btn = document.getElementById("darkmode-btn");
let btn2 = document.getElementById("darkmode-btn2");
let burger_btn = document.getElementById("burger_btn");
let burgerMenu = document.getElementById("mobile-menu");
let closeBtn = document.getElementById("closeBtn");

// ----------------------------dark-----------------------------

// if (!theme) localStorage.setItem("theme", "light");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
btn2.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// ---------------BURGER----------------------------

burger_btn.addEventListener("click", () => {
  burgerMenu.classList.add("right-0");
  burgerMenu.classList.remove("right-[-1000px]");
});

// ----burger cencel--------

closeBtn.addEventListener("click", () => {
  burgerMenu.classList.add("right-[-1000px]");
  burgerMenu.classList.remove("right-0");
});
