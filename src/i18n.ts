// src/i18n.ts
import i18n from "i18next";
// import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-xhr-backend";

i18n
  .use(XHR)
  // .use(LanguageDetector)
  .init({
    fallbackLng: "fa",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    ns: ["nav", "common", "validations"],
    defaultNS: "common",
  });

export default i18n;
