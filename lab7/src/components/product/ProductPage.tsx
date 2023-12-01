import React from "react";
import {Outlet} from "react-router-dom";

const ProductPage: React.FC = () => {
    return (
        <div>
            <Outlet/>
        </div>
    )
}

export default ProductPage;
