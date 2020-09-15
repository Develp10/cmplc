import React from "react";
import dateFormat from "dateformat";
import { useTranslation } from "react-i18next";
import "../../sass/partnerCabinet/partnersTable.sass";

const PartnersTable = ({ partners }) => {
  const { t } = useTranslation();

  return (
    <div className="partners-table">
      <div className="partners-table__menu">
        <p className="partners-table__title">{t("partners_table__partners")}</p>
        <button className="partners-table__download-button">
          {t("download_report")}
        </button>
      </div>
      <hr />

      {partners && partners.length > 0 ? (
        partners.map((partner, i) => (
          <div
            key={i}
            className={`partners-table__item ${
              i % 2 === 0 ? "" : "partners-table__item__active"
            }`}
          >
            <div className="partners-table__first-div">
              <p className="partners-table__date">{`${dateFormat(
                partner.date,
                "dd.mm.yyyy"
              )} - ${dateFormat(partner.date, "HH:MM")}`}</p>
            </div>
            <div className="partners-table__middle-div">
              <p className="partners-table__id">{partner.id}</p>
            </div>
            <div className="partners-table__last-div">
              <p className="partners-table__balance">{partner.balance}</p>
            </div>
          </div>
        ))
      ) : (
        <div className="partners-table__not-found">
          <p>{t("you_have_nothing_yet")}</p>
        </div>
      )}
    </div>
  );
};

export default PartnersTable;
