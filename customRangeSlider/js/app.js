const slider = document.querySelector(".slider");
const inputRange = document.querySelector('input[type="range"]');
const result = document.querySelector(".result");
const sliderBtn = document.querySelector(".rangearea span");
let isDragging = false;
//* slider
const changeRangeValue = (e) => {
  const path = e.clientX - e.currentTarget.getBoundingClientRect().x;
  const maxValue = inputRange.max;
  const width = Math.ceil(e.currentTarget.getBoundingClientRect().width);
  const inputValue = Math.ceil((maxValue / width) * path);
  const percentage = Math.round((100 / maxValue) * inputValue);
  result.innerHTML = inputValue;
  sliderBtn.animate(
    {
      left: `${percentage}%`,
    },
    {
      fill: "forwards",
      duration: 100,
    }
  );
};

//* CHANGE SLIDER ON CLICK
slider.addEventListener("click", changeRangeValue);

