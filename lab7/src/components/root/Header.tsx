import React from "react";
import "../../styles/root/Header.css"
import NavElement from "./NavElement.tsx";

const Header: React.FC = () => {
    return (
        <div>
            <header className="site-header">
                <h1 className="site-name">Мой интернет-магазин</h1>
                <div className="nav-wrapper">
                    <div className="nav-list">
                        <NavElement href="/" text="Главная"/>
                        <NavElement href="/contacts" text="Контакты"/>
                        <NavElement href="/table-constructor" text="Конструктор таблиц"/>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;
