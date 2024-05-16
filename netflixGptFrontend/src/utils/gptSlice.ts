import { createSlice } from "@reduxjs/toolkit";


const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,
        movieResults:[],
        movieNames:[]
    },
    reducers:{
        toggleGptSearchView:(state:any)=>{
            state.showGptSearch=!state.showGptSearch;
        },
        addGptMovieResults:(state:any, action:any)=>{
            state.movieResults = action.payload;
        },
        addGptMovieNames:(state:any, action:any)=>{
            state.movieNames= action.payload;
        }
    }
});

export const {toggleGptSearchView,addGptMovieResults,addGptMovieNames}=gptSlice.actions;

export default gptSlice.reducer;