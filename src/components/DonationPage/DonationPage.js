import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./DonationPage.css";

function DonationPage() {
  const [isBankCopied, setIsBankCopied] = useState(false);
  const [isCardCopied, setIsCardCopied] = useState(false);
  const originalImageSrc =
    "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/103/712/original/copy-outline.png?1699732787";

  const copyBankAccountNumberToClipboard = () => {
    const accountNumber = "UA843052990000026006011018367";
    navigator.clipboard
      .writeText(accountNumber)
      .then(() => {
        setIsBankCopied(true);
        setTimeout(() => setIsBankCopied(false), 3000);
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  };

  const copyCardNumberToClipboard = () => {
    const cardNumber = "4149 4991 4672 0000";
    navigator.clipboard
      .writeText(cardNumber)
      .then(() => {
        setIsCardCopied(true);
        setTimeout(() => setIsCardCopied(false), 3000);
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  };

  return (
    <section className="donation-page">
      <div className="donation-card">
        <Link to="/" className="back-to-main">
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/103/705/original/arrow-left.png?1699731296"
            alt="arrow"
            className="back-to-main-arrow"
          />
          <p className="back-to-main-text">Назад на головну</p>
        </Link>

        <div className="donation-current">
          <p className="donation-current-header">ПОТОЧНИЙ ЗБІР</p>
          <p className="donation-current-descr">Збір на Starlink для ГУР</p>
          <a
            href="https://send.monobank.ua/jar/9kjhmWEXAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="donation-link"
          >
            <div className="donation-current-button">
              <img
                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/103/623/original/mono.png?1699649624"
                alt="monobank"
                className="donation-current-img"
              />
              <p className="donation-current-button-text">ПІДТРИМАТИ</p>
            </div>
          </a>
        </div>

        <div className="donation-permanent">
          <div className="permanent-one">
            <p className="donation-permanent-header">
              Реквізити БФ імені Андрія Квятковського
            </p>
            <p className="donation-permanent-subheader">Банківський переказ</p>
            <div
              className="donation-account"
              onClick={copyBankAccountNumberToClipboard}
            >
              <p className="donation-account-number">
                UA 84305299 000002600 6011018367
              </p>
              {isBankCopied ? (
                <span className="copied-message">Copied</span>
              ) : (
                <img
                  src={originalImageSrc}
                  alt="copy"
                  className="donation-account-img-copy"
                />
              )}
            </div>
          </div>

          <div className="permanent-two">
            <p className="donation-permanent-subheader">Приватбанк</p>
            <div
              className="donation-privatbank"
              onClick={copyCardNumberToClipboard}
            >
              <p className="donation-privatbank-card">4149 4991 4672 0000</p>
              <p className="donation-privatbank-name">Кінах В.М.</p>
              {isCardCopied ? (
                <span className="copied-message">Copied</span>
              ) : (
                <img
                  src={originalImageSrc}
                  alt="copy"
                  className="donation-account-img-copy"
                />
              )}
            </div>
          </div>

          <div className="permanent-three">
            <p className="donation-permanent-subheader-last">Моно-банка</p>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="donation-link"
            >
              <div className="donation-permanent-button">
                <img
                  src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/103/623/original/mono.png?1699649624"
                  alt="monobank"
                  className="donation-permanent-img"
                />
                <p className="donation-permanent-button-text">ЗАДОНАТИТИ</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DonationPage;
