const sideBtns = document.querySelectorAll(".sides button");
const wrapper = document.querySelector(".wrapper");
const cells = document.querySelectorAll(".box");
const modal = document.querySelector(".modal");

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

//*RESET GAME FUNCTION
const resetGame = () => {
  side = null;
  localStorage.removeItem("side");
};

//*UPDATE MODAL
const updateModal = (isWin, text) => {
  modal.classList.add("show");
  if (isWin == true) {
    modal.querySelector("img").src = "./images/wow.gif";
  } else {
    modal.querySelector("img").src = "./images/sad.gif";
  }
  modal.querySelector("h2").innerHTML = text;
};

//* WINNER CHECKER
const winnerChecker = () => {
  for (let rule in winRules) {
    let condition = winRules[rule];
    const cellA = options[condition[0]];
    const cellB = options[condition[1]];
    const cellC = options[condition[2]];

    if (cellA == "" || cellB == "" || cellC == "") {
      continue;
    }

    if (cellA == cellB && cellB == cellC) {
      //* WINNER FOUND
      let winningText = cellA == side ? `You Win!` : `You Lose!`;
      let isWin = cellA == side ? true : false;
      resetGame();
      updateModal(isWin, winningText);
      break;
    }

    //*END OF LOOP
  }
};

//* CELL CLICK EVENT
const cellCheck = ({ target } = e) => {
  target.innerHTML = currentPlayer;
  options[target.dataset.index] = currentPlayer;
  updatePlayer();
  winnerChecker();
};

//* INT THE GAME
const initializeGame = () => {
  Array.from(cells).map((cell) => {
    cell.addEventListener("click", cellCheck);
  });
};

//*RESETING THE GAME
window.onbeforeunload = resetGame();
modal.querySelector("button.restart").addEventListener("click", () => {
  window.location.reload();
});

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
