import "./Footer.scss";
import React from "react";
import icons from "../../constants/icons";

const Footer = () => {
  const manageAccordian = (sibling, target, submenu, action) => {
    sibling.style.display = "block";
    target.style.display = "none";
    submenu.style.display = action;
  };

  return (
    <div className="footer">
      <div className="footer__links-container">
        <div className="footer__links-header">
          <h1>Customer Service</h1>
          <span
            className="footer__expand-icon"
            onClick={(e) => {
              manageAccordian(
                e.target.nextSibling,
                e.target,
                e.target.parentElement.nextSibling,
                "block"
              );
            }}
          >
            +
          </span>
          <span
            className="footer__minimize-icon"
            onClick={(e) => {
              manageAccordian(
                e.target.previousSibling,
                e.target,
                e.target.parentElement.nextSibling,
                "none"
              );
            }}
          >
            -
          </span>
        </div>
        <ul className="footer_links_list">
          <li className="footer__link">
            <a href="#/">Accessibility</a>
          </li>
          <li className="footer__link">
            <a href="#/">Contact Us</a>
          </li>
          <li className="footer__link">
            <a href="#/">Return Policy</a>
          </li>
          <li className="footer__link">
            <a href="#/">FAQ</a>
          </li>
          <li className="footer__link">
            <a href="#/">Gift Certificates</a>
          </li>
          <li className="footer__link">
            <a href="#/">Wishlist</a>
          </li>
        </ul>
        <div className="footer__links-header">
          <h1>Company</h1>
          <span
            className="footer__expand-icon"
            onClick={(e) => {
              manageAccordian(
                e.target.nextSibling,
                e.target,
                e.target.parentElement.nextSibling,
                "block"
              );
            }}
          >
            +
          </span>
          <span
            className="footer__minimize-icon"
            onClick={(e) => {
              manageAccordian(
                e.target.previousSibling,
                e.target,
                e.target.parentElement.nextSibling,
                "none"
              );
            }}
          >
            -
          </span>
        </div>
        <ul className="footer_links_list">
          <li className="footer__link">
            <a href="#/">About Us</a>
          </li>
          <li className="footer__link">
            <a href="#/">Careers</a>
          </li>
          <li className="footer__link">
            <a href="#/">Press</a>
          </li>
          <li className="footer__link">
            <a href="#/">Affiliates</a>
          </li>
        </ul>
        <div className="footer__links-header">
          <h1>Follow Us</h1>
        </div>

        <ul className="footer__socials-container">
          <li>
            <a href="#/">
              <img src={icons.Facebook} alt="facebook" />
            </a>
          </li>
          <li>
            <a href="#/">
              <img
                className="footer__social-img"
                src={icons.Instagram}
                alt="instagram"
              />
            </a>
          </li>
          <li>
            <a href="#/">
              <img
                className="footer__social-img"
                src={icons.Twitter}
                alt="twitter"
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__container-desktop">
        <div className="footer__desktop-links">
          <div className="footer__links-header">
            <h1>Customer Service</h1>
          </div>
          <ul className="footer_links_list">
            <li className="footer__link">
              <a href="#/">Accessibility</a>
            </li>
            <li className="footer__link">
              <a href="#/">Contact Us</a>
            </li>
            <li className="footer__link">
              <a href="#/">Return Policy</a>
            </li>
            <li className="footer__link">
              <a href="#/">FAQ</a>
            </li>
            <li className="footer__link">
              <a href="#/">Gift Certificates</a>
            </li>
            <li className="footer__link">
              <a href="#/">Wishlist</a>
            </li>
          </ul>
        </div>
        <div className="footer__desktop-links">
          <div className="footer__links-header">
            <h1>Company</h1>
          </div>
          <ul className="footer_links_list">
            <li className="footer__link">
              <a href="#/">About Us</a>
            </li>
            <li className="footer__link">
              <a href="#/">Careers</a>
            </li>
            <li className="footer__link">
              <a href="#/">Press</a>
            </li>
            <li className="footer__link">
              <a href="#/">Affiliates</a>
            </li>
          </ul>
        </div>
        <div className="footer__desktop-socials">
          <div className="footer__socials-icons">
            <h1>Follow Us</h1>
            <ul className="footer__socials-container">
              <li>
                <a href="#/">
                  <img
                    className="footer__social-img"
                    src={icons.FacebookSVG}
                    alt="facebook"
                  />
                </a>
              </li>
              <li>
                <a href="#/">
                  <img
                    className="footer__social-img"
                    src={icons.InstagramSVG}
                    alt="instagram"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
