import React, { useState } from "react";
import "../../sass/personalArea/balanceTable.sass";

import refreshLogo from "../../images/PersonalArea/refresh.png";
import getCurrencyFullName from "../../utils/getCurrencyName";
import CashInPopup from "./CashInPopup";
import CashOutPopup from "./CashOutPopup";
import { useTranslation } from "react-i18next";
// const getCurrencyPrice = (currency_prices, currencyName) => {
//   console.log("getCurrencyPrice", currency_prices, currencyName);
//   if (currency_prices) {
//     const currency = currency_prices.find(
//       (price) => price.currency.indexOf(currencyName) > -1
//     );
//     if (currency) {
//       return currency.price;
//     }
//   }
//   return "0";
// };

const getCmp = (wallets) => wallets.find((wallet) => wallet.currency === "CMP");

const BalanceTable = ({
  wallets,
  currentWallet,
  setCurrentWallet,
  onGetWallets,
  currency_prices,
  convertCrypto,
  withdrawCmp,
  isPopup,
  isError,
  popupMessage,
  popupClose,
}) => {
  const { t } = useTranslation();
  const cmp = getCmp(wallets);
  const [isCashInPopup, setIsCashInPopup] = useState(false);
  const [currentWalletPopup, setCurrentWalletPopup] = useState({});
  const onSetIsCashInPopup = () => setIsCashInPopup(false);

  const [isCashOutPopup, setIsCashOutPopup] = useState(false);
  const onSetIsCashOutPopup = () => setIsCashOutPopup(false);

  return (
    <div className="balance-table">
      <CashInPopup
        wallet={currentWalletPopup}
        isPopup={isCashInPopup}
        setIsPopupFalse={onSetIsCashInPopup}
      />
      <CashOutPopup
        wallet={currentWalletPopup}
        isPopup={isPopup}
        withdrawCmp={withdrawCmp}
        setIsPopupFalse={onSetIsCashOutPopup}
        isCashOutPopup={isCashOutPopup}
        isError={isError}
        popupClose={popupClose}
        popupMessage={popupMessage}
      />
      <div className="balance-table__title">
        <div className="balance-table__bottom-block">
          <div className="balance-table__div__black">
            <div className="balance__refresh-logo-div">
              <img
                className="balance__refresh-logo"
                onClick={() => onGetWallets()}
                src={refreshLogo}
                alt="Logo"
              />
              <p className="balance__count">{cmp ? cmp.balance : "0"}</p>
            </div>
            <p className="balance__dash__orange">&mdash;</p>
            <p className="balance__naming">
              {t("balance_table__your_balance_cmp")}
            </p>
          </div>
          <div className="balance-table__cmp-buttons">
            <div
              onClick={() => {
                setIsCashOutPopup(true);
                setCurrentWalletPopup(cmp);
              }}
              className="balance-table__cash-button__white"
            >
              <p>{t("balance_table__withdraw")}</p>
            </div>
            <div
              onClick={() => {
                setIsCashInPopup(true);
                setCurrentWalletPopup(cmp);
              }}
              className="balance-table__cash-button__gray"
            >
              <p>
                <p>{t("balance_table__cash_in")}</p>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="balance-table__body">
        {wallets &&
          wallets.map((wallet, i) => {
            return (
              wallet.currency !== "CMP" && (
                <div key={i} className="balance-table__item">
                  <div className="balance-table__item-row balance-table__item__active">
                    <div className="balance-table__item-row-first">
                      <p className="font__bold balance-table__currency-name">
                        {getCurrencyFullName(wallet.currency)} (
                        {wallet.currency})
                      </p>
                      <p className="balance-table__balance">{wallet.balance}</p>
                      <p className="font__bold"> &asymp; </p>
                      <p className="balance-table__balance-cmp-price">
                        {wallet.cmp}
                      </p>
                      <p className="font__bold balance-table__cmp-name"> (CMP)</p>
                    </div>
                  </div>
                  <div className="balance-table__title-row">
                    <div
                      onClick={() => {
                        setIsCashInPopup(true);
                        setCurrentWalletPopup(wallet);
                      }}
                      className="balance-table__cash-in-button"
                    >
                      <p>
                        {t("balance_table__cash_in")} {wallet.currency}
                      </p>
                    </div>
                    <div
                      onClick={() =>
                        convertCrypto(wallet ? wallet.currency : "")
                      }
                      className="balance-table__buy-button"
                    >
                      <p>{t("balance_table__buy")}</p>
                    </div>
                  </div>
                </div>
              )
            );
          })}
      </div>
    </div>
  );
};

export default BalanceTable;
