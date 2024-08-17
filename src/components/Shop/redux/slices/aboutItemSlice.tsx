import { createSlice } from "@reduxjs/toolkit";
import { fetchAboutItem } from "../async action/getLoadAboutItem";

type TInitialState = {
    infoAboutItemByID: {};
    loadingAbouTItem: boolean,
    errorAboutItem: null | boolean,
};

const initialState: TInitialState = {
    infoAboutItemByID: {},
    loadingAbouTItem: false,
    errorAboutItem: null,
}

const aboutItemSlice = createSlice({
    name: 'aboutItem',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder

            .addCase(fetchAboutItem.pending, (state) => {
                state.loadingAbouTItem = true;
                state.errorAboutItem = null
            })
            .addCase(fetchAboutItem.fulfilled, (state, action) => {
                state.loadingAbouTItem = false;
                state.infoAboutItemByID = action.payload
            })
            .addCase(fetchAboutItem.rejected, (state) => {
                state.loadingAbouTItem = false;
                state.errorAboutItem = true
            })
    }
},
);

export default aboutItemSlice