const navbar = document.querySelector("nav.navbar");

const menuFixed = (e) => {
  const { pageYOffset: scrollTop } = window;

  if (scrollTop > 500) navbar.classList.add("activeMenu");
  else navbar.classList.remove("activeMenu");
};

// *WINDOW ON SCROLL
window.addEventListener("scroll", menuFixed);

//* ACTIVE LINK

const navlinks = Array.from(navbar.querySelectorAll(".nav-link"));
const canvas = document.querySelector("html,body");

const activeNavLink = (e) => {
  //* REMOVE ALL ACTIVE CLASS
  navlinks.map((link) => link.classList.remove("active"));
  //*ADD CLASS
  e.target.classList.add("active");
};

navlinks.map((navLink) => {
  navLink.addEventListener("click", activeNavLink);
});
