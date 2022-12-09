const track = document.querySelector("#image_track");
const images = document.querySelectorAll(".img_slider img");
window.onmousedown = (e) => {
  track.dataset.mouseDownAt = e.clientX;
};
window.onmouseup = (e) => {
  track.dataset.mouseDownAt = 0;
  track.dataset.prevPercentage = track.dataset.percentange;
};

window.onmousemove = (e) => {
  if (track.dataset.mouseDownAt == "0") return false;
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
  const maxDelta = window.innerWidth / 2;
  const percentange = (mouseDelta / maxDelta) * -100;
  const nextPercentage = Math.max(
    Math.min(parseFloat(track.dataset.prevPercentage) + percentange, 0),-100
  );
    console.log(nextPercentage)
  track.dataset.percentange = nextPercentage;
  track.style.transform = `translate(${nextPercentage}%, -50%)`;

for(i=0;i < images.length; i++){
    images[i].animate({
        objectPosition: `${100 + nextPercentage}% center`,
    },{
        duration:1200,
        fill: 'forwards'
    })
}

};
