import React from "react";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";

const withHeaderAndFooter = (WrappedComponent: React.ComponentType) => {
    const WithHeaderAndFooter: React.FC = (props) => {
        return (
            <div>
                <Header/>
                <main className="site-main">
                    <WrappedComponent {...props} />
                </main>
                <Footer/>
            </div>
        )
    };
    return WithHeaderAndFooter;
};

export default withHeaderAndFooter;