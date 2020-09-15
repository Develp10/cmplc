import moment from "moment";
import React from "react";
import { useTranslation } from "react-i18next";
import "../../sass/presale/progressBarDate.sass";

const ProgressBarDate = ({ ico_info }) => {
  const { t } = useTranslation();

  if (!ico_info) {
    return "";
  }

  const percents =
    ((Math.floor(Date.now() / 1000) - ico_info.start_date) /
      (ico_info.presale_end_date - ico_info.start_date)) *
    100;

  return (
    <div className="progress-bar-date">
      <div className="progress-bar-date__title">
        <div className="progress-bar-date__title-item-left">
          <p>{moment(Number(ico_info.start_date) * 1000).format("MMM Do")}</p>
          <p>rICO {t("progress_bar_date_start")}</p>
        </div>
        <div className="progress-bar-date__title-item-right">
          <p>
            {moment(Number(ico_info.presale_end_date) * 1000).format("MMM Do")}
          </p>
          <p>rICO {t("progress_bar_date_end")}</p>
        </div>
      </div>
      <div className="progress-bar-date__container">
        <div
          className="progress-bar-date__filler-base"
          style={{ width: percents > 9.5 ? `${percents}%` : "10%" }}
        >
          <div className="progress-bar-date__filler-line-left"></div>
          <div className="progress-bar-date__filler-gray"></div>
          <div className="progress-bar-date__filler-line-right"></div>
        </div>
        <div
          style={{ width: `${100 - percents}%` }}
          className="progress-bar-date__base"
        ></div>
        <div className="progress-bar-date__base-line-right"></div>
      </div>
    </div>
  );
};

export default ProgressBarDate;
