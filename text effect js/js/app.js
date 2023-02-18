const heading = document.querySelector(".textGlitch");
const glitchEffect = (e) => {
  const letters = "abcdefghijklmopqrstuvwxyz";
    //* count 
    let count = 0
  //*   set interval
  let intervalLoop = setInterval(() => {
    e.target.innerHTML = e.target.innerHTML
      .split("")
      .map((word, index) => {
        if(index < count){
            return e.target.dataset.text[index];
        }
        return (word = letters[Math.floor(Math.random() * 25)]);
      })
      .join("");
    

      //*CLEAR INTERVAL
      count = count + 1
      if(count > e.target.innerHTML.length){
        clearInterval(intervalLoop)
      }

  }, 100);
};

heading.addEventListener("mouseover", glitchEffect);
