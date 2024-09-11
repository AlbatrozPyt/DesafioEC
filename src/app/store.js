import { configureStore } from "@reduxjs/toolkit";
import pageSlice from "../features/page/pageSlice";
import itemSlice from "../features/itemDrag/itemSlice";

export default configureStore({
    reducer: {
        page: pageSlice,
        itemDrag: itemSlice
    }
});