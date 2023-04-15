const submitBtn = document.querySelector("button.submit");
const display = document.querySelector("input.display");
const strength = document.querySelector(".strength");
const errorsDisplay = document.querySelector(".errors");

//* FORM INPUTS
const totalLength = document.querySelector(".totalLength");
const isUpper = document.querySelector("#upper");
const isLower = document.querySelector("#lower");
const isNum = document.querySelector("#number");
const isSpecialChar = document.querySelector("#char");

const generateUpper = (e) => {
  const startingIndex = 65;

  let randomNum = Math.floor(Math.random() * 26);
  return String.fromCharCode(randomNum + startingIndex);
};
const generateLower = (e) => {
  const startingIndex = 97;
  let randomNum = Math.floor(Math.random() * 26);
  return String.fromCharCode(randomNum + startingIndex);
};
const generateNumber = (e) => {
  const startingIndex = 48;
  let randomNum = Math.floor(Math.random() * 10);
  return String.fromCharCode(randomNum + startingIndex);
};
const generateSpecialChar = (e) => {
  let listOfSpecialChar = ["@", "#", "!", "%", "?", "/", "{", "}"];
  let randomNum = Math.floor(Math.random() * listOfSpecialChar.length);
  return listOfSpecialChar[randomNum];
};

//* PASSWORD GENERATOR
const passwordGenerator = (e) => {
  let passwordBuilder = [];

  if (isUpper.checked) {
    passwordBuilder.push(generateUpper);
  }
  if (isLower.checked) {
    passwordBuilder.push(generateLower);
  }
  if (isSpecialChar.checked) {
    passwordBuilder.push(generateSpecialChar);
  }
  if (isNum.checked) {
    passwordBuilder.push(generateNumber);
  }

  let myPassword = "";
  let passwordLength = totalLength.value ? totalLength.value : 20;

  for (let i = 0; i < passwordLength; i++) {
    let randomNum = Math.floor(
      Math.random() * (passwordBuilder.length - 0) + 0
    );

    myPassword += passwordBuilder[randomNum]();
  }

  display.value = myPassword;

  display.dispatchEvent(new Event("input"));
};

submitBtn.addEventListener("click", passwordGenerator);

//* CHECK FOR PASSWORD STRENGTH

const checkForLower = (password) => {
  let matches = password.match(/[a-z]/g) || [];

  if (matches.length == 0) {
    return {
      error: "Please enter a lower case charecter",
      deduction: 20,
    };
  }
};
const checkForUpper = (password) => {
  let matches = password.match(/[A-Z]/g) || [];

  if (matches.length == 0) {
    return {
      error: "Please enter a upper case charecter",
      deduction: 20,
    };
  }
};
const checkForNum = (password) => {
  let matches = password.match(/[0-9]/g) || [];

  if (matches.length == 0) {
    return {
      error: "Please enter a Number",
      deduction: 20,
    };
  }
};
const checkForSpecialChar = (password) => {
  let matches = password.match(/[^a-zA-z0-9\s]/g) || [];

  if (matches.length == 0) {
    return {
      error: "Please enter a Special Charecter",
      deduction: 20,
    };
  }
};
const checkForLength = (password) => {
  if (password.length <= 8) {
    return {
      error: "Your password Has to be greater than 8 digit",
      deduction: 20,
    };
  }
};

const passwordStrengthChecker = (e) => {
  let totalStrength = 100;
  let password = e.target.value;
  let weakness = [];
  if (checkForLower(password)) {
    weakness.push(checkForLower(password));
  }
  if (checkForUpper(password)) {
    weakness.push(checkForUpper(password));
  }
  if (checkForNum(password)) {
    weakness.push(checkForNum(password));
  }
  if (checkForSpecialChar(password)) {
    weakness.push(checkForSpecialChar(password));
  }
  if (checkForLength(password)) {
    weakness.push(checkForLength(password));
  }

  weakness.map((weak) => {
    totalStrength -= weak.deduction;
  });

  strength.style.setProperty("--width", `${totalStrength}%`);

  if (totalStrength < 50) {
    strength.style.setProperty("--position", 0);
  } else if (totalStrength > 50 && totalStrength <= 80) {
    strength.style.setProperty("--position", "center");
  } else {
    strength.style.setProperty("--position", "right");
  }
};

display.addEventListener("input", passwordStrengthChecker);

display.addEventListener("click", (e) => {
  let value = e.target.value;
  if (value == "") return;
  e.target.classList.add("active");
  navigator.clipboard.writeText(value);

  setTimeout(() => {
    e.target.classList.remove("active");
  }, 1000);
});
