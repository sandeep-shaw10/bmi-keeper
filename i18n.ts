import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './src/locales/en.json';
import hi from './src/locales/hi.json';
import bn from './src/locales/bn.json';


i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: en,
    hi: hi,
    bn: bn,
  },
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;