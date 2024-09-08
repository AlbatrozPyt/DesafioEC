import { configureStore } from "@reduxjs/toolkit";
import pageSlice from "../features/page/pageSlice";

export default configureStore({
    reducer: {
        page: pageSlice
    }
});