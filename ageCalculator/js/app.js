const name = document.querySelector('input[name="name"]');
const date = document.querySelector('input[name="date"]');
const button = document.querySelector('button[type="submit"]');
const resultBox = document.querySelector(".result");
const result = document.querySelector(".result h4");
const calBox = document.querySelector(".calculator");
//* SWEET ALERT 2
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

//* VALIDATION CHECKER
const checkValidation = (name, date) => {
  if (name.value == "") {
    Toast.fire({
      icon: "error",
      title: "Please Fill Up your Name",
    });
    name.classList.add("error");
    return false;
  } else if (date.value == "") {
    Toast.fire({
      icon: "error",
      title: "Please Fill Up your birthday",
    });
    date.classList.add("error");
    name.classList.remove("error");
    return false;
  } else {
    date.classList.remove("error");
    return true;
  }
};

//* COLLECT DATA FROM INPUT
const ageChecker = (e, name, date) => {
  const validated = checkValidation(name, date);

  if (validated) {
    let today = new Date();
    let birthday = new Date(date.value);

    let calculateResult = `${name.value} your age is ${
      today.getFullYear() - birthday.getFullYear()
    } years ${Math.abs(
      today.getMonth() - birthday.getMonth()
    )} months and ${Math.abs(today.getDate() - birthday.getDate())} days`;

    result.innerHTML = calculateResult;
    //* ANIMATE RESULTS
    calBox.animate(
      {
        paddingBottom: "95px",
      },
      {
        fill: "forwards",
        duration: 200,
      }
    );
    resultBox.animate(
      {
        transform: "translateY(0) translateX(-50%)",
        opacity: 1,
        visibility: "visible",
      },
      {
        fill: "forwards",
        duration: 500,
        delay: 200,
      }
    );

      //* CLEAR INPUT FIELD
      name.value = ''
      date.value = ''


  }
};

button.addEventListener("click", (e) => ageChecker(e, name, date));
