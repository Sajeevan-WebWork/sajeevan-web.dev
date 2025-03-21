import React from "react";
import NavBar from "./Components/Navigation/NavBar";
import { Outlet } from "react-router-dom";
import FooterMenu from "./Components/Footer/FooterMenu";
import ScrollToTop from "./Components/Hooks/ScrollToTop";
import { Toaster } from "react-hot-toast";

const Layout = () => {
    return (
        <div className="container">
            <NavBar />
            <div className="mt-4 lg:mt-16 px-4">
                <ScrollToTop />
                <Outlet></Outlet>
                <Toaster />
            </div>
            <FooterMenu />
        </div>
    );
};

export default Layout;
