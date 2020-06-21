let formElement = document.querySelector(".js-form");

let amountElement = document.querySelector(".js-firstInput");

let firstSelect = document.querySelector(".js-firstSelect");
let secondSelect = document.querySelector(".js-secondSelect");

let finalResult = document.querySelector(".js-result");

formElement.addEventListener("click", (event) => {
  event.preventDefault();

  let amount = amountElement.value;
  let firstCurrency = firstSelect.value;
  let secondCurrency = secondSelect.value;

  let usdRate = 3.8922;
  let eurRate = 4.399;
  let plnValue;

  switch (firstCurrency) {
    case "PLN":
      plnValue = +amount;
      break;

    case "USD":
      plnValue = amount * usdRate;
      break;
    case "EUR":
      plnValue = amount * eurRate;
      break;
  }

  switch (secondCurrency) {
    case "PLN":
      result = plnValue;
      break;
    case "USD":
      result = plnValue / usdRate;
      break;
    case "EUR":
      result = plnValue / eurRate;
      break;
  }

  finalResult.innerText = result.toFixed(2);
});

let swap = document.querySelector(".js-swap");

swap.addEventListener("click", () => {
  let temp = firstSelect.value;
  firstSelect.value = secondSelect.value;
  secondSelect.value = temp;
});
