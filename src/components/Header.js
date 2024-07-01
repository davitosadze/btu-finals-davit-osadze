import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDarkMode } from "../context/DarkModeContext";
function Header() {
  const { t } = useTranslation();
  const { isDarkMode } = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <Navbar
      bg={isDarkMode ? "dark" : "light"}
      variant={isDarkMode ? "dark" : "light"}
      expand="lg"
      className="px-4 py-3"
    >
      <Navbar.Brand as={Link} to="/">
        {t("brand")}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNav} />

      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/" onClick={toggleNav}>
          {t("home")}
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
