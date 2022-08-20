import "./Favorites.scss";
import images from "../../constants/images";
import { MobileTextBox } from "../../Snippets";

const Favorites = () => {
  return (
    <div className="favortites">
      <img src={images.Favorites1} alt="favorites" />
      <MobileTextBox
        title={"Our Favorite Tees"}
        blurb={"Everyday tees you need!"}
        actionMessage={"shop now"}
      />
    </div>
  );
};

export default Favorites;
