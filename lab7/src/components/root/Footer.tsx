import React from "react";
import "../../styles/root/Footer.css"

const Footer: React.FC = () => {
    return (
        <footer className="site-footer">
            <p className="copyright">&copy; 2023 Мой интернет-магазин</p>
            <address>
                Адрес: 123 ул. Улица, Город, Страна
            </address>
        </footer>
    )
}

export default Footer;
