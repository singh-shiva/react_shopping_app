import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slices/CartSlice";
import WishlistSlice from "./Slices/WishlistSlice";
import SearchSlice from './Slices/SearchSlice';
export const store = configureStore({
    reducer:{
        cart:CartSlice,
        wishlist:WishlistSlice,
        search:SearchSlice
    }
})