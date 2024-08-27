import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: [],
    reducers: {
        addFavorites: (state, action) => {
            return action.payload;
        },
        addFavorite: (state, action) => {
            state.push(action.payload);
        },
        removeFavorite: (state, action) => {
            return state.filter(movie => movie.title != action.payload.title);
        }
    }
});

export const favoritesActions = favoritesSlice.actions;
export default favoritesSlice;