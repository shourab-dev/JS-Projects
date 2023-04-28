//* ALL MUSIC LIST

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
  musicLists.map((music) => {
    let slide = `
       <div class="swiper-slide ${
         musicSlides.length == 0 ? "swiper-slide-active" : ""
       }">
                   <a href="#" data-id="${
                     music.id
                   }" ><img draggable="false" src="${music.image}" alt="${
      music.name
    }" ></a>
                </div>`;

    musicSlides.push(slide);
  });

  songSlider.innerHTML = ``;
  songSlider.innerHTML = musicSlides.join("");
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
