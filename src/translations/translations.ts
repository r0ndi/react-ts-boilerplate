import { initReactI18next } from "react-i18next";
import resources from "./resources";
import i18n from "i18next";

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: process.env.REACT_APP_DEFAULT_LANG,
        interpolation: {
            escapeValue: false
        }
    });