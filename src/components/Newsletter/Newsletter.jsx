import "./Newsletter.scss";
import icons from "../../constants/icons";
import { newsletterData } from "../../Data/Data";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="newsletter__header">
        <img
          className="newsletter__img-mobile"
          src={icons.NewsletterLarge}
          alt="email icon"
        />
        <img
          className="newsletter__img-desktop"
          src={icons.NewsletterLarge}
          alt="email icon"
        />
        <h1 className="newsletter__message">{newsletterData.message}</h1>
      </div>
      <div className="newsletter__subscribe-mobile">
        <p className="newsletter__blurb-mobile">{newsletterData.blurb}</p>
        <button className="newsletter__submit-mobile">
          {newsletterData.actionMessage}
        </button>
      </div>
      <div className="newsletter__subscribe-desktop">
        <div className="newletter__form-desktop">
          <div className="newsletter__blurb-desktop">
            <p>{newsletterData.blurb}</p>
          </div>
          <div className="newsletter__submit-desktop">
            <input
              className="newsletter__input-desktop"
              type="text"
              placeholder="Enter Your Email Address"
            />
            <button className="newsletter__button-desktop">
              {newsletterData.actionMessage}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
