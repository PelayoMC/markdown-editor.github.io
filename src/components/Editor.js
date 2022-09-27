import { useDispatch, useSelector } from "react-redux";
import { changeMessage, selectMessage } from "../redux/markdown/slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMaximize } from "@fortawesome/free-solid-svg-icons";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";

const Editor = () => {
    const dispatch = useDispatch();

    const updateText = (evt) => {
        console.log(evt.target.value);
        dispatch(changeMessage(evt.target.value));
    };

    return (
        <div id="editor-box">
            <div id="toolbar">
                <span>
                    <FontAwesomeIcon icon={faFreeCodeCamp} />
                    <span className="ps-2">EDITOR</span>
                </span>
                <FontAwesomeIcon icon={faMaximize} style={{ margin: 5 }} />
            </div>
            <textarea
                id="editor"
                defaultValue={useSelector(selectMessage)}
                onChange={updateText}
            ></textarea>
        </div>
    );
};

export default Editor;
