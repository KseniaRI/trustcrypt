import { IProduct } from "../types";

export const getFavoritesFromStorage = (): IProduct[] => {
    return JSON.parse(localStorage.getItem('favorites') || "[]");
}

export const addFavoriteToStorage = (product: IProduct) => {
    localStorage.setItem("favorites", JSON.stringify([...getFavoritesFromStorage(), product]));
}

export const deleteFavoriteFromStorage = (id: string) => {
    const updatedFavorites = getFavoritesFromStorage().filter(favorite => favorite.id !== id);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));    
}

export const checkIsProductInStorage = (id: string) => {
    return getFavoritesFromStorage()
        .map(favorite => favorite.id)
        .includes(id);
}