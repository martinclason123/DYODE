import { openAccordian, closeAccordian } from "../../constants/functions";

const Accordian = ({ title, links }) => {
  return (
    <>
      <div
        className="footer__links-header"
        onClick={(e) => {
          openAccordian(e);
        }}
      >
        <h1>{title}</h1>
        <span>+</span>
      </div>
      <div
        className="footer__links-header minimize"
        onClick={(e) => {
          closeAccordian(e);
        }}
      >
        <h1>{title}</h1>
        <span>-</span>
      </div>
      <ul className="footer_links_list">
        {links.map((link) => {
          return (
            <li className="footer__link">
              <a href={`#${link.url}`}>{link.title}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Accordian;
