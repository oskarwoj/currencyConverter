const inputCurrencyName = document.querySelector(".js-firstSelect");
const outputCurrencyName = document.querySelector(".js-secondSelect");

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

const changeValues = () => {
  const temp = inputCurrencyName.value;
  inputCurrencyName.value = outputCurrencyName.value;
  outputCurrencyName.value = temp;
  console.log(temp);
};

const init = () => {
  const formElement = document.querySelector(".js-form");
  const finalResult = document.querySelector(".js-result");
  const swap = document.querySelector(".js-swap");
  const amountElement = document.querySelector(".js-firstInput");

  formElement.addEventListener("click", (event) => {
    event.preventDefault();
    let result = calculateResult(
      +amountElement.value,
      inputCurrencyName.value,
      outputCurrencyName.value
    );
    finalResult.innerText = result.toFixed(2);
  });

  swap.addEventListener("click", changeValues);
};

init();
