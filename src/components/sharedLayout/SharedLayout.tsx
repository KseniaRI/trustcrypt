import { Suspense } from "react";
import { Outlet } from 'react-router-dom';
import Header from "../header/Header";

const SharedLayout = () => {
    return (
        <>
            <Header />
            <Suspense>
                <Outlet/>
            </Suspense>
        </>
    )
}

export default SharedLayout;