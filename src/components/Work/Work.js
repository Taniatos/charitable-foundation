import React, { useContext } from "react";
import "./Work.css";
import { LanguageContext } from "../Navigation/LanguageContext";

function Work() {
  const { language } = useContext(LanguageContext);

  const content = {
    UKR: {
      header: "Робота фонду",
      sections: [
        {
          title: "Секція 1",
          text: "Lorem ipsum dolor sit amet. Ex consequuntur praesentium qui expedita asperiores in facilis facere. Sit eaque pariatur est voluptatem nulla a molestiae voluptatum cum eveniet placeat molestiae voluptatum cum eveniet placeat.",
        },
        {
          title: "Секція 2",
          text: "Lorem ipsum dolor sit amet.Ex consequuntur praesentium qui expedita asperiores in facilis facere. Sit eaque pariatur est voluptatem nulla a molestiae voluptatum cum eveniet placeat molestiae voluptatum cum eveniet placeat.",
        },
        {
          title: "Секція 3",
          text: "Lorem ipsum dolor sit amet.Ex consequuntur praesentium qui expedita asperiores in facilis facere. Sit eaque pariatur est voluptatem nulla a molestiae voluptatum cum eveniet placeat molestiae voluptatum cum eveniet placeat.",
        },
        {
          title: "Секція 4",
          text: "Lorem ipsum dolor sit amet.Ex consequuntur praesentium qui expedita asperiores in facilis facere. Sit eaque pariatur est voluptatem nulla a molestiae voluptatum cum eveniet placeat molestiae voluptatum cum eveniet placeat.",
        },
      ],
    },
    ENG: {
      header: "What We Do",
      sections: [
        {
          title: "Section 1",
          text: "Lorem ipsum dolor sit amet.Ex consequuntur praesentium qui expedita asperiores in facilis facere. Sit eaque pariatur est voluptatem nulla a molestiae voluptatum cum eveniet placeat molestiae voluptatum cum eveniet placeat.",
        },
        {
          title: "Section 2",
          text: "Lorem ipsum dolor sit amet.Ex consequuntur praesentium qui expedita asperiores in facilis facere. Sit eaque pariatur est voluptatem nulla a molestiae voluptatum cum eveniet placeat molestiae voluptatum cum eveniet placeat.",
        },
        {
          title: "Section 3",
          text: "Lorem ipsum dolor sit amet.Ex consequuntur praesentium qui expedita asperiores in facilis facere. Sit eaque pariatur est voluptatem nulla a molestiae voluptatum cum eveniet placeat molestiae voluptatum cum eveniet placeat.",
        },
        {
          title: "Section 4",
          text: "Lorem ipsum dolor sit amet.Ex consequuntur praesentium qui expedita asperiores in facilis facere. Sit eaque pariatur est voluptatem nulla a molestiae voluptatum cum eveniet placeat molestiae voluptatum cum eveniet placeat.",
        },
      ],
    },
  };

  return (
    <section className="work-page">
      <div className="wrapper">
        <h1 className="work-page-header">{content[language].header}</h1>
        <div className="work-grid-box">
          <div className="grid-top">
            <div className="mini-sections mini-section-one">
              <h2 className="mini-section-header">
                {content[language].sections[0].title}
              </h2>
              <p className="mini-section-descr">
                {content[language].sections[0].text}
              </p>
            </div>
            <div className="mini-sections mini-section-two">
              <h2 className="mini-section-header">
                {content[language].sections[1].title}
              </h2>
              <p className="mini-section-descr">
                {content[language].sections[1].text}
              </p>
            </div>
          </div>
          <div className="grid-bottom">
            <div className="mini-sections mini-section-three">
              <h2 className="mini-section-header">
                {content[language].sections[2].title}
              </h2>
              <p className="mini-section-descr">
                {content[language].sections[2].text}
              </p>
            </div>
            <div className="mini-sections mini-section-four">
              <h2 className="mini-section-header">
                {content[language].sections[3].title}
              </h2>
              <p className="mini-section-descr">
                {content[language].sections[3].text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Work;
