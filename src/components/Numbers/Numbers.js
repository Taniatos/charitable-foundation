import React from "react";
import "./Numbers.css";
import NumberCount from "./NumberCount"

export default function Numbers() {
  return (
    <section className="numbers-page">
      <div className="wrapper numbers-wrapper">
        {/* grid cards*/}
        <div className="row numbers-row">
          {/* one */}
          <div className="col-md number-box">
            <p className="number-each">
              <NumberCount targetNumber={80} />+
            </p>
            <p className="number-descr-short">опис опис</p>
            <p className="number-descr-long">
              зібрано lorem ipsum dolor sit amet lorem ipsum dolor sit amet
              lorem ipsum dolor sit amet
            </p>
          </div>
          {/* two */}
          <div className="col-md number-box">
            <p className="number-each">
              <NumberCount targetNumber={1000} />+
            </p>
            <p className="number-descr-short">опис опис</p>
            <p className="number-descr-long">
              зібрано lorem ipsum dolor sit amet lorem ipsum dolor sit amet
              lorem ipsum dolor sit amet
            </p>
          </div>
          {/* three */}
          <div className="col-md number-box">
            <p className="number-each">
              <NumberCount targetNumber={200} />+
            </p>
            <p className="number-descr-short">опис опис</p>
            <p className="number-descr-long">
              зібрано lorem ipsum dolor sit amet lorem ipsum dolor sit amet
              lorem ipsum dolor sit amet
            </p>
          </div>
          {/* four */}
          <div className="col-md number-box">
            <p className="number-each">
              <NumberCount targetNumber={150} />+
            </p>
            <p className="number-descr-short">опис опис</p>
            <p className="number-descr-long">
              зібрано lorem ipsum dolor sit amet lorem ipsum dolor sit amet
              lorem ipsum dolor sit amet
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
