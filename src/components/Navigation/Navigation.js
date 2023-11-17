// Navigation.js
import React, { useContext } from "react";
import "./Navigation.scss";
import { LanguageContext } from "../Navigation/LanguageContext";

export default function Navigation() {
  const { language, toggleLanguage } = useContext(LanguageContext);

   const buttonClassName =
     language === "ENG"
       ? "language-switch-btn-eng"
       : "language-switch-btn";



  const menuItems = {
    UKR: ["Меню1", "Меню2", "Меню3", "Меню4", "Меню5", "Меню6"],
    ENG: ["Menu1", "Menu2", "Menu3", "Menu4", "Menu5", "Menu6"],
  };

  return (
    <nav className="navbar navbar-dark navbar-expand-lg sticky-xl-top">
      <div className="navbar-content">
        <div className="logo-left">
          <a
            className="nav-link"
            aria-current="page"
            href="https://google.com/"
            title="Home"
          >
            <img
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/100/056/original/logo.png?1697057798"
              alt="logo"
              className="logo"
            />
          </a>
        </div>
        <div className="transparent"></div>
        <div className="menu-right">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav menu-options">
              {menuItems[language].map((menuItem, index) => (
                <a
                  key={index}
                  className="nav-link menu-style"
                  href="https://google.com/"
                  title={menuItem}
                >
                  {menuItem}
                </a>
              ))}
            </div>
          </div>
        </div>
        <button className={buttonClassName} onClick={toggleLanguage}>
          {language}
        </button>
      </div>
    </nav>
  );
}
