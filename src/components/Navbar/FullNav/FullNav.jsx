import "./FullNav.scss";
import icons from "../../../constants/icons";
import { navbarData } from "../../../Data/Data";

const FullNav = () => {
  return (
    <nav className="full__navbar">
      <div className="full__navbar-left">
        <img id="navbar__logo-large" src={icons.LogoLarge} alt="logo" />
        <img id="navbar__logo-small" src={icons.LogoSmall} alt="logo" />
      </div>
      <div className="full__navbar-center">
        <ul className="full__navbar-links">
          {navbarData.map((link) => {
            return (
              <li>
                <a href={`#${link.url}`}>{link.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="full__nav-right">
        <ul className="full__navbar-icons">
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
export default FullNav;
