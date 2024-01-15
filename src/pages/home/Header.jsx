import Button from "../../utils/Button";
import { useMediaQuery } from "react-responsive";
import NavBar from "../../components/NavBar";
import "./Header.css";

function Header() {
  const isMobile = useMediaQuery({ query: "(max-width: 450px)" });

  return (
    <header>
      <NavBar />
      <article className="landing-container">
        {isMobile && (
          <img
            src="../assets/images/homepage/mobile/image-homepage-hero@2x.jpg"
            alt="Landing Image"
          />
        )}
        <div className="intro-wrapper">
          <div className="intro">
            <h2>
              Hey, I&apos;m Mohammed Omar, and I love building beautiful
              websites
            </h2>
            <a href="#about-me">
              <Button
                text={"ABOUT ME"}
                src={"../assets/images/icons/down-arrows.svg"}
                alt={"Arrow pointing down"}
              />
            </a>
          </div>
        </div>
      </article>
    </header>
  );
}

export default Header;
