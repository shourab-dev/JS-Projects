const togglerBtn = document.querySelector(".togglerBtn");
const body = document.querySelector("body");
const darkModeClass = "darkmode";
const darkModeToggler = (e) => {
  let hasClass = body.classList.contains(darkModeClass);

  if (!hasClass) {
    body.classList.add(darkModeClass);
    console.log(hasClass);
    return false;
  }
  body.classList.remove(darkModeClass);
};

togglerBtn.addEventListener("click", darkModeToggler);
