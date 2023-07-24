import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from "./favoritesSlice";

const store = configureStore({
    reducer: {
        trustcrypt: favoritesReducer
    },
})

export default store;

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch