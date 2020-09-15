import React from "react";
import { useTranslation } from "react-i18next";
import "../sass/statusPopup.sass";

const StatusPopup = ({ isPopup, popupClose, isError, statusMsg }) => {
  const { t } = useTranslation();
  if (!isPopup) {
    return "";
  }

  return (
    <div className="status-popup">
      <div className="status-popup__container">
        {isError && <p>{t("error")}</p>}
        <p>{statusMsg}</p>
        <div className="status-popup__container-button">
          <div className="status-popup__button" onClick={popupClose}>
            <p onClick={popupClose}>ОK</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusPopup;
