const countdown = document.querySelector(".countdown");
let deltaDate = countdown.dataset.date;

//* IF NOT NULL
setInterval(() => {
    if (deltaDate != "") {
      deltaDate = new Date(deltaDate).getTime();
      let curentDate = new Date().getTime();
      const difference = deltaDate - curentDate;

      //* SETTING UP FORMULA
      const sec = 1000;
      const min = sec * 60;
      const hour = min * 60;
      const day = hour * 24;

      //*CALCULATING COUNT DOWN

      let days = Math.floor(difference / day);
      let hours = Math.floor((difference % day) / hour);
      let mins = Math.floor((difference % hour) / min);
      let secs = Math.floor((difference % min) / sec);
      if(difference < 0){
        countdown.querySelector(".days").innerHTML = 0;
        countdown.querySelector(".hour").innerHTML = 0;
        countdown.querySelector(".min").innerHTML = 0;
        countdown.querySelector(".sec").innerHTML = 0;
        return false;
      }

      //*ADD TO HTML
      countdown.querySelector(".days").innerHTML = days;
      countdown.querySelector(".hour").innerHTML = hours;
      countdown.querySelector(".min").innerHTML = mins;
      countdown.querySelector(".sec").innerHTML = secs;
    }
}, 1000);

