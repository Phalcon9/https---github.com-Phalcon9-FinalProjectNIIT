import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./store/productSlice";
import cartSlice from "./store/cartSlice"

export const store = configureStore({
    reducer:{
        products: productSlice,
        cart: cartSlice, 
    },
})