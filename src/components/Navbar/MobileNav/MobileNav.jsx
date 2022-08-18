import icons from "../../../constants/icons";
import "./MobileNav.scss";

const MobileNav = () => {
  return (
    <nav className="mobile__navbar">
      <div className="mobile__navbar-left">
        <div className="mobile__navbar-meat">
          <img alt="Menu" src={icons.MeatSmall} />
        </div>
        <div className="mobile__navbar-logo">
          <img alt="Logo" src={icons.LogoSmall} />
        </div>
      </div>
      <div className="mobile__navbar-right">
        <ul className="mobile__navbar-icons">
          <li>
            <a href="#/">
              <img alt="Search" src={icons.Search} />
            </a>
          </li>
          <li>
            <a href="#/">
              <img alt="Account" src={icons.User} />
            </a>
          </li>
          <li>
            <a href="#/">
              <img alt="Cart" src={icons.ShoppingCart} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNav;
