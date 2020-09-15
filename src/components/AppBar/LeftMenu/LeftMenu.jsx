import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const LeftMenu = (props) => {
  const { t, i18n } = useTranslation();

  return (
    <div className="left-menu">
      <Link to="/lk/balance" onClick={props.onLinkClick}>{t("menu__finance")}</Link>
      <Link to="/lk/partner-cabinet" onClick={props.onLinkClick}>{t("menu__partner_cabinet")}</Link>
      {/* <Link to="/lk/task-feed" onClick={props.onLinkClick}>Лента заданий</Link> */}
      <Link to="/lk/presale" onClick={props.onLinkClick}>{t("menu__presale")}</Link>
    </div>
  );
};

export default LeftMenu;
