const button = document.querySelector(".button");
const screenShot = document.querySelector(".screenshot_bg");
const closeBtn = document.querySelector(".close-button");
const downloadBtn = document.querySelector(".download-btn")
// const screenshotSnapper = async (e) => {
//   try {
//     //*ASKING FOR PERMISSION
//     let stream = await navigator.mediaDevices.getDisplayMedia({
//       preferCurrentTab: true,
//     });
//     //* CREATING A VIDEO ELEMENTS
//     let video = document.createElement("video");
//     video.addEventListener("loadedmetadata", () => {
//       //*CREATING CANVAS
//       let canvas = document.createElement("canvas");
//       let ctx = canvas.getContext("2d");

//       canvas.width = video.videoWidth;
//       canvas.height = video.videoHeight;

//       video.play();
//       ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
//       stream.getVideoTracks()[0].stop();
//       //*screenshot preview
//       screenShot.querySelector("img").src = canvas.toDataURL();
//       screenShot.classList.add("show");
//     });
//     video.srcObject = stream;
//   } catch (error) {
//     console.log(error);
//   }
// };

const wrapperCapture = async (e) => {
  try {
    //*USER SCREEN PER
    let stream = await navigator.mediaDevices.getDisplayMedia({
      preferCurrentTab: true,
    });

    let video = document.createElement("video")
    video.addEventListener("loadedmetadata", ()=>{

        //*CREATE CANVAS
        let canvas  = document.createElement('canvas')
        let ctx = canvas.getContext('2d')
        //*CANVAS WIDTH & HEIGHT
        canvas.width = video.videoWidth
        canvas.height = video.videoHeight;

        video.play()
        //*DRAWING THE IMAGE
        ctx.drawImage(video, 0,0, canvas.width, canvas.height)
        stream.getVideoTracks()[0].stop()
        screenShot.querySelector('img').src  = canvas.toDataURL();
        downloadBtn.href = screenShot.querySelector("img").src;  
        screenShot.classList.add('show')

    })
    video.srcObject = stream;





  } catch (error) {
    console.log(error);
  }
};

button.addEventListener("click", wrapperCapture);

closeBtn.addEventListener("click", () => {
  screenShot.classList.remove("show");
  screenShot.querySelector("img").src = "";
  downloadBtn = "#";
});

