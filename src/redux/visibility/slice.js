import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    editor: true,
    previewer: true,
};

export const visibilitySlice = createSlice({
    name: "visibility",
    initialState,
    reducers: {
        changeVisibilityEditor: (state) => {
            state.editor = !state.editor;
        },
        changeVisibilityPreviewer: (state) => {
            state.previewer = !state.previewer;
        },
    },
});

export const { changeVisibilityEditor, changeVisibilityPreviewer } =
    visibilitySlice.actions;
export const selectEditorVisibility = (state) => {
    console.log("visibility", state);
    return state.visibility.editor;
};
export const selectPreviewerVisibility = (state) => {
    return state.visibility.previewer;
};

export default visibilitySlice.reducer;
