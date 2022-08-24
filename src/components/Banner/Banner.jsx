import "./Banner.scss";
import { bannerData } from "../../Data/Data";

const Banner = () => {
  return (
    <div className="banner">
      <p id="banner__full-text">{bannerData.message}</p>
      <p id="banner__mobile-text">{bannerData.mobileMessage}</p>
    </div>
  );
};

export default Banner;
