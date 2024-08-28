import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: [],
    reducers: {
        addFavorites: (state, action) => {
            return action.payload;
        },
        addFavorite: (state, action) => {
            async function getMovie(id){
                const result = await axios.get(`http://localhost:8000/movies/${id}`, {withCredentials: true});
                const movie = result.data.movie;
                state.push(movie);
            }
            getMovie(action.payload);
        },
        removeFavorite: (state, action) => {
            console.log(action);
            return state.filter(movie => movie.id != action.payload);
        }
    }
});

export const favoritesActions = favoritesSlice.actions;
export default favoritesSlice;