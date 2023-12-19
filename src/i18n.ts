// src/i18n.ts
import i18n from "i18next";
import XHR from "i18next-xhr-backend";

i18n
  .use(XHR)
  .init({
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    ns: ["nav", "common", "validations"],
    defaultNS: "common",
  });

// Dynamically set the document direction based on the language
// document.documentElement.setAttribute("dir", i18n.dir());

export default i18n;
