import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";


// "Inline" English and Arabic translations. 
// We can localize to any language and any number of languages.
// const resources = {
//   en: {
//     translation: {
//       app_name: "Talabat",
//     },
//   },
//   ar: {
//     translation: {
//       app_name:"طلبات",
//     },
//   },
// };


i18next

  .use(HttpApi)

  .use(LanguageDetector)

  .use(initReactI18next)

  .init({

    supportedLngs: ['en', 'ar'],

    fallbackLng: 'en',

    debug: false,

    // Options for language detector

    detection: {

      order: ['path', 'cookie', 'htmlTag'],

      caches: ['cookie'],

    },

    // react: { useSuspense: false },

    backend: {

      loadPath: '/assets/locales/{{lng}}/translation.json',

    },

  })

 

// i18next
//   .use(initReactI18next)
//   .use(HttpApi) // Registering the back-end plugin
//   .use(LanguageDetector) // Registering the detection plugin
//   .init({
//     resources,
//     lng: "en",
//     supportedLngs: ["en", "ar"],
//     nonExplicitSupportedLngs: true,
//     fallbackLng: "en",
//     interpolation: {
//         escapeValue: false,
//         debug: true,
// detection:{
//   order:['path',]
// }
//     },
//     debug: process.env.NODE_ENV === "development",

//   });

export default i18next;