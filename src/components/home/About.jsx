import { useState } from "react";
import TagSphere from "./tagsphere/TagSphere.jsx";
import "./About.css";

function About() {
  const [showAboutMe, setShowAboutMe] = useState(false);

  const toggleShowAboutMe = () => setShowAboutMe(!showAboutMe);

  return (
    <section id="about-me" className="about-container">
      {/*<img
        src="./images/homepage/desktop/mohammeds-photo.jpg"
        alt="self image"
      />*/}
      <div className="flex items-start justify-center">
        <TagSphere />
      </div>
      <article
        id="about-me"
        className={`about-article transition-[height] duration-300 ${
          showAboutMe ? "h-[750px]" : "h-[500px]"
        }`}
      >
        <h2 className="my-[25px]">About Me</h2>
        <div
          className={`relative my-[25px] transition-[height] duration-300 ${
            showAboutMe ? "h-[560px]" : "h-[155px]"
          }`}
        >
          <p>
            Hi, I’m Mohammed Helal, a seasoned technology professional with 5
            years of experience as a storage engineer. While my background is in
            infrastructure, I’ve developed a strong passion for web development
            and have been actively honing my skills in this area.
          </p>
          <div
            className={`relative transition-all duration-300 origin-top ${
              showAboutMe
                ? "scale-y-100 opacity-100 mb-[15px] h-auto"
                : "scale-y-0 opacity-0 h-0"
            }`}
          >
            <ul className="list-none my-[15px] -ml-[15px]">
              <li>
                <strong>Design:</strong>
                <ul className="ml-[15px]">
                  <li>
                    Proficient in creating wireframes and translating them into
                    designs using Figma
                  </li>
                  <li>
                    Collaborative experience working from designer assets in
                    Figma or Sketch
                  </li>
                </ul>
              </li>
              <li>
                <strong>Development:</strong>
                <ul className="ml-[15px]">
                  <li>Front-end expertise with React, CSS, and Tailwind</li>
                  <li>Back-end development using C#, ASP.NET, and MS SQL</li>
                </ul>
              </li>
              <li>
                <strong>Deployment:</strong>
                <ul className="ml-[15px]">
                  <li>
                    Strong understanding of secure and seamless code deployment
                    processes, drawing from my infrastructure background
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              I’m eager to contribute to a dynamic web development team and
              bring my technical skills and adaptability to new challenges.
            </p>
          </div>
          <h5
            className="font-bold transition-all duration-300 cursor-pointer hover:text-[#ff6347]"
            onClick={toggleShowAboutMe}
          >
            . . . {showAboutMe ? "less" : "more"}
          </h5>
        </div>
      </article>
    </section>
  );
}

export default About;
