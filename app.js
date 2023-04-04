const navbarToggle = document.getElementById("mobile-menu");
const navbarMenu = document.querySelector(".navbar_menu");

navbarToggle.addEventListener("click", () => {
  navbarToggle.classList.toggle("is-active");
  navbarMenu.classList.toggle("active");
});

