const menuButton = document.querySelector(".menu-toggler");
const navBox = document.querySelector(".nav-user");
const menuOverlay = document.querySelector(".menu-overlay");
const openIcon = document.querySelector(".open-icon");
const closeIcon = document.querySelector(".close-icon");
const dropDownParent = document.querySelectorAll(".dropdown-parent");
const navBar = document.querySelector(".nav-user");

menuButton.addEventListener("click", () => {
  navBox.classList.toggle("translate");
  menuOverlay.classList.toggle("hidden");
  openIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});
dropDownParent.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    item.querySelector(".dropdown").classList.toggle("hidden");
    item.querySelectorAll(".arrow").forEach((arrow) => {
      arrow.classList.toggle("hidden");
    });
  });
});
