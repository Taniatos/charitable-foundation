import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <section className="footer-page">
      <div className="wrapper">
        <div class="d-flex justify-content-between" id="footer">
          <div class="footer-left footer-logo-left footer-col">
            <a
              class="nav-link"
              aria-current="page"
              href="https://google.com/"
              title="Home"
            >
              <img
                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/100/056/original/logo.png?1697057798"
                alt="logo"
                class="footer-logo"
              />
            </a>
          </div>
          <div class="footer-center text-center footer-col">
            <button className="footer-button">ЗАДОНАТИТИ</button>
            <a href="https://google.com/">Про фонд</a>
            <a href="https://google.com/">Новини</a>
            <a href="https://google.com/">Документація</a>
          </div>
          <div class="footer-right text-end footer-col">
            <p className="footer-contacts">Імейл адреса</p>
            <p className="footer-contacts">Номер телефону</p>
            <div className="footer-socials">
              <a
                href="https://www.facebook.com/profile.php?id=61550806190048"
                target="_blank"
              >
                {" "}
                <img
                  src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/103/277/original/fb.png?1699385666"
                  alt="facebook"
                  class="footer-socials-icon footer-facebook"
                />
              </a>
              <a
                href="https://t.me/born_to_be_free_chervonograd?fbclid=IwAR0_9nWrNl5kmufoatUMS5mgOeTbDa95nfRG_RIHAxTtfmNOL13DuD3Lyoc"
                target="_blank"
              >
                {" "}
                <img
                  src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/103/276/original/tg.png?1699385557"
                  alt="telegram"
                  class="footer-socials-icon footer-telegram"
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
