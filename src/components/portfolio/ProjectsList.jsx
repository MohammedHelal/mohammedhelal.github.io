//import { useMediaQuery } from "react-responsive";
import ProjectItem from "./ProjectItem";
import { PAGES } from "../../utils/PAGES";

function Projects() {
  return (
    <section
      id="projects"
      className="lg:max-w-[1080px] mx-[25px] md:mx-[50px] lg:mx-auto my-[150px]"
    >
      <h2 className="my-[50px] text-center lg:text-left">Portfolio</h2>
      <article className="">
        {PAGES.map((e) => {
          return (
            <ProjectItem
              key={e.id}
              img={e.landingImg}
              title={e.title}
              description={e.background}
              para={e.para}
              github={e.github}
              website={e.website}
              tags={e.tags}
            />
          );
        })}
      </article>
    </section>
  );
}

export default Projects;
