const countryMap = {
  usd: "us",
  eur: "eu",
  gbp: "gb",
  jpy: "jp",
  pln: "pl",
  cny: "cn"
};

export function resolveFlagUrl(code) {
  const lower = code.toLowerCase();
  if (countryMap[lower]) {
    return `https://flagcdn.com/20x15/${countryMap[lower]}.png`;
  }
  return `https://static.coincap.io/assets/icons/${lower}@2x.png`;
}
