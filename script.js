// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
