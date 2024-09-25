import { applyMiddleware, combineReducers, compose } from "redux";
import { thunk } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import getBestSellersSlice from "./slices/getBestSellersSlice";
import getCatalogSlice from "./slices/getCatalogSlice";
import aboutItemSlice from "./slices/aboutItemSlice";
import cartSlice from "./slices/cartSlice";

const ReactReduxDevTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()


const rootReducer = combineReducers({
  bestSellers: getBestSellersSlice.reducer,
  catalog: getCatalogSlice.reducer,
  aboutItem: aboutItemSlice.reducer,
  cart: cartSlice.reducer,
})

const myMiddleware = [compose(applyMiddleware(thunk), ReactReduxDevTools)];

const store = configureStore({
  reducer: rootReducer,
  devTools: ReactReduxDevTools,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: myMiddleware,
      },
      serializableCheck: false,
    }),
})


export default store