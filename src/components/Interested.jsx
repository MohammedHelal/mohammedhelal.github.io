import BareButton from "../utils/BareButton";
import { Link } from "react-router-dom";
import "./Interested.css";

function Interested() {
  return (
    <article className="intereseted-container">
      <div className="interested-heading">
        <h2>Interested in doing a project together?</h2>
      </div>
      <div className="interested-line"></div>
      <Link to="/contact">
        <BareButton text="CONTACT ME" />
      </Link>
    </article>
  );
}

export default Interested;
