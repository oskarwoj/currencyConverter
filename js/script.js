{
  const inputCurrencyName = document.querySelector(".js-firstSelect");
  const outputCurrencyName = document.querySelector(".js-secondSelect");

  const calculateResult = (amount, firstCurrencyName, secondCurrencyName) => {
    const usdRate = 3.8922;
    const eurRate = 4.399;

    switch (firstCurrencyName) {
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

    switch (secondCurrencyName) {
      case "PLN":
        return plnValue;
      case "USD":
        return plnValue / usdRate;
      case "EUR":
        return plnValue / eurRate;
    }
  };

  const updateResultText = (result) => {
    const finalResult = document.querySelector(".js-result");
    finalResult.innerText = result.toFixed(2);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-firstInput");

    const result = calculateResult(
      +amountElement.value,
      inputCurrencyName.value,
      outputCurrencyName.value
    );
    updateResultText(result);
  };

  const changeValues = () => {
    const temp = inputCurrencyName.value;
    inputCurrencyName.value = outputCurrencyName.value;
    outputCurrencyName.value = temp;
    console.log(temp);
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");
    const swap = document.querySelector(".js-swap");

    formElement.addEventListener("submit", onFormSubmit);
    swap.addEventListener("click", changeValues);
  };

  init();
}
