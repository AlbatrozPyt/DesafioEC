import { createSlice } from "@reduxjs/toolkit";

export const itemSlice = createSlice({
    name: 'itemDrag',
    initialState: {
        item: null,
        index: null,
        currentPage: null
    },
    reducers: {
        setItem: (state, action) => {
            state.item = action.payload.item;
            state.index = action.payload.index;
            state.currentPage = action.payload.currentPage;
        }
    }
});

export const { setItem } = itemSlice.actions;
export default itemSlice.reducer;