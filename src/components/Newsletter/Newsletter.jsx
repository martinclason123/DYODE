import "./Newsletter.scss";
import icons from "../../constants/icons";

const Newsletter = ({ message, blurb, actionMessage }) => {
  return (
    <div className="newsletter">
      <div className="newsletter__header">
        <img className="newsletter__img" src={icons.Newsletter} />
        <h1 className="newsletter__message">{message}</h1>
      </div>
      <p className="newsletter__blurb">{blurb}</p>
      <button className="newsletter__button">{actionMessage}</button>
    </div>
  );
};

export default Newsletter;
