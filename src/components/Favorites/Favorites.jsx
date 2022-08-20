import "./Favorites.scss";
import images from "../../constants/images";
import { DesktopTextBox, MobileTextBox } from "../../Snippets";

const Favorites = () => {
  return (
    <div className="favorites">
      <img
        className="favorites__img-full"
        src={images.Favorites1Full}
        alt="favorites"
      />
      <img className="favorites__img" src={images.Favorites1} alt="favorites" />
      <div className="desktopTextBox__container">
        <DesktopTextBox
          title={"Our Favorite Tees"}
          blurb={"Everyday tees you need!"}
          actionMessage={"shop now"}
          color={"var(--color-white)"}
          backgroundColor={"var(--color-menu)"}
        />
      </div>
      <MobileTextBox
        title={"Our Favorite Tees"}
        blurb={"Everyday tees you need!"}
        actionMessage={"shop now"}
      />
    </div>
  );
};

export default Favorites;
