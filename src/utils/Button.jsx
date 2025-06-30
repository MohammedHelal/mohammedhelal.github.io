import PropTypes from "prop-types";
import "./Button.css";

function Button({ text, classes }) {
  return (
    <button className={`btn ${classes}`}>
      <span className="text-btn">{text}</span>
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default Button;
