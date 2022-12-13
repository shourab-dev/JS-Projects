const buttons = document.querySelectorAll(".btn");
const screen = document.querySelector(".display");
const display = screen.querySelector(".display_input");
const useOnce = [".", "+", "-", "%", "*", "/"];

//* CALCULATE FUNCTION
const calculate = (e) => {
  const { currentTarget: button } = e;
  //* CLEARING THE DISPLAY FOR HISTORY
  const clearDisplay = () => {
    if (document.querySelector("p") != null) {
      screen.removeChild(document.querySelector("p"));
    }
  };

  //*CLEAR INPUT FIELD
  if (button.classList.contains("clear") || button.innerHTML == "C") {
    display.value = "";
    clearDisplay();
  }
  //* BACKSPACES
  else if (button.classList.contains("backspace")) {
    display.value = display.value.slice(0, display.value.length - 1);
  }
  //*USE ONCE FOUND
  else if (useOnce.includes(button.innerHTML)) {
    if (display.value[display.value.length - 1] != button.innerHTML) {
      display.value += button.innerHTML;
    }
  }
  //* DISPLAYING THE RESULT
  else if (button.classList.contains("equal") || button.innerHTML == "=") {
    clearDisplay();
    const p = document.createElement("p");
    p.innerHTML = display.value;
    display.value = eval(display.value.replaceAll("%", "*1/100*"));
    screen.insertBefore(p, display);
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
