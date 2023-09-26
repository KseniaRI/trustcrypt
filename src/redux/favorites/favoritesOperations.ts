import { createAsyncThunk } from "@reduxjs/toolkit";
import { addFavorite, deleteFavorite } from "./favoritesSlice";
import {
    firebaseAddFavorite,
    firebaseGetFavorites, 
    firebaseRemoveFavorite
} from "../../services/firebase/firebaseFavoritesOperations";
import { IProduct } from "../../types";


export const fetchFavoritesFromFirebase = createAsyncThunk<IProduct[], string, { rejectValue: string }>(
    "favorites/fetchFavoritesFromFirebase",
    async (userId, { rejectWithValue }) => {
        try {
            const favoritesArray = await firebaseGetFavorites(userId);
            if (!favoritesArray) {
                throw new Error('Server Error')
            }
            return favoritesArray;  
        } catch (error:any) {
            return rejectWithValue(error.message);
        }
    }
) 

export const addFavoriteToFirebase = createAsyncThunk<void, {userId: string, product: IProduct}, {rejectValue: string} >(
    'favorites/addFavoriteToFirebase',
    async ({userId, product}, { rejectWithValue, dispatch }) => {
        try {
            await firebaseAddFavorite(userId, product);
            dispatch(addFavorite(product));
       } catch (error: any) {
            return rejectWithValue(error.message);
       } 
    }
)

export const deleteFavoriteFromFirebase = createAsyncThunk<void, { userId: string, productId: string }, { rejectValue: string }>(
    'favorites/deleteFavoriteFromFirebase',
    async ({userId, productId}, {rejectWithValue, dispatch}) => {
        try {
            await firebaseRemoveFavorite(userId, productId);
            dispatch(deleteFavorite(productId));
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
)
