const formElement = document.querySelector(".js-form");
const amountElement = document.querySelector(".js-firstInput");
const inputCurrencyName = document.querySelector(".js-firstSelect");
const outputCurrencyName = document.querySelector(".js-secondSelect");
const finalResult = document.querySelector(".js-result");

const calculateResult = (amount, firstCurrency, secondCurrency) => {
  const usdRate = 3.8922;
  const eurRate = 4.399;

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
      return plnValue;
    case "USD":
      return plnValue / usdRate;
    case "EUR":
      return plnValue / eurRate;
  }
};

formElement.addEventListener("click", (event) => {
  event.preventDefault();

  let result = calculateResult(amountElement.value, inputCurrencyName.value, outputCurrencyName.value);

  console.log(result);
  finalResult.innerText = result.toFixed(2);
});

const swap = document.querySelector(".js-swap");

swap.addEventListener("click", () => {
  const temp = inputCurrencyName.value;
  inputCurrencyName.value = outputCurrencyName.value;
  outputCurrencyName.value = temp;
  console.log(temp);
});
