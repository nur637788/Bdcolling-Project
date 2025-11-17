import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Redux/CartSlice"
import authReducer from "../Redux/authSlice"


export const store = configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducer,

    },
});

// SAVE to localStorage whenever state changes
store.subscribe(() => {
    localStorage.setItem("cartState", JSON.stringify(store.getState().cart));
});
