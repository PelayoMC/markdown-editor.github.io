import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMaximize } from "@fortawesome/free-solid-svg-icons";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";

const Previewer = () => {
  return (
    <div id="preview">
      <div id="toolbar">
        <span>
          <FontAwesomeIcon icon={faFreeCodeCamp} />
          <span className="ps-2">PREVIEWER</span>
        </span>
        <FontAwesomeIcon icon={faMaximize} style={{ margin: 5 }} />
      </div>
      <div id="preview-markdown"></div>
    </div>
  );
};

export default Previewer;
