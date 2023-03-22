const navbar = document.querySelector("nav.navbar");

const menuFixed = (e) => {
  const { pageYOffset: scrollTop } = window;

  if (scrollTop > 500) navbar.classList.add("activeMenu");
  else navbar.classList.remove("activeMenu");
};

// *WINDOW ON SCROLL
window.addEventListener("scroll", menuFixed);
