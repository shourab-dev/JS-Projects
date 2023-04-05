// * API SETUP
const baseUrl = "https://api.apilayer.com/exchangerates_data";
const apiKey = "HhvOJb0KNRfhr3BhRt3k3UzMYv4ueYOk";

var myHeaders = new Headers();
myHeaders.append("apikey", apiKey);

var requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: myHeaders,
};

// * API SETUP ENDS

// * GET ALL CURRENCY SYMBOLS

const selectFrom = document.querySelector("#from");
const selectTo = document.querySelector("#to");
const preloader = document.querySelector('.preloader')
const getSymbol = () => {
  fetch(`${baseUrl}/symbols`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      for (let key in result.symbols) {
        let option = document.createElement("option");
        let option2 = document.createElement("option");
        option.value = key;
        option.innerHTML = key;
        option2.value = key;
        option2.innerHTML = key;

        selectFrom.appendChild(option);
        selectTo.appendChild(option2);
      }
    })
    .catch((error) => console.log("error", error));
};

getSymbol();

// * SWEET ALERT
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

//* GET CURRENCY REAL TIME
let covvertCurrency = async (to, from, amount) => {
  let data = await fetch(
    `${baseUrl}/convert?to=${to}&from=${from}&amount=${amount}`,
    requestOptions
  );
  let result = await data.json();
    preloader.style.display = `none`;
  return result;
};

//* FORM SUBMIT

const currencyForm = document.querySelector("#currencyForm");
const resultBox = document.querySelector(".wrapper .result");
const calculateCurrencyRate = async (e) => {
  e.preventDefault();
  const selectFromValue = e.target.querySelector("#from");
  const selectToValue = e.target.querySelector("#to");
  const amountValue = e.target.querySelector("input#amount");

  if (selectFromValue.value === "" || selectToValue.value == "") {
    Toast.fire({
      icon: "error",
      title: "Please Select From & To !!",
    });
    return false;
  } else {
  preloader.style.display = `block`;
    let currencyObj = await  covvertCurrency(
      selectToValue.value,
      selectFromValue.value,
      amountValue.value
    );
      console.log(currencyObj);
    const { result, info } = currencyObj;
    resultBox.classList.add("show");
    resultBox.innerHTML = `${selectFromValue.value} to ${selectToValue.value} is ${result}. Our Current Rate is ${info.rate}`;
  }
};

currencyForm.addEventListener("submit", calculateCurrencyRate);
