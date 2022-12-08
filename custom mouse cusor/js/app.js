//*MOUSE MOVE
const cursor = document.querySelector(".cursor");
const title = document.querySelector(".content h1");
const imageCards = document.querySelectorAll(".img_card");
const pointer = document.querySelector(".pointer");
let root = document.querySelector(":root");
window.addEventListener("mousemove", (e) => {
  const { x, y } = e;
  root.style.setProperty("--mouseX", `${x - 20}px`);
  root.style.setProperty("--mouseY", `${y - 20}px`);

  let left = window.innerWidth / 2;
  let top = window.innerHeight / 2;

  pointer.style.left = (x / window.innerWidth) * 30 + "px";
  pointer.style.top = (y / window.innerHeight) * 30 + "px";
});

const animatedCursor = () => {
  cursor.classList.add("alternate");
};
const RemoveAnimatedCursor = () => {
  cursor.classList.remove("alternate");
};

title.addEventListener("mouseover", animatedCursor);
title.addEventListener("mouseleave", RemoveAnimatedCursor);

for (i = 0; i < imageCards.length; i++) {
  imageCards[i].addEventListener("mouseover", animatedCursor);
  imageCards[i].addEventListener("mouseleave", RemoveAnimatedCursor);
}
