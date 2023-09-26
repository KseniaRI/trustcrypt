import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser, Status } from "../../types";
import {
    authoriseUserViaFirebase,
    createNewUserViaFirebase,
    fetchUserFromFirebase
} from "./userOperations";

interface UserState {
    userData: IUser;
    error: string | undefined;
    status: Status | undefined;
}

const initialUser = {
    email: null,
    token: null, 
    id: null
}
const initialState: UserState = {
    userData: initialUser,
    error: undefined,
    status: undefined
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        removeUser: (state: UserState) => {
            state.userData = initialUser; 
            state.error = undefined;
            state.status = undefined;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserFromFirebase.pending, (state: UserState) => {
                state.error = undefined;
                state.status = Status.LOADING;
            })
            .addCase(fetchUserFromFirebase.fulfilled, (state: UserState, action: PayloadAction<IUser>) => {
                state.userData.email = action.payload.email;
                state.userData.id = action.payload.id;
                state.userData.token = action.payload.token;
                state.status = Status.RESOLVED;
            })
            .addCase(fetchUserFromFirebase.rejected, (state: UserState, action) => {
                state.error = action.payload;
                state.status = Status.REJECTED;
            })

            .addCase(authoriseUserViaFirebase.pending, (state: UserState) => {
                state.error = undefined;
                state.status = Status.LOADING;
            })
            .addCase(authoriseUserViaFirebase.fulfilled, (state: UserState, action: PayloadAction<IUser>) => {
                state.userData = action.payload;
                state.status = Status.RESOLVED;
            })
            .addCase(authoriseUserViaFirebase.rejected, (state: UserState, action) => {
                state.error = action.payload;
                state.status = Status.REJECTED;
            })

            .addCase(createNewUserViaFirebase.pending, (state: UserState) => {
                state.error = undefined;
                state.status = Status.LOADING;
            })
            .addCase(createNewUserViaFirebase.fulfilled, (state: UserState, action: PayloadAction<IUser>) => {
                state.userData = action.payload;
                state.status = Status.RESOLVED;
            })
            .addCase(createNewUserViaFirebase.rejected, (state: UserState, action) => {
                state.error = action.payload;
                state.status = Status.REJECTED;
            })
    }
})

export const {  removeUser } = userSlice.actions;
export default userSlice.reducer;