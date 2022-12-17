const slidersNode = document.querySelectorAll(".comparism_slider");
const sliders = Array.from(slidersNode);

const moveSlider = (e) => {
  const { width, left } = e.currentTarget.getBoundingClientRect();
  const percentage = Math.abs(Math.round((100 / width) * (e.clientX - left)));
  const bar = e.currentTarget.querySelector(".slider");
  const upper = e.currentTarget.querySelector(".upper");
  const options = { duration: 200, fill: "forwards" };

  bar.animate(
    {
      left: `${percentage}%`,
    },
    options
  );
  upper.animate(
    {
      width: `${percentage}%`,
    },
    options
  );
};

sliders.map((slider) => {
  slider.addEventListener("mousemove", moveSlider);
});
