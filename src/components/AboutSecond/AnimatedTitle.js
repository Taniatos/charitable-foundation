import React, { useContext } from "react";
import "./AnimatedTitle.scss";
import { LanguageContext } from "../Navigation/LanguageContext";

export default function AnimatedTitle() {
  const { language } = useContext(LanguageContext);

  const content = {
    UKR: {
      title: "АНДРІЙ КВЯТКОВСЬКИЙ:",
      words: [
        "військовослужбовець",
        "батько",
        "чоловік",
        "брат",
        "друг",
        "патріот",
      ],
    },
    ENG: {
      title: "ANDRII KVIATKOVSKYI:",
      words: [
        "military serviceman",
        "father",
        "husband",
        "brother",
        "friend",
        "patriot",
      ],
    },
  };

  return (
    <div className="animated-title">
      <h1 className="animated-title__static">{content[language].title}</h1>
      <div className="animated-title__animated content">
        <div className="content__container">
          <ul className="content__container__list">
            {content[language].words.map((word, index) => (
              <li key={index} className="content__container__list__item">
                {word}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
