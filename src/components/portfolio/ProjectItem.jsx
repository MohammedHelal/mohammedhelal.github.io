/* eslint-disable react/prop-types */
import { useState } from "react";
import "./ProjectItem.css";
import BareButton from "../../utils/BareButton";
import { githubIcon, newTabIcon } from "../../utils/svgIcons";
import parse from "html-react-parser";

function ProjectItem({ img, title, para, description, github, website, tags }) {
  const [showDetails, setShowDetails] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  const toggleShowDetails = () => setShowDetails(!showDetails);

  const toggleShowDescription = () => setShowDescription(!showDescription);

  return (
    <div className="proj-container w-auto my-[50px]">
      <div
        className="overflow-hidden bg-slate-600 hover:bg-slate-800 hover:shadow-lg mx-auto lg:mx-0 w-[350px] md:w-[500px] h-[250px] md:h-[340px] cursor-pointer"
        onClick={toggleShowDetails}
      >
        <img
          className="md:w-[425px] mx-auto lg:mt-[35px]"
          src={img}
          alt="project image"
        />
      </div>
      <div
        className={`proj-article max-w-[350px] md:max-w-[450px] h-[450px] md:h-[340px] py-[10px] ml-[25px] scale-x-100 `}
      >
        <div className="flex flex-wrap justify-center md:justify-start ">
          {tags.map((tag) => {
            return (
              <button
                key={tag}
                className="px-[10px] bg-slate-600 hover:bg-[#203a4c] text-white border-[1px] border-white cursor-auto"
              >
                {tag}
              </button>
            );
          })}
        </div>
        <h3 className="my-0 text-center md:text-left">{title}</h3>
        <div className="z-10">
          <div
            className={`relative max-h-[100px] z-10 ${
              showDescription ? "overflow-visible" : "overflow-hidden"
            }`}
          >
            <p>{para}</p>
            <div
              className={`absolute top-0 left-0 overflow-auto p-4 rounded-md bg-slate-200 max-h-[235px] ${
                showDescription ? "block " : "hidden"
              }  cursor-pointer z-30`}
              onClick={toggleShowDescription}
            >
              {parse(description)}
            </div>
          </div>
          <h5
            className="font-bold cursor-pointer hover:text-[#ff6347]"
            onClick={toggleShowDescription}
          >
            . . . more
          </h5>
        </div>
        <div className="md:flex gap-[10px]">
          <a
            className="w-full md:w-auto"
            href={website}
            target="_blank"
            rel="noreferrer"
          >
            <BareButton text={`Go to Website ${newTabIcon}`} />
          </a>
          <a
            className="w-full md:w-auto"
            href={github}
            target="_blank"
            rel="noreferrer"
          >
            <BareButton text={`${githubIcon} View Source`} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
