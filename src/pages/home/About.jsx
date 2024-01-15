import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import BareButton from "../../utils/BareButton";
import Interested from "../../components/Interested";
import "./About.css";

function About() {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isTablet = useMediaQuery({
    query: "(max-width: 1224px) and (min-width: 450px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 450px)" });

  return (
    <main>
      <article className="about-container">
        {isDesktopOrLaptop && (
          <img
            src="../../src/assets/images/homepage/desktop/mohammeds-photo.jpg"
            alt="self image"
          />
        )}
        {isTablet && (
          <img
            src="../../src/assets/images/homepage/tablet/mohammeds-photo.jpg"
            alt="self image"
          />
        )}
        {isMobile && (
          <img
            src="../../src/assets/images/homepage/mobile/image-homepage-profile@2x.jpg"
            alt="self image"
            className="mobile-img"
          />
        )}
        <div id="about-me" className="about-article">
          <div>
            <h2>About Me</h2>
            <p>
              I’m Mohammed Omar Helal, a passionate and curious front end
              developer who enjoys building beautiful websites and learning
              about the wide world of programming. I primarily use ReactJs, SASS
              and Tailwind CSS to build websites and I am now exploring NextJS
              and building APIs using node.js and express.
              <br /> <br />I am currently based in Cyberjaya, Malaysia, but I
              would be happy to work remotely with you. Check out my work:
            </p>
          </div>
          <Link to="/portfolio">
            <BareButton text="GO TO PORTFOLIO" />
          </Link>
        </div>
      </article>
      <Interested />
    </main>
  );
}

export default About;
