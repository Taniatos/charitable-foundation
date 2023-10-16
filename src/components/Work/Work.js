import React from "react";
import "./Work.css";

export default function Work() {
  return (
    <section className="work-page">
      <div className="wrapper">
        <h1 className="work-page-header">Що ми робимо?</h1>
        <div className="work-grid-box">
          <div className="grid-top">
            <div className="mini-sections mini-section-one">
              <h2 className="mini-section-header">Section1</h2>
              <p className="mini-section-descr">
                Lorem ipsum dolor sit amet. Est voluptatem iure quo dolorem
                explicabo cum libero asperiores sed corrupti assumenda. Aut sunt
                cumque non recusandae nihil et neque nesciunt qui perferendis
                beatae non suscipit omnis qui esse voluptates.
              </p>
            </div>
            <div className="mini-sections mini-section-two">
              <h2 className="mini-section-header">Section2</h2>
              <p className="mini-section-descr">
                Lorem ipsum dolor sit amet. Est voluptatem iure quo dolorem
                explicabo cum libero asperiores sed corrupti assumenda. Aut sunt
                cumque non recusandae nihil et neque nesciunt qui perferendis
                beatae non suscipit omnis qui esse voluptates.
              </p>
            </div>
          </div>
          <div className="grid-bottom">
            <div className="mini-sections mini-section-three">
              <h2 className="mini-section-header">Section3</h2>
              <p className="mini-section-descr">
                Lorem ipsum dolor sit amet. Est voluptatem iure quo dolorem
                explicabo cum libero asperiores sed corrupti assumenda. Aut sunt
                cumque non recusandae nihil et neque nesciunt qui perferendis
                beatae non suscipit omnis qui esse voluptates.
              </p>
            </div>
            <div className="mini-sections mini-section-four">
              <h2 className="mini-section-header">Section4</h2>
              <p className="mini-section-descr">
                Lorem ipsum dolor sit amet. Est voluptatem iure quo dolorem
                explicabo cum libero asperiores sed corrupti assumenda. Aut sunt
                cumque non recusandae nihil et neque nesciunt qui perferendis
                beatae non suscipit omnis qui esse voluptates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
