import { Link, useRouteError } from "react-router-dom"
import React from "react";

const ProductComponentError: React.FC = () => {
    const error = useRouteError() as Error;
    return (
        <div>
            <div className="flex-horizontal-center">
                <div>{error.message}</div>
            </div>
            <div className="flex-horizontal-center">
                <Link to='/'>Вернуться на главную страницу</Link>
            </div>
        </div>
    )
}

export default ProductComponentError
