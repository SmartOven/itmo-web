import withHeaderAndFooter from "../components/withHeaderAndFooter.tsx";
import React from "react";
import {Outlet} from "react-router-dom";

const ProductComponentWrapper: React.FC = () => {
    return (
        <div>
            <Outlet/>
        </div>
    )
}

const ProductPage = withHeaderAndFooter(ProductComponentWrapper);
export default ProductPage;
