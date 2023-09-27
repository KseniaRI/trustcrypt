import { Suspense } from "react";
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import { Spin } from 'antd';
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { ToastContainer } from "react-toastify";
import { fetchUserFromFirebase } from "../redux/user/userOperations";
import { fetchFavoritesFromFirebase } from "../redux/favorites/favoritesOperations";
import { getUserData, getUserStatus } from "../redux/user/userSelectors";
import { getFavoritesStatus } from "../redux/favorites/favoritesSelectors";
import Header from "./header/Header";
import Footer from "./Footer";

const SharedLayout = () => {
    const userStatus = useAppSelector(getUserStatus);
    const userData = useAppSelector(getUserData);
    const favoritesStatus = useAppSelector(getFavoritesStatus);

    const dispatch = useAppDispatch();  
    const localStorageUserId = localStorage.getItem('userId');

    useEffect(() => {
        if (!userStatus && localStorageUserId) {
            dispatch(fetchUserFromFirebase(localStorageUserId));
        }
    }, [userStatus, dispatch, localStorageUserId])
    
    useEffect(() => {
        if (userData.id && !favoritesStatus) {
            dispatch(fetchFavoritesFromFirebase(userData.id))
        }
    }, [favoritesStatus, userData, dispatch])

    return (
        <div className="layoutContainer">
            <Header />
            <Suspense fallback={<Spin size="large"/>}>
                <Outlet/>
            </Suspense>
            <Footer />
            <ToastContainer />
        </div>
    )
}

export default SharedLayout;