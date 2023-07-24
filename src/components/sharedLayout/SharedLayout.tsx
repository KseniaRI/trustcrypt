import { Suspense } from "react";
import { Outlet } from 'react-router-dom';
import { Spin } from 'antd';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import './SharedLayout.scss';

const SharedLayout = () => {
    return (
        <div className="layout-container">
            <Header />
            <Suspense fallback={<Spin size="large"/>}>
                <Outlet/>
            </Suspense>
            <Footer/>
        </div>
    )
}

export default SharedLayout;