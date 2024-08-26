import {configureStore} from "@reduxjs/toolkit";
import moviesSlice from "./moviesSlice";
import statusSlice from "./statusSlice";
import userSlice from "./userSlice";

const store = configureStore({
    reducer: {
        movies: moviesSlice.reducer,
        status: statusSlice.reducer,
        user: userSlice.reducer
    }
});

export default store;