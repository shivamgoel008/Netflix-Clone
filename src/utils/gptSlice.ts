import { createSlice } from "@reduxjs/toolkit";


const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,
        gptMovies:null,
    },
    reducers:{
        toggleGptSearchView:(state:any)=>{
            state.showGptSearch=!state.showGptSearch;
        },
        addGptMovieResults:(state:any, action:any)=>{
            state.gptMovies=action.payload;
        }
    }
});

export const {toggleGptSearchView,addGptMovieResults}=gptSlice.actions;

export default gptSlice.reducer;