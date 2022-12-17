const { innerWidth: width } = window;
const front = document.querySelector("#front .wrapper");
window.onmousemove = (e) => {
  const percentage = Math.round((100 / width) * e.clientX);
  front.animate(
    {
      width: `${percentage}%`,
    },
    { duration: 150, fill: "forwards" }
  );
};

