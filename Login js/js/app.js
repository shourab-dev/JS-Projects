//* INPUT ELEMENT FOCUS
let inputsNodeLists = document.querySelectorAll(".form_input input");
let inputs = Array.from(inputsNodeLists);

if (inputs.length > 0) {
  inputs.map((input) => {
    //* ADD EVENT
    input.addEventListener("focusout", (e) => {
      //* CHECK IF INPUT IS EMPTY
      if (e.target.value !== "") {
        e.target.classList.add("active");
      } else {
        e.target.classList.remove("active");
      }
    });
  });
}

//*PASSWORD TOGGLER

const passwordToggler = document.querySelector(".password_toggler");
let passwordField = document.querySelector(".login_psk");

passwordField.addEventListener("keyup", () => {
  if (passwordField.value != "") {
    passwordToggler.classList.add("active");
  } else {
    passwordToggler.classList.remove("active");
  }
});

passwordToggler.addEventListener("click", (e) => {
  if (e.currentTarget.classList.contains("show")) {
    passwordField.type = "password";
    e.currentTarget.classList.remove("show");
  } else {
    passwordField.type = "text";
    e.currentTarget.classList.add("show");
  }
});

//*LOGIN FORM SUBMITION
const loginForm = document.querySelector(".login_form");
const formSubmitBtn = document.querySelector("button.button span");
const pushClass = (classItems, icon) => {
  classItems.map((item) => {
    icon.classList.add(item);
  });
  return icon;
};


const removeIcon = (icon) => {
  icon.innerHTML = ""
  icon.innerHTML = "Login"
}

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let icon = document.createElement("i");
  let spinnerClasses = "bi bi-arrow-clockwise rotation";
  spinnerClasses = spinnerClasses.split(" ");
  pushClass(spinnerClasses, icon);
  console.log(icon)
  formSubmitBtn.innerHTML = "";
  formSubmitBtn.appendChild(icon);

  setTimeout((e)=>{
    icon.classList.remove("rotation")
    spinnerClasses = "bi bi-check2";
     spinnerClasses = spinnerClasses.split(" ");
     pushClass(spinnerClasses, icon);
     formSubmitBtn.innerHTML = "";
     formSubmitBtn.appendChild(icon);
     setTimeout(()=>{
      removeIcon(formSubmitBtn);
     }, 400);
  }, 1000);




});

