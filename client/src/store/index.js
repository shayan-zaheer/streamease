import {configureStore} from "@reduxjs/toolkit";
import moviesSlice from "./moviesSlice";
import statusSlice from "./statusSlice";

const store = configureStore({
    reducer: {
        movies: moviesSlice.reducer,
        status: statusSlice.reducer   
    }
});

export default store;