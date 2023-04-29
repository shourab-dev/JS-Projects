//* ALL MUSIC LIST
let track = document.createElement("audio");
let allMusicLists = [
  {
    id: 1,
    name: "Closer",
    audio: "audio/closer.mp3",
    image: "images/closer.jpg",
  },
  {
    id: 2,
    name: "Girl Likes You",
    audio: "audio/girl-like-you.mp3",
    image: "images/girl-like-you.jpg",
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
                   <a href="#" ><img draggable="false" src="${
                     music.image
                   }" alt="${music.name}" ></a>
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
  slidesPerView: 2,
  spaceBetween: 10,
  grabCursor: true,
});

//* FIRE EVENT ON SLIDE CHANGE

swiper.on("slideChange", function (e) {
  setTimeout(() => {
    let activeSlider = document.querySelector(
      ".sliderWrapper .swiper-slide-active"
    );

    let getAudioData = allMusicLists[activeSlider.dataset.id].audio;
    reset();
    track.src = getAudioData;
    track.load();
  }, 150);
});

//* PLAY BUTTON
const playBtn = document.querySelector(".playBtn");
const forwardBtn = document.querySelector(".forward");
const backBtn = document.querySelector(".back");

const playMusic = (e) => {
  e.target.classList.toggle("playing");
  if (e.target.classList.contains("playing")) {
    track.play();

    e.currentTarget.innerHTML = `<i class="bi bi-pause"></i>`;
  } else {
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
