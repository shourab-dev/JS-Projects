const name = document.querySelector('input[name="name"]');
const date = document.querySelector('input[name="date"]');
const button = document.querySelector('button[type="submit"]');
const resultBox = document.querySelector(".result");
const result = document.querySelector(".result h4");
const calBox = document.querySelector(".calculator");
const months = [31,28,31,30,31,30,31,31,30,31,30,31]
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

    let diffYear = today.getFullYear() - birthday.getFullYear();
    let diffMonth;
    if (birthday.getMonth() >= today.getMonth()) {
      diffYear--
      diffMonth = 12 + today.getMonth() - birthday.getMonth()
    } else{
      diffMonth = today.getMonth() - birthday.getMonth();
    }

    if (birthday.getDate() >= today.getDate()) {
      
    }

    //result.innerHTML = calculateResult;
    console.log(diffMonth);
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
    // name.value = ''
    // date.value = ''
  }
};

const myTest = () => {
  let today = new Date();
  let birthday = new Date("1997-04-24");

  let todayMili = today.getTime();
  let birthdayMili = today.getTime();
  let diff = new Date(todayMili - birthdayMili);

  console.log(todayMili - birthdayMili);
};

myTest();

button.addEventListener("click", (e) => ageChecker(e, name, date));
