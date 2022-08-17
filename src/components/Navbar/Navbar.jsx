import icons from "../../constants/icons";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-left">
        <div className="app__navbar-meat">
          <img alt="Menu" src={icons.MeatSmall} />
        </div>
        <div className="app__navbar-logo">
          <img alt="Logo" src={icons.LogoSmall} />
        </div>
      </div>
      <div className="app__navbar-right">
        <ul className="app__navbar-icons">
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

export default Navbar;
