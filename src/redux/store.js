import { configureStore } from "@reduxjs/toolkit";
import markdownSlice from "./markdown/slice";
import visibilitySlice from "./visibility/slice";

export const store = configureStore({
    reducer: {
        markdown: markdownSlice,
        visibility: visibilitySlice,
    },
});
