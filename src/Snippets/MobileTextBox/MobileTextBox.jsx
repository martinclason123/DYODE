import "./MobileTextBox.scss";

const MobileTextBox = ({ title, blurb, actionMessage }) => {
  return (
    <div className="hero__mobile-text">
      <h1 className="hero__mobile-header">{title}</h1>
      <div className="hero__mobile-blurb">
        <p>{blurb}</p>
      </div>
      <button className="hero__mobile-button">{actionMessage}</button>
    </div>
  );
};

export default MobileTextBox;
