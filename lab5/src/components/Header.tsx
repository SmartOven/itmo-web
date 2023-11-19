import React from "react";
import "../styles/Header.css"

const Header: React.FC = () => {
    return (
        <div>
            <header className="site-header">
                <h1 className="site-name">Мой интернет-магазин</h1>
                <nav>
                    {/* FIXME Сделать норм навигацию, добавить hover на нее */}
                    <ul className="nav-list">
                        <li className="nav-element"><a className="nav-link" href="index.html">Главная</a></li>
                        <li className="nav-element"><a className="nav-link" href="contacts.html">Контакты</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header;
