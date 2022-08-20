import "./DesktopTextBox.scss";

/* 
  Returns a text box to be positioned over an image, wrap in a div and
  use position relative/absolute on that div for positioning
*/

const DesktopTextBox = ({
  title,
  blurb,
  actionMessage,
  color,
  backgroundColor,
}) => {
  return (
    <div className="desktopTextBox">
      <h1 style={{ color: color }} className="desktopTextBox__text-header">
        {title}
      </h1>
      <p style={{ color: color }} className="desktopTextBox__text-blurb">
        {blurb}
      </p>
      <button
        style={{ backgroundColor: backgroundColor }}
        className="desktopTextBox__text-button"
      >
        {actionMessage}
      </button>
    </div>
  );
};
export default DesktopTextBox;
