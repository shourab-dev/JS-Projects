let accordions = Array.from(document.querySelectorAll(".accordion"));

let toggleAccordion = (e, accordion) => {
  const target = e.currentTarget.dataset.target;
  const accordionBody = accordion.querySelector(target);

  //*   active body
  e.currentTarget.classList.add("active");
  accordionBody.classList.add("active");
};

let removeAccordionClass = (accordions) => {
  accordions.map((acc,index) => {
    acc.querySelector('.accordion_body').classList.remove('active')
    acc.classList.remove("active");
  });
};

accordions.map((accordion) => {
  accordion.addEventListener("click", (e) => {
    removeAccordionClass(accordions);

    toggleAccordion(e, accordion);
  });
});
