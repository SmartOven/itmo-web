import React from "react";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import {Outlet} from "react-router-dom";

const RootLayout: React.FC = () => {
    return (
        <div>
            <Header/>
            <main className="site-main">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}

export default RootLayout;
