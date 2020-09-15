const getCurrencyFullName = (currencyName) => {
  switch (currencyName) {
    case "BTC":
      return "Bitcoin";
    case "ETH":
      return "Ethereum";
    case "ERC20":
      return "USDT";
    case "USDT":
      return "Tether ERC20 (USDT)";
    case "BNB":
      return "Binance coin";
    default:
      return "";
  }
};
export default getCurrencyFullName;
