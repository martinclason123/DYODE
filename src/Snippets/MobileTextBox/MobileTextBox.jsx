import "./MobileTextBox.scss";

const MobileTextBox = ({ title, blurb, actionMessage }) => {
  return (
    <div className="hero__mobile-text">
      <h1 className="hero__mobile-header">{title}</h1>
      <p className="hero__mobile-blurb">{blurb}</p>
      <button className="hero__mobile-button">{actionMessage}</button>
    </div>
  );
};

export default MobileTextBox;
