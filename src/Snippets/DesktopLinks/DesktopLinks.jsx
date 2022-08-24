const DesktopLinks = ({ title, links }) => {
  return (
    <>
      <div className="footer__links-header">
        <h1>{title}</h1>
      </div>
      <ul className="footer_links_list">
        {links.map((link) => {
          return (
            <li className="footer__link" key={link.title}>
              <a href={`#${link.url}`}>{link.title}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default DesktopLinks;
