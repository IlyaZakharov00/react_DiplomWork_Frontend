import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCatalogCategories } from "../async action/getCatalogCategoriesFetch";
import { fetchCatalogItems } from "../async action/getCatalogItemsFetch";
import { fetchCatalogItemsMore } from "../async action/getLoadMoreItems";

type TInitialState = {
    searchInCatalog: string;
    categories: {}[],
    items: [],
    moreItems: any[],
    loadingCategories: boolean,
    loadingItems: boolean,
    loadingItemsMore: boolean,
    errorCategories: null | boolean,
    errorItems: null | boolean,
    errorItemsMore: null | boolean,
};

const initialState: TInitialState = {
    searchInCatalog: "",
    categories: [],
    items: [],
    moreItems: ['', '', '', '', '', ''],
    loadingCategories: false,
    loadingItems: false,
    loadingItemsMore: false,
    errorCategories: null,
    errorItems: null,
    errorItemsMore: null,
}

const getCatalogSlice = createSlice({
    name: 'catalog',
    initialState: initialState,
    reducers: {
        searchInCatalog: (state, action: PayloadAction<any>) => {
            state.searchInCatalog = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCatalogCategories.pending, (state) => {
                state.categories = [];
                state.loadingCategories = true;
                state.errorCategories = null;
            })
            .addCase(fetchCatalogCategories.fulfilled, (state, action) => {
                state.loadingCategories = false;
                state.categories = action.payload;
                state.categories.unshift({ id: 'all', title: "Все" });
            })
            .addCase(fetchCatalogCategories.rejected, (state) => {
                state.loadingCategories = false;
                state.errorCategories = true;
            })



            .addCase(fetchCatalogItems.pending, (state) => {
                state.loadingItems = true;
                state.errorItems = null;
                state.moreItems = ['', '', '', '', '', ''];
            })
            .addCase(fetchCatalogItems.fulfilled, (state, action) => {
                state.loadingItems = false;
                state.items = action.payload;
            })
            .addCase(fetchCatalogItems.rejected, (state) => {
                state.loadingItems = false;
                state.errorItems = true;
            })



            .addCase(fetchCatalogItemsMore.pending, (state) => {
                state.loadingItemsMore = true;
                state.errorItemsMore = null;
                state.moreItems = ['', '', '', '', '', ''];
            })

            .addCase(fetchCatalogItemsMore.fulfilled, (state, action) => {
                state.loadingItemsMore = false;
                state.items = [...state.items];
                state.moreItems = [];
                action.payload.forEach((element: never) => {
                    state.items.push(element);
                    state.moreItems.push(element);
                });
            })

            .addCase(fetchCatalogItemsMore.rejected, (state) => {
                state.loadingItemsMore = false;
                state.errorItemsMore = true;
                state.moreItems = [];
            })
    }
},
);

export default getCatalogSlice;
export const { searchInCatalog } = getCatalogSlice.actions;