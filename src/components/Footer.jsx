import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <nav className="footer-nav">
        <img src="./images/logo.svg" alt="Site's Logo" />
        <ul className="footer-nav-list">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/portfolio">PORTFOLIO</Link>
          </li>

          <li>
            <Link to="/contact">CONTACT ME</Link>
          </li>
        </ul>
      </nav>
      <div className="icon-flex">
        <img src="./images/icons/github.svg" alt="" />
        <img src="./images/icons/linkedin.svg" alt="" />
        <img src="./images/icons/twitter.svg" alt="" />
      </div>
    </footer>
  );
}

export default Footer;
