import { getExchangeRates } from "./services/exchangeApi.js";
import { renderCurrencyInputs } from "./ui/currencyForm.js";

const currencies = ["usd", "eur", "gbp", "jpy", "pln", "cny", "btc", "eth", "usdt"];
const container = document.getElementById("currency-list");

console.log("🚀 Starting converter...");

getExchangeRates("usd", currencies)
  .then(rates => {
    console.log("✅ Rates loaded:", rates);
    renderCurrencyInputs(currencies, rates, container);
  })
  .catch(err => {
    console.error("❌ Error loading rates:", err);
    container.innerHTML = `<p class="error">${err.message}</p>`;
  });
