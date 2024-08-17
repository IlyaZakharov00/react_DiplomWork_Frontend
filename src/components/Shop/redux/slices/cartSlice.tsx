import { createSlice, current } from "@reduxjs/toolkit";

// type TProductItem = {
//     countProducts: number;
//     price: number;
//     selectedSize: string;
//     title: string;
// }

type TInitialState = {
    products: Array<any>;
};

const initialState: TInitialState = {
    products: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addProduct: (state, action) => {
            console.log(action.payload)
            if (current(state.products).length === 0) {
                state.products.push(action.payload);
            } else {
                for (const product of current(state.products)) {
                    if (product.title === action.payload.title && product.size === action.payload.size) {
                        let index = state.products.indexOf(product);
                        action.payload.countProducts = product.countProducts + action.payload.countProducts;
                        state.products.splice(index, 1, action.payload);
                    } else {
                        state.products.push(action.payload);
                    }
                }
            }
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
});

export default cartSlice
export const { addProduct, deleteProduct, backFromLC } = cartSlice.actions

