import { createSlice,  PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../types";
import type { RootState } from "./store";

interface FavoritesState {
    favorites: IProduct[]
}
const initialState: FavoritesState = {
    favorites: []
};

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<IProduct>) => {
            state.favorites = [...state.favorites.filter(({ id }) => action.payload.id !== id), action.payload];
        },
        deleteFavorite: (state, action: PayloadAction<string>) => {
            state.favorites = state.favorites.filter((favorite: IProduct) => favorite.id !== action.payload)
        }
    }
})

export const { addFavorite, deleteFavorite } = favoritesSlice.actions;
export const getFavorites = (state: RootState) => state.trustcrypt.favorites;

export default favoritesSlice.reducer;