const sideBtns = document.querySelectorAll(".sides button");
const wrapper = document.querySelector(".wrapper");
const cells = document.querySelectorAll(".box");
let currentPlayer = null;
let side = null;
let winRules = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [3, 4, 5],
  [6, 7, 8],
  [2, 4, 6],
  [1, 4, 7],
  [2, 5, 8],
];

let options = ["", "", "", "", "", "", "", "", ""];

//*UPDATE PLAYER
const updatePlayer = () => {
  currentPlayer = currentPlayer == "X" ? "O" : "X";
  document.querySelector(
    ".sides h2"
  ).innerHTML = `${currentPlayer} player's turn`;
};

//* CELL CLICK EVENT
const cellCheck = ({ target } = e) => {
  console.log(currentPlayer);
  target.innerHTML = currentPlayer;
  updatePlayer();
};

//* INT THE GAME
const initializeGame = () => {
  Array.from(cells).map((cell) => {
    cell.addEventListener("click", cellCheck);
  });
};

//*RESETING THE GAME
window.onbeforeunload = function () {
  side = null;
  localStorage.removeItem("side");
};

//*CHOOSING A SIDE
const chooseSides = (e) => {
  const { target } = e;

  //*STORING A SIDE
  if (!localStorage.getItem("side")) {
    side = target.innerHTML;
    localStorage.setItem("side", target.innerHTML);
    document.querySelector(
      ".sides h2"
    ).innerHTML = `${target.innerHTML} player's turn`;
    initializeGame();
  }

  if (side) {
    currentPlayer = side;

    Array.from(sideBtns).map((btn) => {
      btn.style.display = "none";
    });
    target.classList.add("selected");
    wrapper.classList.remove("stop");
  }
};

Array.from(sideBtns).map((sideBtn) => {
  sideBtn.addEventListener("click", chooseSides);
});

//*CHOOSING SIDES ENDS
