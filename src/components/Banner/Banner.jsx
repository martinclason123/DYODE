import "./Banner.scss";
import Data from "../../Data/Header.json";

const Banner = () => {
  return (
    <div className="banner">
      <p id="banner__full-text">{Data.message}</p>
      <p id="banner__mobile-text">{Data.mobileMessage}</p>
    </div>
  );
};

export default Banner;
