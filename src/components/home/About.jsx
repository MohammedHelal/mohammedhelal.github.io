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
        className={`flex flex-col justify-center about-article transition-[height] duration-300 ${
          showAboutMe ? "h-auto" : "h-[450px]"
        }`}
      >
        <h2 className="">About Me</h2>
        <div className={`relative my-[25px] `}>
          <p>
            I'm a front-end developer who builds production-ready web
            applications with a systems engineer's mindset. Over 3+ years, I've
            developed and maintained responsive platforms like "Masaakin" - a
            real estate application serving thousands of users across the UAE.
            <br className="mb-[5px]" />
            My 5-year background in enterprise systems engineering gives me what
            most front-end developers lack: expertise in debugging complex
            issues, optimizing performance, and building applications that scale
            reliably.
          </p>
          <div
            className={`relative transition-all duration-300 origin-top ${
              showAboutMe
                ? "scale-y-100 opacity-100 mb-[15px] h-auto"
                : "scale-y-0 opacity-0 h-0"
            }`}
          >
            <h4 className="mt-[15px] mb-[8px]">What makes me different:</h4>
            <ul className="list-none mb-[15px] ml-[15px]">
              <li>
                <span className="font-bold">Production-Ready Mindset:</span> My
                systems background means I build with reliability, performance,
                and scalability in mind from day one
              </li>
              <li>
                <span className="font-bold">Problem-Solving Depth:</span> Years
                of troubleshooting critical enterprise systems taught me to
                approach bugs systematically and think through edge cases
              </li>
              <li>
                <span className="font-bold">Full-Stack Perspective:</span> I
                understand how front-end applications interact with servers,
                databases, and infrastructure - not just how to make them look
                good
              </li>
              <li>
                <span className="font-bold">Proven Track Record:</span> I've
                maintained a production application for 3+ years, handling real
                users, real problems, and real business requirements
              </li>
            </ul>
            <p>
              I specialize in React.js and Next.js development, with experience
              in TypeScript, PostgreSQL, and modern front-end tooling. Whether
              you need someone to build a new application from scratch or
              optimize an existing platform, I bring the technical skills and
              systems thinking to deliver solutions that work reliably at scale.
              <br />{" "}
              <span className="italic">
                Ready to build something amazing together? Let's talk.
              </span>
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
