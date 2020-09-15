import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../sass/auth/menu.sass";

const Menu = (props) => {
  const { t } = useTranslation();

  return (
    <div className="auth-menu">
      <Link to="signIn">
        <div className="auth-menu__glow-circle-div">
          <div
            className={` ${props.type ? "auth-menu__glow-circle" : ""}`}
          ></div>
          <div
            className={`auth-menu-tab ${
              props.type ? "auth-menu-tab__active" : ""
            }`}
          >
            {t("auth_menu__sign_in")}
          </div>
        </div>
      </Link>
      <Link to="signUp">
        <div className="auth-menu__glow-circle-div">
          <div
            className={` ${!props.type ? "auth-menu__glow-circle" : ""}`}
          ></div>
          <div
            className={`auth-menu-tab ${
              !props.type ? "auth-menu-tab__active" : ""
            }`}
          >
            {t("auth_menu__sign_up")}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Menu;
