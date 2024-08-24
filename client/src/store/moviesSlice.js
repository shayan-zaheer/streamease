import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        generalMovies: [],
        popularMovies: []
    },
    reducers: {
        addGeneralMovies: (state, action) => {
            state.generalMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        }
    }
});

export const moviesActions = moviesSlice.actions;
export default moviesSlice;
