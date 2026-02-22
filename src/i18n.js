import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Učitaj lokalne fajlove sa prevodima
import translationSR from "./locales/sr.json";
import translationEN from "./locales/en.json";

i18n
  .use(initReactI18next) // inicijalizacija za React
  .init({
    resources: {
      sr: {
        translation: translationSR, // Prevod za srpski
      },
      en: {
        translation: translationEN, // Prevod za engleski
      },
    },
    lng: "sr", // Podrazumevani jezik
    fallbackLng: "sr", // Ako prevod nije dostupan, koristi srpski
    interpolation: {
      escapeValue: false, // React automatski escape-uje vrednosti
    },
  });

export default i18n;
