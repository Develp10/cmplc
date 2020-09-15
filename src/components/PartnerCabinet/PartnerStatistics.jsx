import React from "react";
import dateFormat from "dateformat";
import { useTranslation } from "react-i18next";
import "../../sass/partnerCabinet/partnerStatistics.sass";

const PartnerStatistics = ({ referrals }) => {
  const { t } = useTranslation();

  if (!referrals) {
    return "";
  }
  return (
    <div className="partner-statistics">
      <div className="partner-statistics__menu">
        <p className="partner-statistics__title">
          {t("partner_statistics__statistics")}
        </p>
        <button className="partner-statistics__download-button">
          {t("download_report")}
        </button>
      </div>
      <hr />
      <div className="partner-statistics__item partner-statistics__item__active">
        <p className="partner-statistics__text">
          {t("partner_statistics__number_of_partners")}
        </p>
        <p className="partner-statistics__data">{referrals.amount}</p>
      </div>
      <div className="partner-statistics__item">
        <p className="partner-statistics__text">
          {t("partner_statistics__open_lines")}
        </p>
        <p className="partner-statistics__data">{referrals.lines}</p>
      </div>
      <div className="partner-statistics__item partner-statistics__item__active">
        <p className="partner-statistics__text">
          {t("partner_statistics__steak")}
        </p>
        <p className="partner-statistics__data">{referrals.fullstack}</p>
      </div>
      <div className="partner-statistics__item">
        <p className="partner-statistics__text">
          {t("partner_statistics__share_of_steak")}
        </p>
        <p className="partner-statistics__data">{referrals.partofstack}</p>
      </div>
      <div className="partner-statistics__item partner-statistics__item__active">
        <p className="partner-statistics__text">
          {t("partner_statistics__partner_time")}
        </p>
        <p className="partner-statistics__data">{referrals.partners_time}</p>
      </div>
    </div>
  );
};

export default PartnerStatistics;
