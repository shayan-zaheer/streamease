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
            console.log(action);
            return state.filter(movie => movie.id != action.payload);
        }
    }
});

export const favoritesActions = favoritesSlice.actions;
export default favoritesSlice;