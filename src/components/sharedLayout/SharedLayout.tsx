import { Suspense } from "react";
import { Outlet } from 'react-router-dom';
import { Spin } from 'antd';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import './SharedLayout.scss';

const SharedLayout = () => {
    return (
        <>
            <Header />
            <Suspense fallback={<Spin size="large"/>}>
                <Outlet/>
            </Suspense>
            <Footer/>
        </>
    )
}

export default SharedLayout;