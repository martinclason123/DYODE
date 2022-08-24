import "./Favorites.scss";
import { DesktopTextBox, MobileTextBox } from "../../Snippets";
import { favoritesData } from "../../Data/Data";

const Favorites = () => {
  return (
    <div className="favorites">
      <img
        className="favorites__img-full"
        src={favoritesData.imageDesktop}
        alt="favorites"
      />
      <img
        className="favorites__img"
        src={favoritesData.imageMobile}
        alt="favorites"
      />
      <div className="desktopTextBox__container">
        <DesktopTextBox
          title={favoritesData.title}
          blurb={favoritesData.blurb}
          actionMessage={favoritesData.actionMessage}
          color={"var(--color-white)"}
          backgroundColor={"var(--color-menu)"}
        />
      </div>
      <MobileTextBox
        title={favoritesData.title}
        blurb={favoritesData.blurb}
        actionMessage={favoritesData.actionMessage}
      />
    </div>
  );
};

export default Favorites;
