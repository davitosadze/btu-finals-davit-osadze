import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      modelsByMake: "Models by Make",
      contactUs: "Contact Us",
      contactMessage:
        "If you have any questions or inquiries, feel free to contact us using the form below.",
      yourName: "Your Name",
      enterName: "Enter your name",
      emailAddress: "Email address",
      enterEmail: "Enter your email",
      message: "Message",
      enterMessage: "Enter your message",
      submit: "Submit",
      footer: "All Rights Reserved. Davit Osadze",
      brand: "BTU Finals",
      home: "Home",
      contact: "Contact",
      darkMode: "Dark Mode",
      lightMode: "Light Mode",
      nameRequired: "Required",
      emailRequired: "Required",
      messageRequired: "Required",
    },
  },
  ka: {
    translation: {
      modelsByMake: "ავტომანქანები",
      contactUs: "დაგვიკავშირდით",
      contactMessage: "მოგვწერეთ ნებისმიერი რამ.",
      yourName: "სახელი",
      enterName: "შეიყვანეთ სახელი",
      emailAddress: "იმეილი",
      enterEmail: "შეიყვანეთ იმეილი",
      message: "ტექსტი",
      enterMessage: "შეიყვანეთ ტექსტი",
      submit: "გაგზავნა",
      footer: "ყველა უფლება დაცულია. დავით ოსაძე",
      brand: "BTU Finals",
      home: "მთავარი",
      contact: "კონტაქტი",
      darkMode: "მუქი რეჟიმი",
      lightMode: "ღია რეჟიმი",
      nameRequired: "გთხოვთ შეიყვანოთ სახელი",
      emailRequired: "გთხოვთ შეიყვანოთ იმეილი",
      messageRequired: "გთხოვთ შეიყვანოთ ტექსტი",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
