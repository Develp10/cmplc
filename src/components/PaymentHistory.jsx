import React from "react";
import dateFormat from "dateformat";
import { useTranslation } from "react-i18next";
import "../sass/paymentHistory.sass";

const paymentStatusSwitch = (status) => {
  switch (status) {
    case "WALLET_CREATED":
      return "Кошелек создан";

    default:
      return "";
  }
};

const PaymentHistory = ({ payment_history }) => {
  const { t } = useTranslation();
  return (
    <div className="payment-history">
      <div className="payment-history__menu">
        <p className="payment-history__title">{t("payment_history")}</p>
        <button className="payment-history__download-button">
          {t("download_report")}
        </button>
      </div>
      <hr />
      {payment_history && payment_history.length !== 0 ? (
        <div className="payment-history__table">
          {payment_history.map((payment, i) => (
            <div
              key={i}
              className={`payment-history__item ${
                i % 2 === 0 ? "" : "payment-history__item__active"
              }`}
            >
              <div className="payment-history__first-div">
                <p>{dateFormat(payment.date, "HH:MM")}</p>
                <p>{dateFormat(payment.date, "dd.mm.yyyy")}</p>
              </div>
              <div className="payment-history__middle-div">
                <p>{paymentStatusSwitch(payment.status)}</p>
                <p className="payment-history__address">{payment.address}</p>
              </div>
              <div className="payment-history__last-div">
                <p>{`${payment.amount} ${payment.val}`}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="payment-history__not-found">
          <p>{t("you_have_nothing_yet")}</p>
        </div>
      )}
    </div>
  );
};

export default PaymentHistory;
