 import { toast } from 'react-toastify';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAddUser, firebaseGetUser} from "../../services/firebase/firebaseUserOperations";
import { IAccessCredentials, IUser } from "../../types";
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUserFromFirebase = createAsyncThunk<IUser, string, { rejectValue: string }>(
    "user/fetchUserFromFirebase",
    async (userId, {rejectWithValue}) => {
        try {
            const userFromFirebase = await firebaseGetUser(userId);
            if (!userFromFirebase) {
                throw new Error('Server Error')
            }
            return userFromFirebase;
        } catch (error: any) {
            return rejectWithValue(error.message)
        }
    }
)

export const createNewUserViaFirebase = createAsyncThunk<IUser, IAccessCredentials, { rejectValue: string }>(
    "user/createNewUserViaFirebase",
    async (values, {rejectWithValue})  => {
        try {
            const { email, password } = values;
            const auth = getAuth();
            const { user } = await createUserWithEmailAndPassword(auth, email, password);

            if (!user) {
                throw new Error('Registration server error')
            }

            const accessToken = await user.getIdToken();
            
            const userData = {
              email: user.email,
              id: user.uid,
              token: accessToken,
            };

            localStorage.setItem("userId", userData.id);
            await firebaseAddUser(userData);
            toast.success(`Создан новый аккаунт с ${userData.email}`);

            return userData;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
)

export const authoriseUserViaFirebase = createAsyncThunk<IUser, IAccessCredentials, { rejectValue: string }>(
    "user/authoriseUserViaFirebase",
    async (values, {rejectWithValue}) => {
        try {
            const { email, password } = values;
            const auth = getAuth();
            const { user } = await signInWithEmailAndPassword(auth, email, password);

            if (!user) {
                throw new Error('Authorisation server error');
            }
            const accessToken = await user.getIdToken();
            
            const userData = {
                email: user.email,
                id: user.uid,
                token: accessToken,
            };

            localStorage.setItem("userId", userData.id);

            return userData;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }  
    }
)