import React from "react";
import { useTranslation } from "react-i18next";
import PriceLogo from "../../images/Presale/price.svg";
import MarketcapLogo from "../../images/Presale/marketcap.svg";
import VolumeLogo from "../../images/Presale/volume.svg";
import "../../sass/chart/customLegend.sass";

const CustomLegend = ({ ico_info }) => {
  const { t } = useTranslation();

  const clouds = ico_info.clouds;
  const logo = () => (
    <svg
      width="54"
      height="54"
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="27" cy="27" r="27" fill="#ECECEC" />
    </svg>
  );
  return (
    <div className="custom-legend">
      <div className="custom-legend__item">
        <img
          className="custom-legend__logo"
          src={MarketcapLogo}
          alt="MarketcapLogo"
        />
        <div>
          <p className="custom-legend__item-title">
            {t("custom_legend__marketcap")}
          </p>
          <p className="custom-legend__item-volume">{clouds.marketcap} USD</p>
        </div>
      </div>
      <div className="custom-legend__item">
        <img
          className="custom-legend__logo"
          src={VolumeLogo}
          alt="VolumeLogo"
        />
        <div>
          <p className="custom-legend__item-title">
            {t("custom_legend__volume")}
          </p>
          <p className="custom-legend__item-volume">{clouds.volume} USD</p>
        </div>
      </div>
      <div className="custom-legend__grid-seporator"></div>
      <div className="custom-legend__item">
        <img className="custom-legend__logo" src={PriceLogo} alt="PriceLogo" />
        <div>
          <p className="custom-legend__item-title">
            {t("custom_legend__price")}
          </p>
          <p className="custom-legend__item-volume">{clouds.price} %</p>
        </div>
      </div>
      <div className="custom-legend__info">
        <div className="custom-legend__info-item">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <rect width="14" height="14" fill="#3B3B3B" />
          </svg>
          <p>{t("custom_legend__volume")}</p>
        </div>
        <div className="custom-legend__info-item">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <rect width="14" height="14" fill="#69E53E" />
          </svg>
          <p>{t("custom_legend__price")}</p>
        </div>
        <div className="custom-legend__info-item">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <rect width="14" height="14" stroke="#3B3B3B" />
          </svg>
          <p>{t("custom_legend__marketcap")}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomLegend;
