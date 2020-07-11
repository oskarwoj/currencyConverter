{
  const firstCurrencyName = document.querySelector(".js-firstSelect");
  const secondCurrencyName = document.querySelector(".js-secondSelect");

  const calculateResult = (amount, firstCurrencyName, secondCurrencyName) => {
    const rates = {
      usd: 3.8922,
      eur: 4.399,
    };

    const { usd, eur } = rates;

    switch (firstCurrencyName) {
      case "PLN":
        plnValue = +amount;
        break;

      case "USD":
        plnValue = amount * usd;
        break;
      case "EUR":
        plnValue = amount * eur;
        break;
    }

    switch (secondCurrencyName) {
      case "PLN":
        return plnValue;
      case "USD":
        return plnValue / usd;
      case "EUR":
        return plnValue / eur;
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
      firstCurrencyName.value,
      secondCurrencyName.value
    );
    updateResultText(result);
  };

  const changeValues = () => {
    const temp = firstCurrencyName.value;
    firstCurrencyName.value = secondCurrencyName.value;
    secondCurrencyName.value = temp;
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");
    const swapElement = document.querySelector(".js-swap");

    formElement.addEventListener("submit", onFormSubmit);
    swapElement.addEventListener("click", changeValues);
  };

  init();
}
