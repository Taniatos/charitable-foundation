import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about-page">
      <div className="about-page-container wrapper">
        <div className="row">
          <div className="col-md ">
            <div class="about-text">
              <p>
                Благодійний фонд імені Андрія Квятковського створено у червні
                2022 року в пам'ять про Андрія Квятковського, воїна-героя, що
                загинув 29 квітня 2022 року під Попасною. Засновники фонду -
                його хороші друзі, священник УГКЦ Василь Кінах та його дружина
                Софія. Фонд допомагає військовим та їх сім'ям, госпіталям та
                потребуючим з прифронтових зон. Влітку 2023 року команда фонду
                збільшилась, що вплинуло на масштаби діяльності фонду.
              </p>
            </div>
          </div>
          <div className="col-md">
            <div class="about-text">
              <p>
                Зараз БФ імені Андрія Квятковського має свої офісне та складське
                приміщення. Основним донору фонду є New Forest Group for
                Ukraine, британська організація, із якою підписаний меморандум
                про співпрацю. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
