import React from "react";
import "./DonationPage.css";

function DonationPage({ onNavigate }) {
  return (
    <section className="donation-page">
      <div className="donation-card">
        <div className="back-to-main" onClick={onNavigate}>
          <p>Назад на головну</p>
        </div>
        <div className="donation-current">
          <p className="donation-current-header">ПОТОЧНИЙ ЗБІР</p>
          <p className="donation-current-descr">Збір на ...</p>
          <div className="donation-current-button">
            <img
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/103/623/original/mono.png?1699649624"
              alt="monobank"
              className="donation-current-img"
            />
            <p className="donation-current-button-text">ПІДТРИМАТИ</p>
          </div>
        </div>
        <h1>hello from donation</h1>
      </div>
    </section>
  );
}
export default DonationPage;
