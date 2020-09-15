import React from "react";
import "../../sass/personalArea/balance.sass";
import refreshLogo from "../../images/PersonalArea/refresh.png";

const getCurrency = (currency_prices, currencyName) => {
  if (currency_prices) {
    const currency = currency_prices.find(
      (price) => price.currency === currencyName
    );
    if (currency) {
      return currency.price;
    }
  }
  return "0";
};

const Balance = ({
  wallets,
  currentWallet,
  setCurrentWallet,
  onGetWallets,
  currency_prices,
}) => {
  const cmpWallet = wallets.find((v) => v.currency === "CMP");

  return (
    <div className="balance">
      <div className="balance__top-block">
        <div className="balance__select">
          <select
            value={currentWallet}
            onChange={(event) => setCurrentWallet(event.target.value)}
          >
            {wallets.map((v, i) => (
              <option value={i}>{v.currency}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="balance__bottom-block">
        <div>
          <p className="balance__minutes">
            {cmpWallet ? cmpWallet.balance : 0}
          </p>
          <p className="balance__dash__green">&mdash;</p>
          <p className="balance__naming">Баланс CMP</p>
        </div>
        <div>
          <p className="balance__current-rate">
            {getCurrency(currency_prices, wallets[currentWallet].currency)}
          </p>
          <p className="balance__dash__green">&mdash;</p>
          <p className="balance__naming"> Текущий курс</p>
        </div>
        <div className="balance__div__black">
          <div className="balance__refresh-logo-div">
            <img
              className="balance__refresh-logo"
              onClick={() => onGetWallets()}
              src={refreshLogo}
              alt="Logo"
            />
            <p className="balance__count">
              {wallets.length > 0 ? wallets[currentWallet].balance : "0"}
              <span className="dollar">/{wallets[currentWallet].currency}</span>
            </p>
          </div>
          <p className="balance__dash__orange">&mdash;</p>
          <p className="balance__naming">Ваш баланс</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
