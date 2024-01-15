import PropTypes from "prop-types";
import "./Button.css";

function Button({ text, src, alt }) {
  return (
    <button className="btn">
      {src !== undefined && (
        <span className="img-btn">
          <img src={src} alt={alt} />
        </span>
      )}
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
