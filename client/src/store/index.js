import {configureStore} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';
import moviesSlice from "./moviesSlice";
import statusSlice from "./statusSlice";
import userSlice from "./userSlice";
import favoritesSlice from "./favoritesSlice";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user'],
};

const rootReducer = combineReducers({
    movies: moviesSlice.reducer,
    status: statusSlice.reducer,
    user: userSlice.reducer,
    favorites: favoritesSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
            },
        }),
});

export const persistor = persistStore(store);
export default store;