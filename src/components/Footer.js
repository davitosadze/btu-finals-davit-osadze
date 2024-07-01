import React from "react";
import { useTranslation } from "react-i18next";
import { useDarkMode } from "../context/DarkModeContext";
import { Button } from "react-bootstrap";
import i18n from "../translation/i18n";

function Footer() {
  const { t } = useTranslation();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <footer className="text-center mt-5">
      <p>
        &copy; {new Date().getFullYear()} CarApp. {t("footer")}
      </p>
      <Button variant="secondary" onClick={toggleDarkMode}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </Button>
      <Button variant="secondary" onClick={() => i18n.changeLanguage("en")}>
        EN
      </Button>
      <Button variant="secondary" onClick={() => i18n.changeLanguage("ka")}>
        ქა
      </Button>
    </footer>
  );
}

export default Footer;
