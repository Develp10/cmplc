import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import settingsLogo from "../../../images/AppBar/settings.png";
import LangSwitcher from "../../LangSwitcher";

const RightMenu = ({ isAuth, onLogout, history, onLinkClick}) => {
  const { t } = useTranslation();
  return (
    <div className="right-menu">
      {isAuth ? (
        <>
          <Link to="/auth/signIn" onClick={onLinkClick}>{t("menu__settings")}</Link>
          <Link onClick={() => {onLinkClick(); onLogout(history)}} to="/">
            {t("menu__logout")}
          </Link>
          <Link to="/" onClick={onLinkClick}>
            <img
              className="app-bar_settings-logo"
              src={settingsLogo}
              alt="Logo"
            />
          </Link>
        </>
      ) : (
        <>
          <Link to="/auth/signIn" onClick={onLinkClick}>{t("menu__sign_in")}</Link>
          <Link to="/auth/signUp" onClick={onLinkClick}>{t("menu__sign_up")}</Link>
          <Link to="/" onClick={onLinkClick}>
            <img
              className="app-bar_settings-logo"
              src={settingsLogo}
              alt="Logo"
            />
          </Link>
        </>
      )}
      <LangSwitcher onLangChange={onLinkClick}/>
    </div>
  );
};

export default RightMenu;
