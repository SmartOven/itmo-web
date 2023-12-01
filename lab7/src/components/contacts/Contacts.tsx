import React from "react";

const Contacts: React.FC = () => {
    return (
        <div>
            <div className="flex-horizontal-center">
                <p>Мы находимся по адресу Санкт-Петербург, Кронверкский проспект, 49</p>
            </div>
            <div className="flex-horizontal-center">
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac4f70e79d095343fd01c1aef74c80b085e5448b079dde124ed9803fc78619c7d&amp;source=constructor"
                    width="500" height="400" frameBorder="0"></iframe>
            </div>
        </div>
    )
}

export default Contacts;
