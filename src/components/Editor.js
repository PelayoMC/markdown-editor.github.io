import { useDispatch, useSelector } from "react-redux";
import { changeMessage, selectMessage } from "../redux/markdown/slice";
import {
    changeVisibilityPreviewer,
    selectEditorVisibility,
    selectPreviewerVisibility,
} from "../redux/visibility/slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMaximize, faMinimize } from "@fortawesome/free-solid-svg-icons";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";

const Editor = () => {
    const dispatch = useDispatch();

    const updateText = (evt) => {
        dispatch(changeMessage(evt.target.value));
    };

    const updateVisibility = (evt) => {
        dispatch(changeVisibilityPreviewer());
    };
    let visible = useSelector(selectPreviewerVisibility);

    return (
        <div id="editor-box" hidden={!useSelector(selectEditorVisibility)}>
            <div id="toolbar">
                <span>
                    <FontAwesomeIcon icon={faFreeCodeCamp} />
                    <span className="ps-2">Editor</span>
                </span>
                <FontAwesomeIcon
                    icon={visible ? faMaximize : faMinimize}
                    style={{ margin: 5 }}
                    onClick={updateVisibility}
                />
            </div>
            <textarea
                id="editor"
                style={{
                    minHeight: visible ? "30vh" : "90vh",
                }}
                defaultValue={useSelector(selectMessage)}
                onChange={updateText}
            ></textarea>
        </div>
    );
};

export default Editor;
