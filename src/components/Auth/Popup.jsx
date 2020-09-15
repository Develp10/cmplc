import React from "react";
import { useTranslation } from "react-i18next";
import "../../sass/auth/popup.sass";

const Popup = ({ isPopup, popupClose }) => {
  const { t } = useTranslation();

  return (
    isPopup && (
      <div className="popup">
        <p>{t("auth__sign_up__success")}</p>
        <p>{t("auth__sign_up__success_info")}</p>
        <div className="popup__button" onClick={popupClose}>
          <p onClick={popupClose}>OK</p>
        </div>
      </div>
    )
  );
};

export default Popup;
