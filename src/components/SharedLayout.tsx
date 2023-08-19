import { Suspense } from "react";
import { Outlet } from 'react-router-dom';
import { Spin } from 'antd';
import Header from "./header/Header";
import Footer from "./Footer";
import { useEffect } from 'react'
import { useAppDispatch } from "../hooks/redux-hooks";
import { useAuth } from "../hooks/use-auth";
import { getFavoritesFromFirebase } from "../services/firebase/firebaseFavoritesOperations";
import { addFavorite } from "../redux/favoritesSlice";

const SharedLayout = () => {
    const dispatch = useAppDispatch();
    const { isAuth, id: userId } = useAuth();

    useEffect(() => {
            const fetchFavorites = async () => {
                if (isAuth && userId) {
                    try {
                        const favoritesArray = await getFavoritesFromFirebase(userId);
                        favoritesArray.forEach((favorite) => {
                            dispatch(addFavorite(favorite));
                        });
                    } catch (error) {
                        console.log(error);
                    }
                }
            };

        fetchFavorites();
        
        }, [isAuth, userId, dispatch]);
    
    return (
        <div className="layoutContainer">
            <Header />
            <Suspense fallback={<Spin size="large"/>}>
                <Outlet/>
            </Suspense>
            <Footer/>
        </div>
    )
}

export default SharedLayout;