import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./MainScreen.css";
import { LanguageContext } from "../Navigation/LanguageContext";

function MainScreen() {
  const { language } = useContext(LanguageContext);

  const content = {
    UKR: {
      title: "БЛАГОДІЙНИЙ ФОНД",
      name: "ІМЕНІ АНДРІЯ КВЯТКОВСЬКОГО",
      text: "Нижній текст",
      donate: "ЗАДОНАТИТИ",
    },
    ENG: {
      title: "ANDRII KVIATKOVSKYI",
      name: "Charitable Foundation",
      text: "Lorem ipsum",
      donate: "DONATE",
    },
  };

  const titleClass =
    language === "ENG" ? "main-page-title-eng" : "main-page-title";
  const nameClass =
    language === "ENG" ? "main-page-name-eng" : "main-page-name";
  const paragraphClass =
    language === "ENG" ? "main-page-paragraph-eng" : "main-page-paragraph";
  const buttonClass =
    language === "ENG" ? "glow-on-hover-eng" : "glow-on-hover";

  return (
    <section className="main-page">
      <div className="wrapper">
        <div className="main-page-row">
          <div className="main-page-text-container">
            <h2 className={titleClass}>{content[language].title}</h2>
            <h1 className={nameClass}>{content[language].name}</h1>
            <p className={paragraphClass}>{content[language].text}</p>
            <Link to="/donate">
              <button className={buttonClass}>
                {content[language].donate}
              </button>
            </Link>
          </div>
          <div>
            <img
              className="main-screen-picture"
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/101/263/original/person.png?1697676494"
              alt="mainscreen"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainScreen;
