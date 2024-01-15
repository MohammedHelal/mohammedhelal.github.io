import { useMediaQuery } from "react-responsive";
import ProjectItem from "./ProjectItem";

function Projects() {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isTablet = useMediaQuery({
    query: "(max-width: 1224px) and (min-width: 450px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 450px)" });

  return (
    <section>
      {PROJECTS.map((e) => {
        let imgSrc = isDesktopOrLaptop
          ? e.img
          : isTablet
          ? e.imgTablet
          : e.imgMobile;

        return (
          <ProjectItem
            key={e.id}
            order={!isMobile ? e.order : 1}
            img={imgSrc}
            title={e.title}
            para={e.para}
          />
        );
      })}
    </section>
  );
}

export default Projects;

const PROJECTS = [
  {
    id: "manage_proj_1",
    order: 1,
    img: "./src/assets/images/portfolio/desktop/image-portfolio-manage@2x.jpg",
    imgTablet:
      "./src/assets/images/portfolio/tablet/image-portfolio-manage@2x.jpg",
    imgMobile:
      "./src/assets/images/portfolio/mobile/image-portfolio-manage@2x.jpg",
    title: "Manage",
    para: "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.",
  },
  {
    id: "bookmark_proj_2",
    order: 2,
    img: "./src/assets/images/portfolio/desktop/image-portfolio-bookmark@2x.jpg",
    imgTablet:
      "./src/assets/images/portfolio/tablet/image-portfolio-bookmark@2x.jpg",
    imgMobile:
      "./src/assets/images/portfolio/mobile/image-portfolio-bookmark@2x.jpg",
    title: "Bookmark",
    para: "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.",
  },
  {
    id: "insure_proj_3",
    order: 1,
    img: "./src/assets/images/portfolio/desktop/image-portfolio-insure@2x.jpg",
    imgTablet:
      "./src/assets/images/portfolio/tablet/image-portfolio-insure@2x.jpg",
    imgMobile:
      "./src/assets/images/portfolio/mobile/image-portfolio-insure@2x.jpg",
    title: "Insure",
    para: "This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.",
  },
  {
    id: "fylo_proj_4",
    order: 2,
    img: "./src/assets/images/portfolio/desktop/image-portfolio-fylo@2x.jpg",
    imgTablet:
      "./src/assets/images/portfolio/tablet/image-portfolio-fylo@2x.jpg",
    imgMobile:
      "./src/assets/images/portfolio/mobile/image-portfolio-fylo@2x.jpg",
    title: "Fylo",
    para: "This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.",
  },
];
