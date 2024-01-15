import { useMediaQuery } from "react-responsive";
import BareButton from "../../utils/BareButton";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { PAGES } from "./PAGES";
import "./Project.css";

function Project() {
  const isDesktop = useMediaQuery({ query: "(min-width: 1224px)" });
  console.log(isDesktop);
  const isTablet = useMediaQuery({
    query: "(max-width: 1224px)  and (min-width: 450px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 450px)" });

  let { id } = useParams();
  let obj = PAGES.filter((page) => page.id === id)[0];

  return (
    <section className="proj-main">
      <img
        className="proj-landing-img"
        src={
          isTablet
            ? obj.landingImgTablet
            : isMobile
            ? obj.landingImgMobile
            : obj.landingImg
        }
        alt="Project landing image"
      />
      <article className="proj-article-flex">
        <div className="proj-brief">
          <div>
            <h2>{obj.title}</h2>
            {isDesktop || (isMobile && <p>{obj.para}</p>)}
            <h4>{obj.tags}</h4>
            <h4>{obj.tech}</h4>
            <BareButton text="VISIT WEBSITE" />
          </div>
          {<div>{isTablet && <p>{obj.para}</p>}</div>}
        </div>
        <div className="proj-deets">
          <h3>Project Background</h3>
          <p>{obj.background}</p>
          <h3>Static Previews</h3>
          <img
            src={
              isTablet
                ? obj.previewOneTablet
                : isMobile
                ? obj.previewOneMobile
                : obj.previewOne
            }
            alt="project preview 1"
          />
          <img
            src={
              isTablet
                ? obj.previewTwoTablet
                : isMobile
                ? obj.previewTwoMobile
                : obj.previewTwo
            }
            alt="project preview 2"
          />
        </div>
      </article>
      <div className="proj-nav">
        <div>
          <div className="proj-nav-flex one">
            <Link to={`/portfolio/${obj.previous.toLowerCase()}`}>
              <img
                id="left-arrow"
                src="../../src/assets/images/icons/arrow-left.svg"
                alt="Left pointing arrow"
              />
            </Link>
            <div>
              <h3>{obj.previous}</h3>
              <p>Previous Project</p>
            </div>
          </div>
        </div>
        <div>
          <div className="proj-nav-flex two">
            {isMobile && (
              <Link to={`/portfolio/${obj.next.toLowerCase()}`}>
                <img
                  id="right-arrow"
                  src="../../src/assets/images/icons/arrow-right.svg"
                  alt="Right pointing arrow"
                />
              </Link>
            )}
            <div>
              <h3>{obj.next}</h3>
              <p>Next Project</p>
            </div>
            {isDesktop ||
              (isTablet && (
                <Link to={`/portfolio/${obj.next.toLowerCase()}`}>
                  <img
                    id="right-arrow"
                    src="../../src/assets/images/icons/arrow-right.svg"
                    alt="Right pointing arrow"
                  />
                </Link>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
