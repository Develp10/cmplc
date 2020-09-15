import React, { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import StatusPopup from "../StatusPopup";
import "../../sass/cashOutPopup.sass";

const CashOutPopup = ({
  wallet,
  isCashOutPopup,
  setIsPopupFalse,
  withdrawCmp,
}) => {
  const { t } = useTranslation();
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState(0.01);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setIsPopupFalse();
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  if (!isCashOutPopup) {
    return "";
  }

  return (
    <div className="popup__screen">
      <div className="popup__container">
        <div onClick={() => setIsPopupFalse()}>
          <div className="cl-btn-7"></div>
        </div>
        <div className="cash-out-popup__title">
          <p>{t("cash_out_popup__cmp_withdraw")}</p>
        </div>
        <div className="cash-out-popup__table">
          <div className="cash-out-popup__item">
            <p>{t("cash_out_popup__available_withdrawal_amount")}</p>
            <p>{wallet.balance}</p>
          </div>
          <div className="cash-out-popup__item">
            <p>{t("cash_out_popup__commission")}</p>
            <p>0.1 CMP</p>
          </div>
          <div className="cash-out-popup__item responsive-input-container">
            <p>{t("cash_out_popup__withdrawal_amount")}</p>
            <input
              onChange={(event) => setAmount(event.target.value)}
              value={amount}
              className="cash-out-popup__input"
              type="number"
              step="0.01"
            />
          </div>
          <div className="cash-out-popup__item responsive-input-container">
            <p>{t("cash_out_popup__cmp_recipient_address")}</p>
            <input
              onChange={(event) => setAddress(event.target.value)}
              value={address}
              className="cash-out-popup__input"
              placeholder={t("cash_out_popup__your_address")}
            />
          </div>
        </div>
        <div className="cash-out-popup__item-button">
          <div
            onClick={() => withdrawCmp(address, amount)}
            className="cash-out-popup__button"
          >
            <p>{t("cash_out_popup__withdraw")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashOutPopup;
