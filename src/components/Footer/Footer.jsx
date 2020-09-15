import React from "react";
import { a } from "react-router-dom";
import logo from "../../images/AppBar/logo.png";
import { useTranslation } from "react-i18next";
import "../../sass/footer.sass";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer">
      <div className="footer_left-block">
        <img src={logo} alt="Logo" />
        <h6>(c) 2020 CMP</h6>
        <a href="http://crossmarket.place/">crossmarket.place ico</a>
      </div>
      <div className="footer_right-block">
        <div>
          <h6>{t("footer__help")}</h6>
          <ul>
            <li><a href="https://t.me/CMPairdropru_bot">Airdrop CMP</a></li>
            <li><a href="https://t.me/cmpchat_ru">{t("footer__our_telegram_chat")}</a></li>
            <li><a href="https://t.me/cmplace">{t("footer__our_telegram_channel")}</a></li>
          </ul>
        </div>
        <div>
          <h6>{t("footer__information")}</h6>
          <ul>
          <li><a href="https://twitter.com/cmpcoin">Twitter</a></li>
          <li><a href="https://www.facebook.com/groups/cmpcoin/">Facebook</a></li>
          <li><a href="https://medium.com/@crossmarketplace">Medium</a></li>
          </ul>
        </div>
        <div>
          <h6>{t("footer__rules")}</h6>
          <ul>
          <li><a href="/home">{t("footer__service_rules")}</a></li>
          <li><a href="/home">{t("footer__services")}</a></li>
          <li><a href="/home">{t("footer__payment_order")}</a></li>
          </ul>
        </div>
        <div>
          <h6>{t("footer__about")}</h6>
          <ul>
          <li><a href="/home">{t("footer__contacts")}</a></li>
          <li><a href="/home">{t("footer__terms_of_use")}</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
