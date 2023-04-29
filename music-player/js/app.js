//* ALL MUSIC LIST
let track = document.createElement("audio");
const playBtn = document.querySelector(".playBtn");
const forwardBtn = document.querySelector(".forward");
const backBtn = document.querySelector(".back");
const musicSlider = document.querySelector(`.musicSlider input[type="range"]`);
let allMusicLists = [
  {
    id: 1,
    name: "Girl Likes You",
    audio: "audio/girl-like-you.mp3",
    image: "images/girl-like-you.jpg",
  },
  {
    id: 2,
    name: "Closer",
    audio: "audio/closer.mp3",
    image: "images/closer.jpg",
  },

  {
    id: 3,
    name: "Hold On",
    audio: "audio/hold-on.mp3",
    image: "images/hold-on.jpg",
  },
  {
    id: 4,
    name: "Let Her Go",
    audio: "audio/let-her-go.mp3",
    image: "images/let-her-go.jpg",
  },
  {
    id: 5,
    name: "Despacito",
    audio: "audio/despacito.mp3",
    image: "images/despacito.jpg",
  },
];

//* ALL ELEMENTS

const songSlider = document.querySelector(".sliderWrapper .swiper-wrapper");

//* INIT SLIDER WITH SONGS
const initMusicPlayList = (musicLists) => {
  let musicSlides = [];
  musicLists.map((music, index) => {
    let slide = `
       <div  data-id="${index}"  class="swiper-slide ${
      musicSlides.length == 0 ? "swiper-slide-active" : ""
    }">
                   <img draggable="false" src="${music.image}" alt="${
      music.name
    }" >
                </div>`;

    musicSlides.push(slide);
  });

  songSlider.innerHTML = ``;
  songSlider.innerHTML = musicSlides.join("");
  track.src = allMusicLists[0].audio;
  track.load();
};

initMusicPlayList(allMusicLists);

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 10,
  grabCursor: true,
  on: {
    click() {
      swiper.slideTo(this.clickedIndex);
    },
  },
});

//* FIRE EVENT ON SLIDE CHANGE

swiper.on("slideChange", (e) => {
  setTimeout(() => {
    let activeSlider = document.querySelector(
      ".sliderWrapper .swiper-slide-active"
    );

    let getAudioData = allMusicLists[activeSlider.dataset.id].audio;

    track.src = getAudioData;
    track.load();
    track.play();

    playBtn.innerHTML = `<i class="bi bi-pause"></i>`;
  }, 150);
});

//* PLAY BUTTON

const playMusic = (e) => {
  e.target.classList.toggle("playing");
  let setProgress = setInterval(() => {
    musicSlider.value = track.currentTime;
    getPercentage(track.duration, track.currentTime);
    if(track.duration == track.currentTime){
      forwardsPlayList()
    }
  }, 1000);

  if (e.target.classList.contains("playing")) {
    track.play();
    e.currentTarget.innerHTML = `<i class="bi bi-pause"></i>`;
  } else {
    clearInterval(setProgress);
    track.pause();
    e.currentTarget.innerHTML = `  <i class="bi bi-play-fill"></i>`;
  }
};

const reset = (e) => {
  playBtn.innerHTML = ` <i class="bi bi-play-fill"></i>`;
  track.currentTime = 0;
};

const forwardsPlayList = (e) => {
  swiper.slideNext();
};
const backwardsPlayList = (e) => {
  swiper.slidePrev();
};

playBtn.addEventListener("click", playMusic);
forwardBtn.addEventListener("click", forwardsPlayList);
backBtn.addEventListener("click", backwardsPlayList);

//* TRACK ON CHANGE
const changeTrack = (e) => {
  track.currentTime = e.target.value;
  track.play();
  playBtn.innerHTML = `<i class="bi bi-pause"></i>`;
  getPercentage(track.duration, track.currentTime);
};
musicSlider.addEventListener("change", changeTrack);

//* CALCULATE PERCENTAGE
const getPercentage = (time, current) => {
  let currentWidth = Math.floor((100 / time) * current);
  console.log(time, current);
  musicSlider.style.setProperty("--width", `${currentWidth}%`);
};

//* TRACK ON LOAD
track.addEventListener("loadedmetadata", () => {
  musicSlider.max = track.duration;
});
