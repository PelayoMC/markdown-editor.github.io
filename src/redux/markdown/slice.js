import { createSlice } from "@reduxjs/toolkit";
import init from "../../markdown/initial-markdown";

const initialState = {
    message: init,
};

export const markdownSlice = createSlice({
    name: "markdown",
    initialState,
    reducers: {
        changeMessage: (state, action) => {
            state.message = action.payload;
        },
    },
});

export const { changeMessage } = markdownSlice.actions;
export const selectMessage = (state) => {
    console.log("message", state);
    return state.markdown.message;
};
export default markdownSlice.reducer;
