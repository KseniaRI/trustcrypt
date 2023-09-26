import { createSlice,  PayloadAction } from "@reduxjs/toolkit";
import { IProduct, Status } from "../../types";
import {
    addFavoriteToFirebase,
    deleteFavoriteFromFirebase,
    fetchFavoritesFromFirebase
} from "./favoritesOperations";

interface FavoritesState {
    favorites: IProduct[];
    error: undefined | string;
    status: undefined | string;
}
const initialState: FavoritesState = {
    favorites: [],
    error: undefined,
    status: undefined
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
        },
        clearFavorites: (state) => {
            state.favorites = [];
            state.status = undefined;
            state.error = undefined;
        }
    }, 
    extraReducers: (builder) => {
        builder
            .addCase(addFavoriteToFirebase.pending, (state: FavoritesState) => {
                state.error = undefined;
                state.status = Status.LOADING;
            })
            .addCase(addFavoriteToFirebase.fulfilled, (state: FavoritesState) => {
                state.status = Status.RESOLVED;
            })
            .addCase(addFavoriteToFirebase.rejected, (state: FavoritesState, action) => {
                state.status = Status.REJECTED;
                state.error = action.payload;
            })

            .addCase(fetchFavoritesFromFirebase.pending, (state: FavoritesState) => {
                state.error = undefined;
                state.status = Status.LOADING;
            })
            .addCase(fetchFavoritesFromFirebase.fulfilled, (state: FavoritesState, action: PayloadAction<IProduct[]>) => {
                state.favorites = action.payload;
                state.status = Status.RESOLVED;
            })
            .addCase(fetchFavoritesFromFirebase.rejected, (state: FavoritesState, action) => {
                state.error = action.payload;
                state.status = Status.REJECTED;
            })
        
            .addCase(deleteFavoriteFromFirebase.pending, (state: FavoritesState) => {
                state.status = Status.LOADING;
                state.error = undefined;
            })
            .addCase(deleteFavoriteFromFirebase.fulfilled, (state: FavoritesState) => {
                state.status = Status.RESOLVED;
            })
            .addCase(deleteFavoriteFromFirebase.rejected, (state: FavoritesState, action) => {
                state.status = Status.REJECTED;
                state.error = action.payload;
            })
    }
})

export const { addFavorite, deleteFavorite, clearFavorites } = favoritesSlice.actions;


export default favoritesSlice.reducer;