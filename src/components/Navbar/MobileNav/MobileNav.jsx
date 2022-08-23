import icons from "../../../constants/icons";
import "./MobileNav.scss";

const MobileNav = () => {
  return (
    <nav className="mobile__navbar">
      <div className="mobile__navbar-left">
        <div className="mobile__navbar-meat">
          <img alt="Menu" src={icons.MeatSVG} />
        </div>
        <div className="mobile__navbar-logo">
          <img alt="Logo" src={icons.LogoSVG} />
        </div>
      </div>
      <div className="mobile__navbar-right">
        <ul className="mobile__navbar-icons">
          <li>
            <a href="#/">
              <img alt="Search" src={icons.SearchSVG} />
            </a>
          </li>
          <li>
            <a href="#/">
              <img alt="Account" src={icons.UserSVG} />
            </a>
          </li>
          <li>
            <a href="#/">
              <img alt="Cart" src={icons.CartSVG} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNav;
