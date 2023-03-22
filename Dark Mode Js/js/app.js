const togglerBtn = document.querySelector(".togglerBtn");
const body = document.querySelector("body");
const darkModeClass = "darkmode";
const darkModeToggler = (e) => {
  let hasClass = body.classList.contains(darkModeClass);

  if (!hasClass) {
    body.classList.add(darkModeClass);
    localStorage.setItem("theme", darkModeClass);
    return false;
  }
  localStorage.setItem("theme", "lightmode");
  body.classList.remove(darkModeClass);
};

togglerBtn.addEventListener("click", darkModeToggler);

//* THEME SCHEMA SAVES ON RELOAD
const defaultThemeSwitcher = () => {
  if (localStorage.getItem("theme") == darkModeClass) {
    body.classList.add(darkModeClass);
    return false;
  }
  body.classList.remove(darkModeClass);
};

//* THEME SCHEMA BASED ON SYSTEM
const systemThemeSchema = () => {
  let theme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (localStorage.getItem("theme") == null) {
    if (theme) {
      body.classList.add(darkModeClass);
      localStorage.setItem("theme", darkModeClass);
      return false;
    }
    localStorage.removeItem("theme");
    body.classList.remove(darkModeClass);
  } else {
    defaultThemeSwitcher();
  }
};

window.addEventListener("DOMContentLoaded", systemThemeSchema);
