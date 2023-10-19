import React from "react";
import "./AboutSecond.css";
import SlideShow from "./SlideShow";
import AnimatedTitle from "./AnimatedTitle";

export default function AboutSecond() {
  return (
    <section className="about-second-page">
      <div className="wrapper">
        <div className="animated-title-box">
          <AnimatedTitle />
        </div>
        <div className="about-second-grid-container">
          <div class="about-second-text">
            <p>
              Lorem ipsum dolor sit amet. Ex consequuntur praesentium qui
              expedita asperiores in facilis facere. Sit eaque pariatur est
              voluptatem nulla a molestiae voluptatum cum eveniet placeat
              molestiae voluptatum cum eveniet placeat.eveniet placeat molestiae
              voluptatum cum eveniet placeat.Lorem ipsum dolor sit amet.
              at.eveniet placeat molestiae voluptatum cum eveniet placeat.
            </p>
            <p>
              Ex consequuntur praesentium qui expedita asperiores in facilis
              facere. Sit eaque pariatur est voluptatem nulla a molestiae
              voluptatum cum eveniet placeat molestiae voluptatum cum eveniet
              Lorem ipsum dolor sit amet. Ex consequuntur praesentium qui
              expedita asperiores in facilis facere. Sit eaque pariatur est
              voluptatem nulla a molestiae voluptatum cum eveniet placeat
              molestiae voluptatum cum eveniet placeat.eveniet placeat molestiae
              voluptatum cum eveniet placeat.Lorem ipsum dolor sit amet.
              at.eveniet placeat molestiae voluptatum cum eveniet placeat.
            </p>
          </div>
          <div class="about-second-slideshow">
            <SlideShow />
          </div>
        </div>
      </div>
    </section>
  );
}
