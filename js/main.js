// Sticking navbar
window.addEventListener("scroll", stickNavbar);

function stickNavbar(e) {
  let pageYOffset = window.scrollY;
  const stickOffset = 5;
  let navbar = document.querySelector("nav");

  if (pageYOffset > navbar.offsetHeight + stickOffset) {
    navbar.classList.add("menu-sticky");
  }
  if (pageYOffset < navbar.offsetHeight - stickOffset) {
    navbar.classList.remove("menu-sticky");
  }
  // debugger;
}
