import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import getBestSellersSlice from "./slices/getBestSellersSlice";
import getCatalogSlice from "./slices/getCatalogSlice";
import aboutItemSlice from "./slices/aboutItemSlice";
import cartSlice from "./slices/cartSlice";

const ReactReduxDevTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()


export function configureStore() {
  return legacy_createStore(
    combineReducers({
      bestSellers: getBestSellersSlice.reducer,
      catalog: getCatalogSlice.reducer,
      aboutItem: aboutItemSlice.reducer,
      cart: cartSlice.reducer,
    }),
    compose(applyMiddleware(thunk), ReactReduxDevTools)
  )
}
