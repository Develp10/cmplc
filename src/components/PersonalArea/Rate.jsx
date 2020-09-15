import React from "react";
import "../../sass/personalArea/rate.sass";
import getCurrencyFullName from "../../utils/getCurrencyName";
import { useTranslation } from "react-i18next";

const Rate = ({ currency_prices, cmpWallet }) => {
  const { t } = useTranslation();

  if (!currency_prices || !cmpWallet) {
    return "";
  }
  return (
    <div className="rate">
      <div className="rate__menu">
        <p className="rate__title">{t("rate__rate")}</p>
      </div>
      <hr />
      <div>
        {currency_prices &&
          currency_prices.map((price, i) => (
            <div
              key={i}
              className={`rate__table-row ${
                i % 2 === 0 ? "" : "rate__table-row__active"
              }`}
            >
              <div className="rate-table__item-left font__bold">
                <p>{getCurrencyFullName(price.currency)}</p>
              </div>
              <div className="rate-table__item-right">
                <p className="rate-table__item-one-currency">
                  1 {price.currency}
                </p>
                <p className="rate-table__item-symbol-equal">=</p>
                <p className="rate-table__item-price-cmp">{price.price} CMP</p>
              </div>
            </div>
          ))}
        {/* <div
          className={`rate__table-row ${
            currency_prices.length % 2 === 0 ? "" : "rate__table-row__active"
          }`}
        >
          <div className="balance-table-cash-in__input">
            <input
              placeholder="Ваш адрес"
              value={cmpWallet.address ? cmpWallet.address : ""}
            />
            <div
              onClick={() =>
                copyToClipboard(cmpWallet.address ? cmpWallet.address : "")
              }
              className="balance-table-cash-in__copy-button"
            >
              <p>Копировать</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Rate;
