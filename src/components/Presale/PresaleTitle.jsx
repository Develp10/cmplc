import React from "react";
import { useTranslation } from "react-i18next";
import titleButton from "../../images/Presale/titleButton.png";
import "../../sass/presale/presaleTitle.sass";
import ProgressBarTitle from "./ProgressBarTitle";
const PresaleTitle = ({ ico_info }) => {
  const { t } = useTranslation();

  return (
    <div className="presale-title">
      <div className="presale-title__left">
        <p className="presale-title__text">Private<wbr/> Pre-sale</p>
        <p>{t("presale__title")}</p>
        <div className="presale-title__button-container">
          <div className="presale-title__button">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSddW41iUr0QdAtCOINlqsm7B_1QpVY9ff-SRuzYEhJh5fYy0Q/viewform">
              <img src={titleButton} alt="TitleButton" />
            </a>
            <p className="presale-title__button-text">
              {t("presale__title__button")}
            </p>
          </div>
        </div>
      </div>
      <div className="presale-title__right">
        <p className="font_bold presale-title__selled-coins">
          {t("presale__title__selled_coins")}:{" "}
          {ico_info ? ico_info.selled_coins : "0"} CMP
          <div className="presale-title__vertical-line-1"></div>
        </p>
        <ProgressBarTitle ico_info={ico_info} />
        <p className="font_bold presale-title__coins-left">
          {t("presale__title__left_coins")}:{" "}
          {ico_info ? ico_info.coins_left : "0"} CMP
          <div className="presale-title__vertical-line-2"></div>
        </p>
      </div>
    </div>
  );
};

export default PresaleTitle;
