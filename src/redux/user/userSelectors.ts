import { RootState } from "../store";

export const getUserStatus = (state: RootState) => state.user.status;
export const getUserData = (state: RootState) => state.user.userData;
export const getUserError = (state: RootState) => state.user.error;