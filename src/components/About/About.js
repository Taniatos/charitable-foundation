import React, { useContext } from "react";
import "./About.css";
import { LanguageContext } from "../Navigation/LanguageContext";

function About() {
  const { language } = useContext(LanguageContext);

  const content = {
    UKR: {
      text1:
        "Благодійний фонд імені Андрія Квятковського створено у червні 2022 року в пам'ять про Андрія Квятковського, воїна-героя, що загинув 29 квітня 2022 року під Попасною. Засновники фонду - його хороші друзі, священник УГКЦ Василь Кінах та його дружина Софія. Фонд допомагає військовим та їх сім'ям, госпіталям та потребуючим з прифронтових зон.",
      text2:
        "Влітку 2023 року команда фонду збільшилась, що вплинуло на масштаби діяльності фонду. Зараз Благодійний фонд імені Андрія Квятковського має свої офісне та складське приміщення. Основним донору фонду є New Forest Group for Ukraine, британська організація, із якою фонд підписав меморандум про співпрацю.",
    },
    ENG: {
      text1:
        "The Andriy Kvyatkovskyi Charitable Foundation was established in June 2022 in memory of Andriy Kvyatkovskyi, a hero warrior who died on April 29, 2022, near Popasna. The founders of the foundation are his close friends, UGCC priest Vasyl Kinakh and his wife Sofia. The foundation assists military personnel and their families, hospitals, and those in need from frontline areas.",
      text2:
        "In the summer of 2023, the foundation's team expanded, which affected the scale of the foundation's activities. Now, the Andriy Kvyatkovskyi Charity Foundation has its own office and warehouse facilities. The main donor of the foundation is the New Forest Group for Ukraine, a British organization, with which the foundation has signed a memorandum of cooperation.",
    },
  };

  return (
    <section className="about-page">
      <div className="about-page-container wrapper">
        <div className="row">
          <div className="col-md">
            <div className="about-text">
              <p>{content[language].text1}</p>
            </div>
          </div>
          <div className="col-md">
            <div className="about-text">
              <p>{content[language].text2}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
