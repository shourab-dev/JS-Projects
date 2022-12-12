const btn = document.querySelector(".locate_button");
const search = document.querySelector(".search");

const apiFetch = () => {
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=7d5d8b07ef881b5d48c7814a28785472`;
  fetch(api).then(res => res.json()).then(result => weatherCheck(result))
};

const weatherCheck = (result) => {
    console.log(result);
}



btn.addEventListener("click", apiFetch);
