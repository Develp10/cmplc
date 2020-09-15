import React from "react";
import { useTranslation } from "react-i18next";
import "../../sass/personalArea/partners.sass";
import invitersLogo from "../../images/PersonalArea/inviters.png";

const Partners = ({ inviters, wallet }) => {
  const { t } = useTranslation();

  return (
    <div className="partners">
      <div className="partners__count">
        <img className="partners__logo" src={invitersLogo} alt="Logo" />
        <span className="partners__sum">{inviters}</span>
        <span className="partners__you-brought">
          {t("partners__number_of_partners")}
        </span>
      </div>
    </div>
  );
};

export default Partners;
