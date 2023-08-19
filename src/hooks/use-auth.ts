import { setUser } from "../redux/userSlice";
import { getUserFromFirebase } from "../services/firebase/firebaseUserOperations";
import { useAppDispatch, useAppSelector } from "./redux-hooks";
import { useEffect } from 'react'; 

export const useAuth = () => {
    const localStorageUserId = localStorage.getItem('userId');
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        const fetchUser = async () => {
            try {
                if (localStorageUserId) {
                    const userFromFirebase = await getUserFromFirebase(localStorageUserId);
                    dispatch(setUser(userFromFirebase));
                } 
            } catch (error) {
                console.log(error); 
            }
        }

        fetchUser();
    }, [localStorageUserId, dispatch]);

    const { email, id, token } = useAppSelector(state => state.user);

    return {
        isAuth: !!email,
        email,
        token,
        id
    }
}