import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [imgSrc, setImgSrc] = useState("./images/icons/hamburger.svg");
  const [listClasses, setListClasses] = useState("hide");

  const isMobile = useMediaQuery({ query: "(max-width: 450px)" });
  const path = useLocation();
  const { pathname } = path;

  function hamburgClickHandler() {
    if (listClasses === "hide") {
      setListClasses("show");
      setImgSrc("./images/icons/close.svg");
    } else {
      setListClasses("hide");
      setImgSrc("./images/icons/hamburger.svg");
    }
  }

  function closeNav() {
    setListClasses("hide");
    setImgSrc("./images/icons/hamburger.svg");
  }

  return (
    <nav className="header-nav">
      <img src="./images/logo.svg" alt="Site's Logo" />
      {isMobile && (
        <button className="btn-hamburg" onClick={hamburgClickHandler}>
          <img src={imgSrc} alt="Navbar hamburger button" />
        </button>
      )}
      <ul className={isMobile ? `nav-list ${listClasses}` : `nav-list`}>
        <li className={pathname === "/" ? "current-page" : "nav-link"}>
          <Link to="/" onClick={closeNav}>
            HOME
          </Link>
        </li>
        <li className={pathname === "/portfolio" ? "current-page" : "nav-link"}>
          <Link to="/portfolio" onClick={closeNav}>
            PORTFOLIO
          </Link>
        </li>
        <li className={pathname === "/contact" ? "current-page" : "nav-link"}>
          <Link to="/contact" onClick={closeNav}>
            CONTACT ME
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
