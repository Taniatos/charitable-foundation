import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { LanguageContext } from "../Navigation/LanguageContext";

function Footer() {
  const { language } = useContext(LanguageContext);

  const translations = {
    UKR: {
      donate: "ЗАДОНАТИТИ",
      about: "Про фонд",
      news: "Новини",
      documents: "Документація",
    },
    ENG: {
      donate: "DONATE",
      about: "About",
      news: "News",
      documents: "Documents",
    },
  };

  const content = translations[language];
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
  return (
    <section className="footer-page">
      <div className="wrapper">
        <div className="d-flex justify-content-between" id="footer">
          <div className="footer-left footer-logo-left footer-col">
            <a className="nav-link" onClick={scrollToTop} title="Home">
              <img
                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/100/056/original/logo.png?1697057798"
                alt="logo"
                className="footer-logo"
              />
            </a>
          </div>
          <div className="footer-center text-center footer-col">
            <Link to="/donate">
              {" "}
              <button className="footer-button">{content.donate}</button>
            </Link>
            <a href="https://google.com/">{content.about}</a>
            <a href="https://google.com/">{content.news}</a>
            <a href="https://google.com/">{content.documents}</a>
          </div>
          <div className="footer-right text-end footer-col">
            <p className="footer-contacts">Імейл адреса</p>
            <p className="footer-contacts">Номер телефону</p>
            <div className="footer-socials">
              <a
                href="https://www.facebook.com/profile.php?id=61550806190048"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/103/277/original/fb.png?1699385666"
                  alt="facebook"
                  className="footer-socials-icon footer-facebook"
                />
              </a>
              <a
                href="https://t.me/born_to_be_free_chervonograd?fbclid=IwAR0_9nWrNl5kmufoatUMS5mgOeTbDa95nfRG_RIHAxTtfmNOL13DuD3Lyoc"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/103/276/original/tg.png?1699385557"
                  alt="telegram"
                  className="footer-socials-icon footer-telegram"
                />
              </a>
            </div>
          </div>
        </div>
        <p className="footer-credits">
          Photos: Unsplash, Freepik, personal family photos. Icons: Freepik.{" "}
          Designed and coded by{" "}
          <a href="https://www.linkedin.com/in/tetiana-korchynska/">
            Tetiana Korchynska.
          </a>{" "}
        </p>
      </div>
    </section>
  );
}

export default Footer;
