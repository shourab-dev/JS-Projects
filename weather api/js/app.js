const btn = document.querySelector(".locate_button");
const search = document.querySelector(".search");
const wrapper = document.querySelector(".wrapper");
const info = wrapper.querySelector(".info");
const images = {
  sun: "./images/sun.png",
  haze: "./images/haze.png",
  tornedo: "./images/tornedo.png",
  clouds: "./images/clouds.png",
  snow: "./images/snow.png",
  rain: "./images/rain.png",
  thunderstorm: "./images/thunderstorm.png",
};
const weatherIcon = wrapper.querySelector(".weather_icon img");
const apiFetch = () => {
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=7d5d8b07ef881b5d48c7814a28785472`;
  fetch(api)
    .then((res) => res.json())
    .then((result) => weatherCheck(result));
};

const weatherCheck = (result) => {
  const { weather, main, wind } = result;

  wrapper.style.maxHeight = "95vh";
  info.classList.add("show");

  //* UPDATING TEMP
  info.querySelector(".temp p").innerHTML = Math.ceil(main.temp - 273.1);
  info.querySelector(".extras .wind span").innerHTML = wind.speed;
  info.querySelector(".extras .pressure span").innerHTML = main.pressure;
  //*SETTING UP ICONS

  const weatherNow = weather[0].main.toLowerCase();
  if (weatherNow == "clear") {
    weatherIcon.src = images.sun;
  } else if (
    weatherNow == "haze" ||
    weatherNow == "mist" ||
    weatherNow == "smoke" ||
    weatherNow == "dust" ||
    weatherNow == "fog"
  ) {
    weatherIcon.src = images.haze;
  } else if (weatherNow == "tornado") {
    weatherIcon.src = images.tornedo;
  } else if (weatherNow == "clouds") {
    weatherIcon.src = images.clouds;
  } else if (weatherNow == "snow") {
    weatherIcon.src = images.snow;
  } else if (weatherNow == "rain") {
    weatherIcon.src = images.rain;
  } else if (weatherNow == "thunderstorm") {
    weatherIcon.src = images.thunderstorm;
  } else {
    weatherIcon.src = images.sun;
  }
};

btn.addEventListener("click", apiFetch);

search.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    apiFetch();
  }
});
