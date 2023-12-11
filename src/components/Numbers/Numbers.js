import React, { useContext } from "react";
import "./Numbers.css";
import NumberCount from "./NumberCount";
import { LanguageContext } from "../Navigation/LanguageContext";

function Numbers() {
  const { language } = useContext(LanguageContext);
  
  const content = {
    UKR: {
      descriptions: [
        "РІЗНОГО ТИПУ ГЕНЕРАТОРІВ",
        "ВІЙСЬКОВИХ АПТЕЧОК",
        "ТОНН ГУМАНІТАРНОЇ ДОПОМОГИ",
        "ЗАКРИТИХ ЗАПИТІВ ДЛЯ ВІЙСЬКОВИХ",
      ],
    },
    ENG: {
      descriptions: [
        "DIFFERENT TYPES OF GENERATORS",
        "MILITARY FIRST AID KITS",
        "TONS OF HUMANITARIAN AID",
        "COMPLETED REQUESTS FOR MILITARY",
      ],
    },
  };

  return (
    <section className="numbers-page">
      <div className="wrapper numbers-wrapper">
        <div className="row numbers-row">
          {/* One */}
          <div className="col-md number-box">
            <p className="number-each">
              <NumberCount targetNumber={20} />+
            </p>
            {/* <p className="number-descr-short">опис опис</p> */}
            <p className="number-descr-long">
              {content[language].descriptions[0]}
            </p>
          </div>
          {/* Two */}
          <div className="col-md number-box">
            <p className="number-each">
              <NumberCount targetNumber={100} />+
            </p>
            {/* <p className="number-descr-short">опис опис</p> */}
            <p className="number-descr-long">
              {content[language].descriptions[1]}
            </p>
          </div>
          {/* Three */}
          <div className="col-md number-box">
            <p className="number-each">
              <NumberCount targetNumber={45} />+
            </p>
            {/* <p className="number-descr-short">опис опис</p> */}
            <p className="number-descr-long">
              {content[language].descriptions[2]}
            </p>
          </div>
          {/* Four */}
          <div className="col-md number-box">
            <p className="number-each">
              <NumberCount targetNumber={60} />+
            </p>
            {/* <p className="number-descr-short">опис опис</p> */}
            <p className="number-descr-long">
              {content[language].descriptions[3]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Numbers;
