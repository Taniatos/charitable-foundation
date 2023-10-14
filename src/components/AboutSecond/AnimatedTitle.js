import React from "react";
import "./AnimatedTitle.scss";
export default function AnimatedTitle() {
  const words = [
    "військовослужбовець",
    "батько",
    "чоловік",
    "брат",
    "друг",
    "патріот"
  ];
  return (
    <div className="animated-title">
      <h1 className="animated-title__static">АНДРІЙ КВЯТКОВСЬКИЙ:</h1>
      <div className="animated-title__animated content">
        <div className="content__container">
          <ul className="content__container__list">
            {words.map((word, index) => (
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
