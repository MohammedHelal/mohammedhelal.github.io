/* eslint-disable react/prop-types */
import "./ProjectItem.css";
import { Link } from "react-router-dom";
import BareButton from "../../utils/BareButton";

function ProjectItem({ order, img, title, para }) {
  let param = title.toLowerCase();
  return (
    <article className="proj-container">
      {order === 1 && <img src={img} alt="project image" />}
      <div className="proj-article">
        <div>
          <h2>{title}</h2>
          <p>{para}</p>
        </div>
        <Link to={param}>
          <BareButton text={"VIEW PROJECT"} />
        </Link>
      </div>
      {order === 2 && <img src={img} alt="project image" />}
    </article>
  );
}

export default ProjectItem;
