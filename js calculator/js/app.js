const buttons = document.querySelectorAll(".btn");
const display = document.querySelector(".display .display_input");
const useOnce = [".", "+", "-", "%", "*", "/"];

//* CALCULATE FUNCTION
const calculate = (e) => {
  const { currentTarget: button } = e;

  //*CLEAR INPUT FIELD
  if (button.classList.contains("clear") || button.innerHTML == "C") {
    display.value = "";
  }
  //* BACKSPACES
  else if (button.classList.contains("backspace")) {
    display.value = display.value.slice(0, display.value.length - 1);
  } else if (useOnce.includes(button.innerHTML)) {
  }

  //*DISPLAY
  else {
    display.value += button.innerHTML;
  }
};

//*ADDING EVENT LISTENERS
Array.from(buttons).map((btn) => {
  btn.addEventListener("click", calculate);
});
