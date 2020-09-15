import React from "react";
import { useTranslation } from "react-i18next";
import "../../sass/partnerCabinet/partnerUrl.sass";
import copyToClipboard from "../../utils/copyToClipboard";
import copyIcon from "../../images/copy.svg"

const PartnerUrl = ({ inviterlink }) => {
  const { t } = useTranslation();

  return (
    <div className="partner-url">
      <p className="partner-url__text">{t("partner_url__text")}</p>
      <hr />
      <div className="partner-url__input-div">
        <input
          className="partner-url__input"
          readOnly="readOnly"
          value={inviterlink}
        />
        <div
          onClick={() => copyToClipboard(inviterlink)}
          className="partner-url__copy-button"
        >
          <p>{t("copy")}</p>
          <img src={copyIcon}></img>
        </div>
      </div>
    </div>
  );
};

export default PartnerUrl;
