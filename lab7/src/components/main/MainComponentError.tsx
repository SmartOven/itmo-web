import {useRouteError} from "react-router-dom";
import React from "react";
import "../../styles/main/MainComponentError.css"

interface Error {
    statusText: string;
    message: string;
}

const MainComponentError: React.FC = () => {
    const error = useRouteError() as Error;
    return (
        <div className="main-page-error">
            <div className="flex-horizontal-center">
                <div>
                    <h1>Упс!</h1>
                    <div>Кажется, мы пока недоступны 😥</div>
                    <div>Попробуйте зайти попозже!</div>
                    <p>
                        <i>{error.statusText || error.message}</i>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MainComponentError;
