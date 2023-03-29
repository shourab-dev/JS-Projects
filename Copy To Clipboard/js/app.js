const promoInput = document.querySelector(".promo input");
const promoButton = document.querySelector(".promo button");
const successMsg = document.querySelector('p.success')
promoButton.addEventListener("click", () => {
  navigator.clipboard.writeText(promoInput.value);
  promoInput.focus()
  
  successMsg.classList.add('show')
});
