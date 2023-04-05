const hours = document.querySelector(".hours");
const mins = document.querySelector(".mins");
const secs = document.querySelector(".secs");

const digitalClock = () => {
  const date = new Date();
  hours.innerHTML =
    date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  mins.innerHTML = date.getMinutes();
  secs.innerHTML = date.getSeconds();
};

setInterval(() => {
  digitalClock();
}, 1000);
