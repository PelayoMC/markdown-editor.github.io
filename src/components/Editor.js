import init from "../markdown/initial-markdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMaximize } from "@fortawesome/free-solid-svg-icons";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";

const Editor = () => {
  return (
    <div id="editor-box">
      <div id="toolbar">
        <span>
          <FontAwesomeIcon icon={faFreeCodeCamp} />
          <span className="ps-2">EDITOR</span>
        </span>
        <FontAwesomeIcon icon={faMaximize} style={{ margin: 5 }} />
      </div>
      <textarea id="editor" defaultValue={init}></textarea>
    </div>
  );
};

export default Editor;
