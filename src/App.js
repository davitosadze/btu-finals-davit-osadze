import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { DarkModeProvider } from "./context/DarkModeContext";
import i18n from "./translation/i18n";
import { I18nextProvider } from "react-i18next";
import "./index.css"; // Make sure you add dark-mode and light-mode CSS

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <DarkModeProvider>
        <Router>
          <Header />
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Container>
          <Footer />
        </Router>
      </DarkModeProvider>
    </I18nextProvider>
  );
}

export default App;
