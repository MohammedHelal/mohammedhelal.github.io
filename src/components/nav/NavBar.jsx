import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import hamburger from "../../assets/icons/hamburger.svg";
import close from "../../assets/icons/close.svg";
import "./NavBar.css";

function NavBar() {
  const [imgSrc, setImgSrc] = useState(hamburger);
  const [listClasses, setListClasses] = useState("hide");

  const isMobile = useMediaQuery({ query: "(max-width: 450px)" });

  function hamburgClickHandler() {
    if (listClasses === "hide") {
      setListClasses("show");
      setImgSrc(close);
    } else {
      setListClasses("hide");
      setImgSrc(hamburger);
    }
  }

  function closeNav() {
    setListClasses("hide");
    setImgSrc(hamburger);
  }

  return (
    <nav className="header-nav">
      <h2 className="logo">
        <span>M</span>
        <span className="text-[#ff6347]">H.</span>
      </h2>
      {isMobile && (
        <button className="btn-hamburg" onClick={hamburgClickHandler}>
          <img src={imgSrc} alt="Navbar hamburger button" />
        </button>
      )}
      <ul className={` ${isMobile ? `nav-list ${listClasses}` : `nav-list`}`}>
        <li>
          <a className="nav-link uppercase" href="#about-me" onClick={closeNav}>
            About me
          </a>
        </li>
        <li>
          <a className="nav-link uppercase" href="#projects" onClick={closeNav}>
            Portfolio
          </a>
        </li>
        <li>
          <a className="nav-link uppercase" href="#contact" onClick={closeNav}>
            Contact me
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
