import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    searchData:"",
    searchButton:false
}
const SearchSlice = createSlice({
    name:"search",
    initialState,
    reducers:{
        updateData:(state,action)=>{
            state.searchData = action.payload;
        },
        updateButton:(state,action)=>{
            state.searchButton = action.payload;
        }
    }
})
export const{updateData,updateButton} = SearchSlice.actions;
export default SearchSlice.reducer;