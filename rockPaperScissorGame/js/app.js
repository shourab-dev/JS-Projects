const wrapper = document.querySelector(".wrapper");
const resultBtn = document.querySelector(".result");

const playerBtns = Array.from(
  document.querySelectorAll(".playerChoice button")
);
const playerImage = document.querySelector("img.player");
const computerImage = document.querySelector("img.com");

//* SET OF LISTS
const allItems = {
  rock: "image/rock-rev.png",
  paper: "image/paper.png",
  scissor: "image/scissor.png",
};

const allItemsRev = {
  rock: "image/rock.png",
  paper: "image/paper-rev.png",
  scissor: "image/scissor-rev.png",
};

//* INIT GAME
const initGame = () => {
  wrapper.classList.add("running");
};

resultBtn.addEventListener("click", initGame);

//* GET RESULT

const gameResult = (e) => {
  let player = userInput(e);
  let com = computerInput(Object.keys(allItems));
  playAnimation(playerImage, computerImage, player, com);
};

//* PLAY ANIMATION
const playAnimation = async (player, computer, playerInput, comInput) => {
  //* RESETING VALUES
  player.src = allItems.rock;
  computer.src = allItemsRev.rock;
  player.classList.remove("active");
  computer.classList.remove("active");

  //* PLAY ROTATE ANIMATION
  setTimeout(() => {
    player.classList.add("active");
    computer.classList.add("active");
  }, 50);

  //* CHANGE SCR IMAGES
  setTimeout(() => {
    player.src = allItems[`${playerInput}`];
    computer.src = allItemsRev[`${comInput}`];

    //* CHECK WINNERS
    let result = checkWinner(playerInput, comInput);
    resultBtn.innerHTML = result;
  }, 1500);
};

//* CHECK FOR WINNER

const checkWinner = (playerInput, comInput) => {
  if (playerInput == comInput) {
    return "Draw 😓";
  } else if (comInput == "rock") {
    return playerInput == "paper" ? "You Win 😀" : "You Lose 😭";
  } else if (comInput == "paper") {
    return playerInput == "scissor" ? "You Win 😀" : "You Lose 😭";
  } else if (comInput == "scissor") {
    return playerInput == "rock" ? "You Win 😀" : "You Lose 😭";
  }
};

//* GET USER INPUT
const removeAllActives = (data, className) => {
  data.map((data) => data.classList.remove(className));
};

const userInput = (e) => {
  removeAllActives(playerBtns, "active");
  e.currentTarget.classList.add("active");

  let player = e.currentTarget.dataset.name;
  return player;
};

//* GET COMPUTER INPUT
const computerInput = (list) => {
  let getRan = Math.floor(Math.random() * (0 + 3) + 0);
  return list[getRan];
};

playerBtns.map((button) => button.addEventListener("click", gameResult));
