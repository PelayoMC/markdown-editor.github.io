import { useDispatch, useSelector } from "react-redux";
import { selectMessage } from "../redux/markdown/slice";
import {
    changeVisibilityEditor,
    selectEditorVisibility,
    selectPreviewerVisibility,
} from "../redux/visibility/slice";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMaximize, faMinimize } from "@fortawesome/free-solid-svg-icons";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";

const Previewer = () => {
    const dispatch = useDispatch();
    const updateVisibility = (evt) => {
        dispatch(changeVisibilityEditor());
    };
    let visible = useSelector(selectEditorVisibility);

    return (
        <div id="preview" hidden={!useSelector(selectPreviewerVisibility)}>
            <div id="toolbar">
                <span>
                    <FontAwesomeIcon icon={faFreeCodeCamp} />
                    <span className="ps-2">Previewer</span>
                </span>
                <FontAwesomeIcon
                    icon={visible ? faMaximize : faMinimize}
                    style={{ margin: 5 }}
                    onClick={updateVisibility}
                />
            </div>
            <div id="preview-markdown">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {useSelector(selectMessage)}
                </ReactMarkdown>
            </div>
        </div>
    );
};

export default Previewer;
