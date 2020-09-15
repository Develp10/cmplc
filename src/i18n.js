import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
export const langEmodjiArray = [
  { lang: "en", emodji: "[🇺🇸] English" },
  { lang: "ru", emodji: "[🇷🇺] Russian" },
  { lang: "fr", emodji: "[🇫🇷] French" },
];
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    react: {
      wait: true,
      useSuspense: false,
    },
  });

export default i18n;
