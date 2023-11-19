import React from "react";
import "../styles/MainPage.css"
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import MainComponent from "../components/MainComponent.tsx";

const MainPage: React.FC = () => {
    return (
        <div>
            <Header/>
            <MainComponent/>
            <Footer/>
        </div>
    )
}

export default MainPage;
