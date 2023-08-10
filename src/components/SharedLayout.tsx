import { Suspense } from "react";
import { Outlet } from 'react-router-dom';
import { Spin } from 'antd';
import Header from "./header/Header";
import Footer from "./Footer";

const SharedLayout = () => {
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