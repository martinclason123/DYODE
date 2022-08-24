import icons from "../../constants/icons";

const Socials = ({ twitter }) => {
  return (
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
      {twitter ? (
        <li>
          <a href="#/">
            <img
              className="footer__social-img"
              src={icons.Twitter}
              alt="twitter"
            />
          </a>
        </li>
      ) : null}
    </ul>
  );
};

export default Socials;
