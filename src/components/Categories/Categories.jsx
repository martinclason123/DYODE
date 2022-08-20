import images from "../../constants/images";
import "./Categories.scss";

const Categories = () => {
  return (
    <div className="categories">
      <div className="categories__links">
        <a href="#/">
          <div className="categories__link">
            <img
              className="categories__link-image"
              src={images.Categories1}
              alt="womens"
            />
            <h1 className="categories__label">Women's</h1>
          </div>
        </a>
        <a href="#/">
          <div className="categories__link">
            <img
              className="categories__link-image"
              src={images.Categories2}
              alt="womens"
            />
            <h1 className="categories__label">Men's</h1>
          </div>
        </a>
        <a href="#/">
          <div className="categories__link last">
            <img
              className="categories__link-image"
              src={images.Categories3}
              alt="womens"
            />
            <h1 className="categories__label">Accessories</h1>
          </div>
        </a>
      </div>
      <div className="categories__links--bottom">
        <a href="#/">
          <div>
            <img src={images.Categories3Mobile} alt="womens" />
            <h1 className="categories__label">Accessories</h1>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Categories;
