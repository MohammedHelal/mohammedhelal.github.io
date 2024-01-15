import PropTypes from "prop-types";
import "./BareButton.css";

function BareButton({ text }) {
  return <button className="bare-btn">{text}</button>;
}

BareButton.propTypes = {
  text: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default BareButton;
