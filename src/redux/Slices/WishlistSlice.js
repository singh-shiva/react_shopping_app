import { createSlice } from "@reduxjs/toolkit";
export const WishlistSlice = createSlice({
    name:"wishlist",
    initialState:[],
    reducers:{
        addWish:(state,action)=>{
            state.push(action.payload);
        },
        removeWish:(state,action)=>{
            return state.filter((p)=>p.id !== action.payload);
        }
    }
})
export const{addWish,removeWish} = WishlistSlice.actions;
export default WishlistSlice.reducer;