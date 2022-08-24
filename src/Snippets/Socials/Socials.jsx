import icons from "../../constants/icons";

const Socials = ({ twitter }) => {
  return (
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
      {twitter ? (
        <li>
          <a href="#/">
            <img
              className="footer__social-img"
              src={icons.TwitterSVG}
              alt="twitter"
            />
          </a>
        </li>
      ) : null}
    </ul>
  );
};

export default Socials;
