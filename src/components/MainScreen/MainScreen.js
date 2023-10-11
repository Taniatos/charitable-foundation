import React from "react";
import "./MainScreen.css";

export default function MainScreen() {
  return (
    <section class="main-page">
      <div class="wrapper">
        <div class="main-page-row">
          <div class="main-page-text-container">
            <h2 class="main-page-title">БЛАГОДІЙНИЙ ФОНД</h2>
            <h1 class="main-page-name">ІМЕНІ АНДРІЯ КВЯТКОВСЬКОГО</h1>
            <p class="main-page-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut{" "}
            </p>
            <button class="glow-on-hover" type="button">
              ЗАДОНАТИТИ{" "}
            </button>
          </div>
          <div>
            <img
              className="main-screen-picture"
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/100/045/original/person.png?1697048231"
              alt="mainscreen"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
