import { createSlice } from "@reduxjs/toolkit";
import { fetchBestSellers } from "../async action/getBestSellersFetch";

type TInitialState = {
    bestSellersArray: [],
    loading: boolean,
    error: null | boolean,
};

const initialState: TInitialState = {
    bestSellersArray: [],
    loading: false,
    error: null,
}

const getBestSellersSlice = createSlice({
    name: 'bestsellers',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBestSellers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBestSellers.fulfilled, (state, action) => {
                state.loading = false;
                state.bestSellersArray = action.payload;
            })
            .addCase(fetchBestSellers.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
    }
},
);

export default getBestSellersSlice