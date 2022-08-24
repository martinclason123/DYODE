import "./Footer.scss";
import React from "react";
import { footerData } from "../../Data/Data";
import { Accordian, Socials, DesktopLinks } from "../../Snippets";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__links-container">
        <Accordian
          title={footerData.columnA.title}
          links={footerData.columnA.links}
        />
        <Accordian
          title={footerData.columnB.title}
          links={footerData.columnB.links}
        />
        <div className="footer__links-header">
          <h1>{footerData.columnC.title}</h1>
        </div>

        <Socials twitter={true} />
      </div>
      <div className="footer__container-desktop">
        <div className="footer__desktop-links">
          <DesktopLinks
            title={footerData.columnA.title}
            links={footerData.columnA.links}
          />
        </div>
        <div className="footer__desktop-links">
          <DesktopLinks
            title={footerData.columnB.title}
            links={footerData.columnB.links}
          />
        </div>
        <div className="footer__desktop-socials">
          <div className="footer__socials-icons">
            <h1>{footerData.columnC.title}</h1>
            <Socials twitter={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
