import { resolveFlagUrl } from "../../utils/flagResolver.js";

export function renderCurrencyInputs(currencies, rates, container) {
  const inputs = {};

  currencies.forEach(code => {
    const row = document.createElement("div");
    row.className = "currency-row";

    const flagUrl = resolveFlagUrl(code);

    row.innerHTML = `
      <div class="currency-label">
        <img src="${flagUrl}" alt="${code}">
        <span>${code.toUpperCase()}</span>
      </div>
      <input type="number" step="any" data-code="${code}">
    `;

    const input = row.querySelector("input");
    input.addEventListener("input", () => {
      if (!input.value) return;
      const baseValue = parseFloat(input.value) / rates[code];
      currencies.forEach(c => {
        if (c !== code && inputs[c]) {
          inputs[c].value = (baseValue * rates[c]).toFixed(6);
        }
      });
    });

    inputs[code] = input;
    container.appendChild(row);
  });
}
