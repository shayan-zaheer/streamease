import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: [],
    reducers: {
        addFavorites: (state, action) => {
            return action.payload;
        }
    }
});

export const favoritesActions = favoritesSlice.actions;
export default favoritesSlice;