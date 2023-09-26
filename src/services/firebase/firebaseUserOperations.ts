import { db } from "./firebase";
import {  IUser } from "../../types";
import { onValue, ref, child, set } from 'firebase/database';

export const firebaseAddUser = async (user: IUser) => {
    const userRef = ref(db, "users/");
    if (user.id) {
        await set(child(userRef, user.id), user);
    }  
}

export const firebaseGetUser = (userId: string): Promise<IUser> => {
    const userRef = ref(db, `users/${userId}`);

    return new Promise((resolve, reject) => {
        onValue(userRef, (snapshot) => {
            const userFromFirebase = snapshot.val();
            if (userFromFirebase) {
                resolve(userFromFirebase);
            }
        }, (error) => reject(error));
    })
}