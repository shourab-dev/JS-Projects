const form = document.querySelector("form#bmiCalculator");
const alertBox = form.querySelector("p.btn");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = form.querySelector("#height").value / 100;
  const weight = form.querySelector("#weight").value;

  if (height != "" && weight != "") {
    const bmi = (weight / Math.pow(height, 2)).toFixed(2);
    let result = null;
    if (bmi < 18.5) {
      result = "Under-weight";
      alertBox.classList.add("success");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      result = "Normal";
      alertBox.classList.add("success");
    } else if (bmi >= 25 && bmi <= 29.9) {
      result = "Over-weight";
      alertBox.classList.add("danger");
    } else {
      result = "Obbesed";
      alertBox.classList.add("danger");
    }
    alertBox.classList.add("show");

    alertBox.innerHTML = `You Bmi is ${bmi} (${result})`;
  }
});
