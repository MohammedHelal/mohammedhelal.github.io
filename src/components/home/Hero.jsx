//import Button from "../../utils/Button";

import "./Hero.css";

function Hero() {
  return (
    <section className="landing-container">
      <article className="flex flex-col justify-center text-center lg:text-left lg:w-[45%] lg:h-[500px]">
        <div className="intro">
          <h2>
            Hey, I’m <br />
            Mohammed Helal
          </h2>
          <h3>Front-end developer</h3>
          <h5>Selangor, Malaysia</h5>
        </div>
      </article>
      <img
        className="mx-auto lg:mx-0 w-[500px] lg:w-auto h-auto lg:h-[500px]"
        src="../images/homepage/desktop/image-homepage-hero@2x.png"
        alt="Landing Image"
      />
    </section>
  );
}

export default Hero;
