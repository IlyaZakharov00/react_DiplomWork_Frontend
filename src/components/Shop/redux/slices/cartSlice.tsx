import { createSlice, current } from "@reduxjs/toolkit";
import { fetchMakePurchase } from "../async action/postMakePurchase";

type TInitialState = {
    products: Array<any>;
    loading: boolean;
    error: boolean | null;
    fulfilled: boolean;
};

const initialState: TInitialState = {
    products: [],
    loading: false,
    error: null,
    fulfilled: false,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addProduct: (state, action) => {

            if (state.products.length === 0) {
                state.products.push(action.payload);
                localStorage.setItem('products', JSON.stringify(state.products));
                return;
            }

            for (let i = 0; i < state.products.length; i++) {
                if (current(state.products[i]).id === action.payload.id) {
                    let index = state.products.indexOf(state.products[i])
                    action.payload.countProducts = current(state.products[i]).countProducts + action.payload.countProducts;
                    state.products.splice(index, 1, action.payload);
                    localStorage.setItem('products', JSON.stringify(state.products));
                    return;
                }
            }

            state.products.push(action.payload);
            localStorage.setItem('products', JSON.stringify(state.products));
        },

        deleteProduct: (state, action) => {
            state.products.splice(action.payload, 1);
            localStorage.setItem('products', JSON.stringify(state.products));
        },

        backFromLC: (state) => {
            let productsJSON = localStorage.getItem('products');
            if (productsJSON) state.products = JSON.parse(productsJSON);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMakePurchase.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(fetchMakePurchase.fulfilled, (state) => {
                state.loading = false;
                state.fulfilled = true;
                localStorage.clear();
                state.products = [];
            })

            .addCase(fetchMakePurchase.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
    }
});

export default cartSlice
export const { addProduct, deleteProduct, backFromLC } = cartSlice.actions


