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
              <NumberCount targetNumber={20} />+
            </p>
            {/* <p className="number-descr-short">опис опис</p> */}
            <p className="number-descr-long">
              РІЗНОГО ТИПУ ГЕНЕРАТОРІВ
            </p>
          </div>
          {/* two */}
          <div className="col-md number-box">
            <p className="number-each">
              <NumberCount targetNumber={100} />+
            </p>
            {/* <p className="number-descr-short">опис опис</p> */}
            <p className="number-descr-long">
              ВІЙСЬКОВИХ АПТЕЧОК
            </p>
          </div>
          {/* three */}
          <div className="col-md number-box">
            <p className="number-each">
              <NumberCount targetNumber={45} />+
            </p>
            {/* <p className="number-descr-short">опис опис</p> */}
            <p className="number-descr-long">
              ТОНН ГУМАНІТАРНОЇ ДОПОМОГИ
            </p>
          </div>
          {/* four */}
          <div className="col-md number-box">
            <p className="number-each">
              <NumberCount targetNumber={60} />+
            </p>
            {/* <p className="number-descr-short">опис опис</p> */}
            <p className="number-descr-long">
              ЗАКРИТИХ ЗАПИТІВ ДЛЯ ВІЙСЬКОВИХ
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
