import React from "react";
import NavBar from "./Components/Navigation/NavBar";
import { Outlet } from "react-router-dom";
import FooterMenu from "./Components/Footer/FooterMenu";

const Layout = () => {
    return (
        <div className="container">
            <NavBar />
            <div className="mt-10 px-4">
                <Outlet></Outlet>
            </div>
            <FooterMenu />
        </div>
    );
};

export default Layout;
