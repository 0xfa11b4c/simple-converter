export async function getExchangeRates(base = "usd", symbols = []) {
  const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${base}.json`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    const rates = data[base];

    symbols.forEach(sym => {
      if (!rates[sym]) rates[sym] = 1;
    });

    return rates;
  } catch (e) {
  console.error(e);
  throw new Error("Failed to load exchange rates");
  }
}
