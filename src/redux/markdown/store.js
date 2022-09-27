import { configureStore } from "@reduxjs/toolkit";
import markdownSlice from "./slice";

export const store = configureStore({
    reducer: {
        markdown: markdownSlice,
    },
});
