import PropTypes from "prop-types";
import "./BareButton.css";
import parse from "html-react-parser";

function BareButton({ text }) {
  return <button className="bare-btn">{parse(text)}</button>;
}

BareButton.propTypes = {
  text: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default BareButton;
