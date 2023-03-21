// Sticking navbar
window.addEventListener("scroll", stickNavbar);

function stickNavbar(e) {
  let navbar = document.querySelector("nav");
  const stickOffset = 5;
  let pageYOffset = window.scrollY,
    navbarHeight = navbar.offsetHeight;

  if (pageYOffset > navbarHeight + stickOffset) {
    navbar.classList.add("menu-sticky");
  }
  if (pageYOffset < navbar.offsetHeight - stickOffset) {
    navbar.classList.remove("menu-sticky");
  }
}
