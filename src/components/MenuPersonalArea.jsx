import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../sass/personalArea/menu.sass";

const MenuPersonalArea = (props) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="menu">
      <Link to="/lk/balance">
        <div className={`menu-tab ${props.type ? "menu-tab__active" : ""}`}>
          <span>{t("menu__finance")}</span>
        </div>
      </Link>
      <Link to="/lk/partner-cabinet">
        <div className={`menu-tab ${!props.type ? "menu-tab__active" : ""}`}>
          {t("menu__partner_cabinet")}
        </div>
      </Link>
    </div>
  );
};

export default MenuPersonalArea;
