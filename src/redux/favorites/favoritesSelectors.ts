import { RootState } from "../store";

export const getFavorites = (state: RootState) => state.products.favorites;
export const getFavoritesStatus = (state: RootState) => state.products.status;
export const getFavoritesError = (state: RootState) => state.products.error;