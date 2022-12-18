const sidebar = document.querySelector(".sidebar");
const togglerBtn = sidebar.querySelector(".sidebarToggler");

const sidebarToggler = (e) => {
  sidebar.classList.toggle("collapse");
};

togglerBtn.addEventListener("click", sidebarToggler);
