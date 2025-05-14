import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import dataEn from "../Translation/Language/English";
import dataAr from "../Translation/Language/Arabic";
import dataTr from "../Translation/Language/Turkish";
// the translations
const resources = {
  en: {
    translation: dataEn,
  },
  ar: {
    translation: dataAr,
  },
  tr: {
    translation: dataTr,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    // lng: "ar",

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    detection: {
      order: ["localStorage", "navigator"], // ترتيب الكشف
      caches: ["localStorage"], // فين بدو يخزن اللغة
    },
  });

export default i18n;
