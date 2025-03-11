const lg = console.log;
// Select elements

const container = document.getElementById("container");
const fromCurrency = document.getElementById("from-currency-type");
const toCurrency = document.getElementById("to-currency-type");
const inputAmount = document.getElementById("input-amount");
const outputAmount = document.getElementById("output-amount");
const swapBtn = document.getElementById("swap");
const rateDisplay = document.getElementById("rate");

fromCurrency.value = "NZD";
toCurrency.value = "NPR";
inputAmount.value = 1;
const url =
  "https://v6.exchangerate-api.com/v6/5aa7bbef8b5cde5a3cf2cf4f/latest/USD";

// function to calcute rate and populate data to DOM
function calculateRate() {
const fromCurrencyType = fromCurrency.value;
    fetch(`https://v6.exchangerate-api.com/v6/5aa7bbef8b5cde5a3cf2cf4f/latest/${fromCurrencyType}`)
    .then(res=>res.json())
    .then(data=>{
      const todayRate = data.conversion_rates[toCurrency.value];
      rateDisplay.innerHTML = `1 ${fromCurrency.value}  = ${todayRate} ${toCurrency.value}`;
      outputAmount.value = Number(todayRate * Number(inputAmount.value));
    })
    .catch(error=>{
      lg("hi binod could fetch data sorry", error)
    })

}

// function to swap the currencies 
function swapCurrency(){
  [fromCurrency.value, toCurrency.value] = [toCurrency.value, fromCurrency.value]
  calculateRate()
}


// Invoke functions
calculateRate();



// Event listiner

inputAmount.addEventListener("input",calculateRate);
fromCurrency.addEventListener("change", calculateRate);
toCurrency.addEventListener("change", calculateRate);
swapBtn.addEventListener("click", swapCurrency)


