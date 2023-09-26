import { db } from "./firebase";
import { IProduct } from "../../types";
import { onValue, ref, child, set, remove } from 'firebase/database';

export const firebaseAddFavorite = async(userId: string, product: IProduct) => {
    const userFavoritesRef = ref(db, `users/${userId}/favorites`);
    await set(child(userFavoritesRef, product.id), product);
};

export const firebaseRemoveFavorite = async(userId: string, productId: string) => {
    const userFavoritesRef = ref(db, `users/${userId}/favorites`);
    await remove(child(userFavoritesRef, productId));
};

export const firebaseGetFavorites = async(userId: string): Promise<IProduct[]> => {
    const userFavoritesRef = ref(db, `users/${userId}/favorites`);

    return new Promise((resolve, reject) => {
        onValue(userFavoritesRef, (snapshot) => {
            const favoritesFromFirebase: IProduct[] = snapshot.val();
            if (favoritesFromFirebase) {
                const favoritesArray = Object.values(favoritesFromFirebase);
                resolve(favoritesArray);
            } else {
                resolve([]);
            }
        }, (error) => reject(error));
    });
};

