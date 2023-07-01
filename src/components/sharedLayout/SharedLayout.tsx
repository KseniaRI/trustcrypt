import { Suspense } from "react";
import { Outlet } from 'react-router-dom';
import Header from "../header/Header";
import Footer from "../footer/Footer";

const SharedLayout = () => {
    return (
        <>
            <Header />
            <Suspense>
                <Outlet/>
            </Suspense>
            <Footer/>
        </>
    )
}

export default SharedLayout;