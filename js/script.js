const formElement = document.querySelector(".js-form");

const amountElement = document.querySelector(".js-firstInput");
const inputCurrencyName = document.querySelector(".js-firstSelect");
const outputCurrencyName = document.querySelector(".js-secondSelect");

const finalResult = document.querySelector(".js-result");

formElement.addEventListener("click", (event) => {
  event.preventDefault();

  const amount = amountElement.value;
  const firstCurrency = inputCurrencyName.value;
  const secondCurrency = outputCurrencyName.value;

  const usdRate = 3.8922;
  const eurRate = 4.399;
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

const swap = document.querySelector(".js-swap");

swap.addEventListener("click", () => {
  const temp = inputCurrencyName.value;
  inputCurrencyName.value = outputCurrencyName.value;
  outputCurrencyName.value = temp;
});
