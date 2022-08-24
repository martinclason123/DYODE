import "./Categories.scss";
import { categoriesData } from "../../Data/Data";

const Categories = () => {
  return (
    <div className="categories">
      <div className="categories__links">
        {categoriesData.standardLinks.map((link) => {
          return (
            <a href={`#/${link.url}`}>
              <div className={"categories__link" + (link.last ? " last" : "")}>
                <img
                  className="categories__link-image"
                  src={link.image}
                  alt={link.label}
                />
                <h1 className="categories__label">{link.label}</h1>
              </div>
            </a>
          );
        })}
      </div>
      <div className="categories__links--bottom">
        <a href={`#/${categoriesData.alternateLink.url}`}>
          <div>
            <img
              src={categoriesData.alternateLink.image}
              alt={categoriesData.alternateLink.label}
            />
            <h1 className="categories__label">
              {categoriesData.alternateLink.label}
            </h1>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Categories;
