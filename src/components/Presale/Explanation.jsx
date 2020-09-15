import React from "react";
import { useTranslation } from "react-i18next";
import "../../sass/presale/explanation.sass";

const Explanation = () => {
  const { t } = useTranslation();

  return (
    <div className="explanation">
      <p className="explanation__title">{t("explanation__title")}</p>
      <div className="explanation-note">
        <p>{t("explanation__text_1")}</p>
        <p>{t("explanation__text_2")}</p>
        <p className="font-bold">Pn= 0.15 x (1+10-6)USDT</p>
        <p>{t("explanation__text_3")}</p>
      </div>
      <div className="explanation-note">
        <p className="explanation-note__item-number">1</p>
        <p>{t("explanation__text_4")}</p>
        <p>{t("explanation__text_5")}</p>
      </div>
      <div className="explanation-note">
        <p className="explanation-note__item-number">2</p>
        <p>{t("explanation__text_6")}</p>
        <p>{t("explanation__text_7")}</p>
      </div>

      
    </div>
  );
};

export default Explanation;
