const currencyE1_one = document.getElementById('currency-one');

const currencyE1_two = document.getElementById('currency-two');

const amountE1_one = document.getElementById('amount-one');

const amountE1_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');

const swap = document.getElementById('swap');

//fetching the exchange rate and updated to dom

const calculate = () => {

   const currency_one = currencyE1_one.value;

   const currencyE1_two = currencyE1_two.value;

   fetch('https://v6.exchangerate-api.com/v6/69589910d78aecf65b02bacf/latest/USD').then(res => res.json().then(data));

   const rate = data.conversion_rates['currency_two'];
  
rateEl.innerText = '1 $ {currency_one} = $ {currency_two}';

    (amountE1_two.value = amountE1_one * rate).toFixed(2);


}

//Event Listeners

currencyE1_one.addEventListener('change', 'calculate');

currencyE1_two.addEventListener('change', 'calculate');

