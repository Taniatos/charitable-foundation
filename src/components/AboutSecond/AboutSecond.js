import React, { useContext } from "react";
import "./AboutSecond.css";
import SlideShow from "./SlideShow";
import AnimatedTitle from "./AnimatedTitle";
import { LanguageContext } from "../Navigation/LanguageContext";

export default function AboutSecond() {
  const { language } = useContext(LanguageContext);

  const content = {
    UKR: {
      text1:
        "Lorem ipsum dolor sit amet. Ex consequuntur praesentium qui expedita asperiores in facilis facere. Sit eaque pariatur est voluptatem nulla a molestiae voluptatum cum eveniet placeat molestiae voluptatum cum eveniet placeat.eveniet placeat molestiae voluptatum cum eveniet placeat.Lorem ipsum dolor sit amet. at.eveniet placeat molestiae voluptatum cum eveniet placeat.",
      text2:
        "Ex consequuntur praesentium qui expedita asperiores in facilis facere. Sit eaque pariatur est voluptatem nulla a molestiae voluptatum cum eveniet placeat molestiae voluptatum cum eveniet Lorem ipsum dolor sit amet. Ex consequuntur praesentium qui expedita asperiores in facilis facere. Sit eaque pariatur est voluptatem nulla a molestiae voluptatum cum eveniet placeat molestiae voluptatum cum eveniet placeat.eveniet placeat molestiae voluptatum cum eveniet placeat.Lorem ipsum dolor sit amet. at.eveniet placeat molestiae voluptatum cum eveniet placeat.",
    },
    ENG: {
      text1:
        "Lorem ipsum dolor sit amet. Ex consequuntur praesentium qui expedita asperiores in facilis facere. Sit eaque pariatur est voluptatem nulla a molestiae voluptatum cum eveniet placeat molestiae voluptatum cum eveniet placeat.eveniet placeat molestiae voluptatum cum eveniet placeat.Lorem ipsum dolor sit amet. at.eveniet placeat molestiae voluptatum cum eveniet placeat.",
      text2:
        "Ex consequuntur praesentium qui expedita asperiores in facilis facere. Sit eaque pariatur est voluptatem nulla a molestiae voluptatum cum eveniet placeat molestiae voluptatum cum eveniet Lorem ipsum dolor sit amet. Ex consequuntur praesentium qui expedita asperiores in facilis facere. Sit eaque pariatur est voluptatem nulla a molestiae voluptatum cum eveniet placeat molestiae voluptatum cum eveniet placeat.eveniet placeat molestiae voluptatum cum eveniet placeat.Lorem ipsum dolor sit amet. at.eveniet placeat molestiae voluptatum cum eveniet placeat.",
    },
  };

  return (
    <section className="about-second-page">
      <div className="wrapper">
        <div className="animated-title-box">
          <AnimatedTitle />
        </div>
        <div className="about-second-grid-container">
          <div className="about-second-text">
            <p>{content[language].text1}</p>
            <p>{content[language].text2}</p>
          </div>
          <div className="about-second-slideshow">
            <SlideShow />
          </div>
        </div>
      </div>
    </section>
  );
}
