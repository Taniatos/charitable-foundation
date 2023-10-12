import React from "react";
import "./About.css";

export default function MainScreen() {
  return (
    <section className="about-page">
      <div className="wrapper grid-container">
        <div class="about-text">
          <p>
            Благодійний фонд імені Андрія Квятковського створено 2021 року...
            Lorem ipsum dolor sit amet. Ex consequuntur praesentium qui expedita
            asperiores in facilis facere. Sit eaque pariatur est voluptatem
            nulla a molestiae voluptatum cum eveniet placeat molestiae
            voluptatum cum eveniet placeat.eveniet placeat molestiae voluptatum
            cum eveniet placeat.
          </p>
          <p>
            Sit eaque pariatur est voluptatem nulla a molestiae voluptatum cum
            eveniet placeat. Et explicabo similique sed fugit quos non sunt
            velit aut obcaecati voluptas sed alias corporis aut quia tempora rem
            suscipit quos. Et explicabo similique sed fugit quos non sunt velit
            aut obcaecati voluptas sed alias corporis aut quia tempora rem
            suscipit quos.
          </p>
        </div>
        <div class="about-image">
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/100/081/original/photo-about.png?1697071002"
            alt="Foundation"
          />
        </div>
      </div>
    </section>
  );
}
