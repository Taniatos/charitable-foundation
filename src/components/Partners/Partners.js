import React, { useContext } from "react";
import "./Partners.scss";
import { LanguageContext } from "../Navigation/LanguageContext";

function Partners() {
  const { language } = useContext(LanguageContext);

  const headerText = language === "ENG" ? "Partnership" : "Співпраця";

  return (
    <section className="partners-page">
      <div className="wrapper">
        <h1 className="partners-page-header">{headerText}</h1>
        <div className="partners-gallery">
          {/* image-1 */}
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/104/006/original/partner_1.png?1699995854"
            alt="partners"
            className="partners-gallery-img"
          />
          {/* image-2 */}
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/104/046/original/partner_2.png?1700001984"
            alt="partners"
            className="partners-gallery-img"
          />
          {/* image-3 */}
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/104/008/original/partner_3.png?1699995868"
            alt="partners"
            className="partners-gallery-img"
          />
          {/* image-4 */}
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/104/009/original/partner_4.png?1699995876"
            alt="partners"
            className="partners-gallery-img"
          />
          {/* image-5 */}
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/104/010/original/partner_5.png?1699995883"
            alt="partners"
            className="partners-gallery-img"
          />
          {/* image-6 */}
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/104/011/original/partner_6.png?1699995901"
            alt="partners"
            className="partners-gallery-img"
          />
          {/* image-7 */}
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/104/013/original/partner_7.png?1699995911"
            alt="partners"
            className="partners-gallery-img"
          />
          {/* image-8 */}
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/104/019/original/partner_8.png?1699996686"
            alt="partners"
            className="partners-gallery-img"
          />
          {/* image-9 */}
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/104/020/original/partner_9.png?1699996695"
            alt="partners"
            className="partners-gallery-img"
          />
          {/* image-10 */}
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/104/021/original/partner_10.png?1699996702"
            alt="partners"
            className="partners-gallery-img"
          />
          {/* image-11 */}
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/104/022/original/partner_11.png?1699996763"
            alt="partners"
            className="partners-gallery-img"
          />
          {/* image-12 */}
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/104/044/original/partner_12.png?1700001652"
            alt="partners"
            className="partners-gallery-img"
          />
          {/* image-13 */}
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/104/024/original/partner_13.png?1699996784"
            alt="partners"
            className="partners-gallery-img"
          />
          {/* image-14 */}
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/104/025/original/partner_14.png?1699996791"
            alt="partners"
            className="partners-gallery-img"
          />
          {/* image-15 */}
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/104/026/original/partner_15.png?1699996799"
            alt="partners"
            className="partners-gallery-img"
          />
          {/* image-16 */}
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/104/045/original/partner_16.png?1700001661"
            alt="partners"
            className="partners-gallery-img"
          />
          {/* image-17 */}
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/104/028/original/partner_17.png?1699996823"
            alt="partners"
            className="partners-gallery-img"
          />
          {/* image-18 */}
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/104/029/original/partner_18.png?1699996830"
            alt="partners"
            className="partners-gallery-img"
          />
          {/* image-19 */}
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/104/030/original/partner_19.png?1699996845"
            alt="partners"
            className="partners-gallery-img"
          />
        </div>
      </div>
    </section>
  );
}

export default Partners;
